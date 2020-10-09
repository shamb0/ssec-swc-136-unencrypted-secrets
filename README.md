# ssec-swc-136-unencrypted-secrets | Solidity | Security | SWC-136 | Unencrypted Secrets

UnencryptedSecrets

**Description**

It is a common misconception that private type variables cannot be read. Even if your contract is not published, attackers can look at contract transactions to determine values stored in the state of the contract. For this reason, it's important that unencrypted private data is not stored in the contract code or state.

**Remediation**

Any private data should either be stored off-chain, or carefully encrypted.

---

## Reference

* [Overview · Smart Contract Weakness Classification and Test Cases](https://swcregistry.io/)

* [SWC-136 · Overview](https://swcregistry.io/docs/SWC-136)

* [KadenZipfel/smart-contract-attack-vectors: A collection of smart contract attack vectors along with prevention methods.](https://github.com/KadenZipfel/smart-contract-attack-vectors)

* [Keeping secrets on Ethereum. Many contracts, like game contracts… | by Manoj P R | Solidified | Medium](https://medium.com/solidified/keeping-secrets-on-ethereum-5b556c3bb1ee)

---

**Howto Install & build**

```shell
git clone https://github.com/shamb0/ssec-swc-136-unencrypted-secrets.git
cd ssec-swc-136-unencrypted-secrets
yarn install
yarn build
```

### OddEven ( Vulnarable One )

```shell
main $ env DEBUG="info*,debug*,error*" yarn run test test/OddEven.spec.ts
yarn run v1.22.4
$ yarn run test:contracts test/OddEven.spec.ts
$ cross-env SOLPP_FLAGS="FLAG_IS_TEST,FLAG_IS_DEBUG" buidler test --show-stack-traces test/OddEven.spec.ts
$(process.argv.length)
All contracts have already been compiled, skipping compilation.


  unencrypted-secrets Test
  info:Unencrypted-Secrets-Test Admin :: 0x17ec8597ff92C3F44523bDc65BF0f1bE632917ff +0ms
  info:Unencrypted-Secrets-Test Usr1 :: 0x63FC2aD3d021a4D7e64323529a55a9442C444dA0 +0ms
  info:Unencrypted-Secrets-Test Usr2 :: 0xD1D84F0e28D6fedF03c73151f98dF95139700aa7 +0ms
  info:Unencrypted-Secrets-Test Usr3 :: 0xd59ca627Af68D29C547B91066297a7c469a7bF72 +0ms
  debug:Unencrypted-Secrets-Test Network Gas price @ 8000000000 +0ms
  debug:Unencrypted-Secrets-Test Network Gas price @ 0.000000008 +0ms
  debug:Unencrypted-Secrets-Test S1-Ent wallet bal :: 200.0 +5ms
  debug:Unencrypted-Secrets-Test OddEven @ 0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA +46ms
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +2ms
  debug:Unencrypted-Secrets-Test S1-Ext wallet bal :: 199.997445816 +2ms
  debug:Unencrypted-Secrets-Test S2-Ent :: 199.997445816 +3ms
  debug:Unencrypted-Secrets-Test S2-Ent usr1 bal :: 200.0 +2ms
  debug:Unencrypted-Secrets-Test S2.2 nounce :: 0 +3ms
arg addr[0x63fc2ad3d021a4d7e64323529a55a9442c444da0] val[2]
Cont bal[10000000000000000000]
addr[0x63fc2ad3d021a4d7e64323529a55a9442c444da0]::numb[2]
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +36ms
  debug:Unencrypted-Secrets-Test S2-Ext usr1 bal :: 200.0 +2ms
  debug:Unencrypted-Secrets-Test S2-Ext :: 200.0 +2ms
    ✓ tst-item-001-usr1-play (47ms)
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +3ms
  debug:Unencrypted-Secrets-Test S3-Ext wallet bal :: 199.997445816 +3ms
  debug:Unencrypted-Secrets-Test S2-Ent :: 199.997445816 +3ms
  debug:Unencrypted-Secrets-Test S2-Ent usr2 bal :: 200.0 +3ms
  debug:Unencrypted-Secrets-Test S2.2 nounce :: 0 +4ms
arg addr[0xd1d84f0e28d6fedf03c73151f98df95139700aa7] val[10]
Cont bal[10000000000000000000]
addr[0xd1d84f0e28d6fedf03c73151f98df95139700aa7]::numb[10]
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +31ms
  debug:Unencrypted-Secrets-Test S2-Ext usr2 bal :: 200.0 +3ms
  debug:Unencrypted-Secrets-Test S2-Ext :: 199.997445816 +2ms
    ✓ tst-item-001-usr2-play (46ms)
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +2ms
  debug:Unencrypted-Secrets-Test S3-Ext wallet bal :: 199.997445816 +3ms
  debug:Unencrypted-Secrets-Test OddEven balance :: 0.0 +2ms
  debug:Unencrypted-Secrets-Test S4-Ext wallet bal :: 199.997445816 +3ms


  2 passing (347ms)

Done in 7.82s.
```
