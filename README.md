<h1 align="center">
 <img src="https://user-images.githubusercontent.com/45159366/95128607-878c7d80-070e-11eb-8a0d-5f01b80eb478.png">
  <br />
  Infocus Guide
</h1>

## 💼 Table of Contents

* [Features](#-features)
* [Getting Started](#-getting-started)
* [Documentation](#-documentation)
* [Contributing](#-contributing)
* [Developing](#-developing)
  * [API](#-api)
* [Community](#-community)
* [License](#-license)
* [Supporters](#-supporters)

![](https://raw.githubusercontent.com/btcpayserver/btcpayserver-doc/master/docs/img/BTCPayServerScreenshot.png)

# Flow Diagram
<br>
<p align="center">
  <img src="docs/app-architecture.png">
</p>
<br>

# Flow Description
1. The blockchain operator sets up the IBM Blockchain Platform 2.0 service.
2. The IBM Blockchain Platform 2.0 creates a Hyperledger Fabric network on an IBM Kubernetes 
Service, and the operator installs and instantiates the smart contract on the network.
3. The Node.js application server uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform 2.0 and creates APIs for a web client.
4. The Loopback 4 client uses the Node.js application API to interact with the network.
5. The user interacts with the Loopback 4 web interface to update and query the blockchain ledger and state.

## Problem Statement and Necessity 
Crowdfunding is one of the most popular ways to raise funds for any project, cause or for helping any individual in need. With the onset of Covid we have seen a rise in Crowdfunding activities across the globe which includes small campaigns to help people get oxygen and medical help to large funds such as PM Cares.

The major problems with the Current Crowdfunding Platforms that we wanted to solve were : 
- Security : As the funds become larger, they need to be heavily secure, although stringent measures such as symmetric encryption are in place to make e-payment safe and secure,it is still vulnerable to hacking. Blockchain — which has never been compromised yet — can provide that level of security.
- Transparency and Anti-Fraud  : We have seen, and continue to see a lot of crowdfunding scams happening around. There is no way to see where the funds are being used. We wanted to make the entire flow of funds transparent at every stage, so that there is no possibility of the money being misused.
- Global contribution : With some of the platforms being country specific, it becomes hard for people from other countries to contribute to various campaigns. Using blockchain anyone in the world can contribute to the campaign. Transactions are quick and convenient.

## Prerequisites

* Node 14
* Yarn
* PostgreSQL 10  or 12
* Ruby 2.7
* Ubuntu 18.04, 20.04, 22.04 or equivalent

## Credits

- Developer: @Kaushan
- Contributors:@Rupayan
