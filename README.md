<h1 align="center">
 <img src="https://user-images.githubusercontent.com/45159366/95128607-878c7d80-070e-11eb-8a0d-5f01b80eb478.png">
  <br />
  Infocus Guide
</h1>

# Infocus: Blockchain-based Platform for Inventors

This is a platform that enables inventors to share their ideas and raise funds through crowd-funding. The platform is based on blockchain technology, which provides transparency, security, and decentralization.

## 💼 Table of Contents

* [Features](#-features)
* [Flow Diagram](#-getting-started)
* [Flow Description](#-documentation)
* [Gettig Started](#-contributing)
* [Usage](#-developing)
* [Contributing](#-community)
* [Resources](#-license)
* [Supporters](#-supporters)

![](https://raw.githubusercontent.com/btcpayserver/btcpayserver-doc/master/docs/img/BTCPayServerScreenshot.png)

## Features

- Secure platform using blockchain technology
- Easy submission of project ideas
- Transparent fundraising process
- Community feedback and collaboration
- Customizable reward system for project backers

# Flow Diagram
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72905801-17b0a100-3cff-11ea-8b4d-0cd6df807aa6.png">
</p>
<br>

# Flow Description
1. The blockchain operator sets up the IBM Blockchain Platform 2.0 service.
2. The IBM Blockchain Platform 2.0 creates a Hyperledger Fabric network on an IBM Kubernetes 
Service, and the operator installs and instantiates the smart contract on the network.
3. The Node.js application server uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform 2.0 and creates APIs for a web client.
4. The Loopback 4 client uses the Node.js application API to interact with the network.
5. The user interacts with the Loopback 4 web interface to update and query the blockchain ledger and state.

## Getting Started

To get started with the platform, you'll need to install the following dependencies:

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/)
- [Ganache](https://www.trufflesuite.com/ganache)

Once you've installed the dependencies, you can clone the repository and run the following commands to install the required packages and start the application:

 - npm install
 - npm start



The application will be available at http://localhost:3000/.

## Usage

To submit a project idea, simply create an account on the platform and fill out the project submission form. The platform will then verify the authenticity of the idea and publish it to the community.

To fund a project, you can browse the list of project ideas on the platform and select the ones that you'd like to support. The platform uses a transparent fundraising process, which means that you can track the progress of the project and see how the funds are being used.

## Contributing

We welcome contributions from the community! To contribute, simply fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the project's coding conventions and that you've added appropriate documentation.

## Resources

- [Documentation](https://github.com/yourusername/yourprojectname/docs)
- [Tutorials](https://github.com/yourusername/yourprojectname/tutorials)
- [Related Projects](https://github.com/yourusername/yourprojectname/related)

# Blockchain Tools, Libraries and Frameworks

[Hyperledger](https://www.hyperledger.org) is an open source community focused on developing a suite of stable frameworks, tools and libraries for enterprise-grade blockchain deployments. It serves as a neutral home for various distributed ledger frameworks including Hyperledger Fabric, Sawtooth, Indy, as well as tools like Hyperledger Caliper and libraries like Hyperledger Ursa.

[Hyperledger Caliper](https://www.hyperledger.org/use/caliper) is a blockchain benchmark tool, it allows users to measure the performance of a blockchain implementation with a set of predefined use cases. Hyperledger Caliper will produce reports containing a number of performance indicators to serve as a reference when using the following blockchain solutions: Hyperledger Besu, Hyperledger Burrow, Ethereum, Hyperledger Fabric, FISCO BCOS, Hyperledger Iroha and Hyperledger Sawtooth.

[Hyperledger Ursa](https://www.hyperledger.org/use/ursa) is a shared cryptographic library, it enables implementations to avoid duplicating other cryptographic work and hopefully increase security in the process. The library is an opt-in repository (for Hyperledger and non Hyperledger projects) to place and use crypto. Hyperledger Ursa consists of sub-projects, which are cohesive implementations of cryptographic code or interfaces to cryptographic code.

[Hyperledger Fabric](https://wiki.hyperledger.org/display/fabric) is an enterprise-grade permissioned distributed ledger framework for developing solutions and applications. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. 

[Geth](https://geth.ethereum.org/) is an implementation of an [Ethereum](https://ethereum.org/en/) node in the Go programming language. 

[Solidity](https://solidity.readthedocs.io/) is a purposefully slimmed down, loosely-typed language with a syntax very similar to ECMAScript (Javascript) that is used for the creation of smart contracts on the Ethereum blockchain. 

[GanacheCLI (NodeJS package)](https://www.trufflesuite.com/ganache) is a fast and customizable blockchain emulator. It simulates the Ethereum network on a single computer and allows you to make calls to the blockchain without any of the hassles of running a real Ethereum node.

[Truffle](https://trufflesuite.com/) is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. 

[Ethers.js](https://github.com/ethers-io/ethers.js/) is a library which was made for and is used by ethers.io. It is designed to make it easier to write client-side JavaScript based wallets, keeping the private key on the owner’s machine at all times.

[OpenEthereum](https://github.com/openethereum/openethereum) is a fast and feature-rich multi-network Ethereum client.

[Quorum](https://www.goquorum.com/) is an Ethereum-based distributed ledger protocol with transaction/contract privacy and new consensus mechanisms.

[Diesel](https://diesel.rs/) is a safe, extensible ORM and Query Builder for [Rust](https://www.rust-lang.org/).

[BlockShell](https://github.com/daxeel/blockshell) is a minimal command line utility for learning Blockchain technical concepts like chaining & mining. 

[Tendermint Core](https://tendermint.com/) is [Byzantine Fault Tolerant (BFT)](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance) middleware that takes a state transition machine written in any programming language and securely replicates it on many machines.

[inDEX](https://distribuyed.github.io/index/) is a comprehensive list of decentralized exchanges (DEX) of cryptocurrencies, tokens, derivatives and futures, and their protocols.

[Squeezer](https://squeezer.io/) is a platform that empowers new-entry blockchain developers to build serverless dApps easily.

## 🙏 Supporters

The Infocus Project is proudly supported by these entities:

[![Spiral](BTCPayServer/wwwroot/img/readme/supporter_spiral.svg)](https://spiral.xyz)
[![Baillie Gifford](BTCPayServer/wwwroot/img/readme/supporter_bailliegifford.svg)](https://www.bailliegifford.com)
[![Strike](BTCPayServer/wwwroot/img/readme/supporter_strike.svg)](https://strike.me)
[![Human Rights Foundation](BTCPayServer/wwwroot/img/readme/supporter_hrf.svg)](https://hrf.org)
[![LunaNode](BTCPayServer/wwwroot/img/readme/supporter_lunanode.svg)](https://lunanode.com)
[![Wallet of Satoshi](BTCPayServer/wwwroot/img/readme/supporter_walletofsatoshi.svg)](https://walletofsatoshi.com/)
[![Coincards](BTCPayServer/wwwroot/img/readme/supporter_coincards.svg)](https://coincards.com/)
[![IVPN](BTCPayServer/wwwroot/img/readme/supporter_ivpn.svg)](https://ivpn.net/)
