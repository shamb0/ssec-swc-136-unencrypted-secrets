import { expect } from './setup'

/* External Imports */
import { ethers } from '@nomiclabs/buidler'

import { Contract, ContractFactory, Signer, BigNumber, utils, providers } from 'ethers'
import {
  getContractFactory, add0x, sleep, sendLT, getBalanceLT, ContractDeployOptions, deployContract, linkBytecode
} from './test-utils'

import { getLogger } from './test-utils'

import { GAS_LIMIT } from './test-helpers'

const log = getLogger('Unencrypted-Secrets-Test')

describe('unencrypted-secrets Test', () => {
  let wallet: Signer
  let usr1: Signer
  let usr2: Signer
  let usr3: Signer

  before(async () => {
    ;[wallet, usr1, usr2, usr3] = await ethers.getSigners()

    log.info(`Admin :: ${await wallet.getAddress()}`)
    log.info(`Usr1 :: ${await usr1.getAddress()}`)
    log.info(`Usr2 :: ${await usr2.getAddress()}`)
    log.info(`Usr3 :: ${await usr3.getAddress()}`)
  })

  let nwkgasprice
  let oddevenfact: ContractFactory
  let oddeveninst: Contract
  before(async () => {

    oddevenfact = getContractFactory( "OddEven", wallet )

    nwkgasprice = await ethers.provider.getGasPrice()

    log.debug( `Network Gas price @ ${nwkgasprice}`)
    log.debug( `Network Gas price @ ${ethers.utils.formatUnits( nwkgasprice , "ether" )}`)

    log.debug(`S1-Ent wallet bal :: ${ethers.utils.formatUnits(await wallet.getBalance(), "ether")}`)

    oddeveninst = await oddevenfact.deploy()

    // const transamount = ethers.utils.parseUnits( "10", 18 )

    // const receipt = await wallet.sendTransaction({
    //   to: oddeveninst.address,
    //   value: transamount,
    //   gasLimit: GAS_LIMIT,
    // })

    // await oddeveninst.provider.waitForTransaction( receipt.hash )

    log.debug( `OddEven @ ${oddeveninst.address}`)

    const bal = await oddeveninst.provider.getBalance( oddeveninst.address )

    log.debug(`OddEven balance :: ${ethers.utils.formatUnits( bal , "ether" )}`)

    log.debug(`S1-Ext wallet bal :: ${ethers.utils.formatUnits(await wallet.getBalance(), "ether")}`)

  })


  it("tst-item-001-usr1-play", async () => {

    try {

      log.debug(`S2-Ent :: ${ethers.utils.formatUnits( await wallet.getBalance(), "ether")}`)

      log.debug(`S2-Ent usr1 bal :: ${ethers.utils.formatUnits( await usr1.getBalance(), "ether")}`)

        // const tempcontint = new Contract( oddeveninst.address,
        //                                 oddevenfact.interface,
        //                                 usr1
        //                                 )

        const transamount = ethers.utils.parseUnits( "10", 18 )

        const playCalldata = oddeveninst.interface.encodeFunctionData(
                                        'play',
                                        [2]
                                      )

        let trancnt = await usr1.provider.getTransactionCount(await usr1.getAddress())

        log.debug(`S2.2 nounce :: ${trancnt}`)

        await usr1.provider.call({
          to: oddeveninst.address,
          from: await usr1.getAddress(),
          nonce: trancnt,
          gasLimit: GAS_LIMIT,
          gasPrice: nwkgasprice,
          data: add0x(playCalldata),
          value: transamount
        })

        const bal = await oddeveninst.provider.getBalance( oddeveninst.address )

        log.debug(`OddEven balance :: ${ethers.utils.formatUnits( bal , "ether" )}`)

        log.debug(`S2-Ext usr1 bal :: ${ethers.utils.formatUnits( await usr1.getBalance(), "ether")}`)

        log.debug(`S2-Ext :: ${ethers.utils.formatUnits( await usr1.getBalance(), "ether")}`)
    }
    catch( err ){

      log.error(`Exception Err ${err}`)
    }
  })


  it("tst-item-001-usr2-play", async () => {

    try {

      log.debug(`S2-Ent :: ${ethers.utils.formatUnits( await wallet.getBalance(), "ether")}`)

      log.debug(`S2-Ent usr2 bal :: ${ethers.utils.formatUnits( await usr2.getBalance(), "ether")}`)

        // const tempcontint = new Contract( oddeveninst.address,
        //                                 oddevenfact.interface,
        //                                 usr2
        //                                 )

        const transamount = ethers.utils.parseUnits( "10", 18 )

        const playCalldata = oddeveninst.interface.encodeFunctionData(
                                        'play',
                                        [ 10 ]
                                      )

        let trancnt = await usr2.provider.getTransactionCount(await usr2.getAddress())

        log.debug(`S2.2 nounce :: ${trancnt}`)

        await usr2.provider.call({
          to: oddeveninst.address,
          from: await usr2.getAddress(),
          nonce: trancnt,
          gasLimit: GAS_LIMIT,
          gasPrice: nwkgasprice,
          data: add0x(playCalldata),
          value: transamount
        })

        const bal = await oddeveninst.provider.getBalance( oddeveninst.address )

        log.debug(`OddEven balance :: ${ethers.utils.formatUnits( bal , "ether" )}`)

        log.debug(`S2-Ext usr2 bal :: ${ethers.utils.formatUnits( await usr2.getBalance(), "ether")}`)

        log.debug(`S2-Ext :: ${ethers.utils.formatUnits( await wallet.getBalance(), "ether")}`)
    }
    catch( err ){

      log.error(`Exception Err ${err}`)
    }
  })

  afterEach("Test-Case End Contract Status", async () => {

    let bal = await oddeveninst.provider.getBalance( oddeveninst.address );

    log.debug(`OddEven balance :: ${ethers.utils.formatUnits( bal , "ether" )}`)

    log.debug(`S3-Ext wallet bal :: ${ethers.utils.formatUnits(await wallet.getBalance(), "ether")}`)

  })

  after("Test Done Cleanup", async () => {

    // await phishableattackinst.closeContract( await wallet.getAddress() )

    let bal = await oddeveninst.provider.getBalance( oddeveninst.address );

    log.debug(`OddEven balance :: ${ethers.utils.formatUnits( bal , "ether" )}`)

    log.debug(`S4-Ext wallet bal :: ${ethers.utils.formatUnits(await wallet.getBalance(), "ether")}`)

  })

})
