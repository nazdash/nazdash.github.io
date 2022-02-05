---
layout: post
title:  "What is a gas fee"
date:   2022-01-11 18:16:00 +0000
categories: general
---

*Originally posted [on my twitter](https://twitter.com/dashtiev){:target="_blank"}.*

##### Ethereum basics

The concept of gas fees, how they are calculated and how affect your transactions is fundamental to understanding how the Ethereum blockchain works.

Basically, Ethereum is a decentralized computer that runs different types of transactions (txns) which could change the blockchain state.

Some examples of txns are:
- Send ETH from one account to another
- Interact with a smart contract, like swap a token on Uniswap

All txns are initiated by accounts of the Ethereum network and basically are cryptographically signed instructions for the computer, the so-called Ethereum Virtual Machine (EVM).

EVM is what defines the rules for computing a new valid state from block to block.

There're two types of accounts in Ethereum:
- Account managed by a human
- Account managed by a program (i.e. smart contract)

Both types of accounts can:
- Receive, hold and send ETH and tokens
- Interact with deployed smart contracts

A smart contract is a program that "lives inside" a blockchain and can be triggered by txn from another account and execute many different actions, such as transferring tokens or even creating a new contract.

Since each Ethereum txn requires computational resources to execute, each txn requires a fee and must be mined to become valid. 

##### Gas basics

"Gas" refers to the fee required to conduct a transaction on Ethereum successfully.

The simplest and most common txn type is a transfer of ETH from one account to another. Such txn requires 21000 gas to be executed.

Complex txns, like smart contract creation or smart contract call can cost substantially higher.

On a high level, the gas fee can be split into two different multipliers:

<code>[Gas fee] = [Gas units] * [Gas price per unit]</code>.

<code>[Gas units]</code> is an amount of computational effort required to execute specific operations on the Ethereum network.

<code>[Gas price per unit]</code> is a price depending on the network busyness and denoted in gwei.

Gwei is 10^-9 ETH.\
Gwei itself means giga-wei, and it's equal to 10^9 wei.\
Wei is the smallest unit of ETH, and it's equal to 10^-18 ETH.\
Wei itself is named after Wei Dai, creator of Bitcoin "predecessor" b-money, distributed electronic cash system.

Calculating gas used to be very complicated, but it was simplified after EIP 1559 implementation (as part of the London Upgrade) in the middle of 2021.

If your wallet supports EIP 1559 (like Metamask), gas for your txn will be calculated as:

<code>[Gas price] = [Gas units] * ( [Base fee] + [Priority fee] )</code>

It this particular example:
<code>[Gas price] = 248688 * (168 + 2) * 10^-9 * ETH_price = $128</code>

<img src="{{site.url}}/assets/images/what-is-a-gas-fee/metamask-wallet.png">

<code>[Base fee]</code> is set by the network. It increases and decreases automatically based on network busyness.
This fee gets burned when it's paid.

<code>[Priority fee]</code> is optional and not burning. It goes to a miner as an incentive to process your txn sooner.

For example, If you put 0 gwei for <code>[Priority fee]</code> more likely there will be no reason for the miner to include your txn into the block.\
Without this fee, miners would find it economically viable to mine empty blocks, as they would receive the same block reward.

You can find actual block base fee and priority fees for different types of txn execution speed (e.g. low, average, high) on various websites.
For example here: [https://etherscan.io/gastracker](https://etherscan.io/gastracker){:target="_blank"}

<img src="{{site.url}}/assets/images/what-is-a-gas-fee/etherscan.jpg">

<code>[Max fee]</code> includes both <code>[Base fee]</code> and <code>[Priority fee]</code> and it's a maximum amount of fee you'd be willing to pay to a txn.

Metamask initially sets this amount based on the previous block’s history.

The higher <code>[Max fee]</code> is, the more chances txn will be successful in case of a surge in blockchain use (i.e. [Base fee] increase) after txn is submitted.

##### What is a gas limit and why it exists

So, now we know how fees per gas unit are produced. 

Let's move to the <code>[Gas limit]</code> and how it differs from actual gas usage.

<img src="{{site.url}}/assets/images/what-is-a-gas-fee/gas-usage.jpg">

<code>[Gas limit]</code> refers to the maximum amount of <code>[Gas units]</code> you are willing to consume on a txn.

If your gas limit will be lower than the actual amount of gas units needed to execute a txn, txn will be unsuccessful. The EVM then reverts any changes, **but the gas will be consumed**.

If we can exactly estimate a <code>[Gas limit]</code> for a txn it will be equal to actual gas usage.

But, usually, due to various reasons, it's very hard to estimate exactly how many gas units are needed to execute a particular txn.

Even two absolutely the same txns can have different gas usage because of different EVM states while executing.
Here's an example:\
[https://ethereum.stackexchange.com/questions/44643/why-gas-used-are-different-for-same-transfer-tx](https://ethereum.stackexchange.com/questions/44643/why-gas-used-are-different-for-same-transfer-tx){:target="_blank"}

##### Final words

Txns are basically a list of instructions for EVM. And any instruction has a universally agreed cost in terms of gas.

More details about these 'costs' and other implementations of the EVM can be found in an Ethereum Yellowpaper: \
[https://ethereum.github.io/yellowpaper/paper.pdf](https://ethereum.github.io/yellowpaper/paper.pdf){:target="_blank"}

<img src="{{site.url}}/assets/images/what-is-a-gas-fee/yellowpaper.png">

If you want to go deeper on this topic you can start with Ethereum documentation:\
[https://ethereum.org/en/developers/docs/gas/](https://ethereum.org/en/developers/docs/gas/){:target="_blank"}

Gas fees is definitely a great concept that showed credibility over many years, but the next big step in Ethereum adoption will be a new UI/UX layer where a regular user doesn't even know about its existence.

