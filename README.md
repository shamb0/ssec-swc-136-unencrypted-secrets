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
