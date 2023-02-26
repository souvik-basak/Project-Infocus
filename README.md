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


## Credits

- Developer: @Kaushan
- Contributors:@Rupayan
