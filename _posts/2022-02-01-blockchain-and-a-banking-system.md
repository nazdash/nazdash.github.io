---
layout: post
title:  "Blockchain and a banking system"
date:   2022-02-01 14:28:14 +0000
categories: general
---

*Originally posted [on my twitter](https://twitter.com/dashtiev){:target="_blank"}.*

***This post is in progress***

Let's look at banking systems in the majority of modern countries. Basically, it has 3 layers of data exchange:
- (1) the Central Bank (CB) database, exchange between the CB and commercial banks, to keep comm banks level ledger;
- (2) interbanking data exchange, exchange directly between banks, like SWIFT;
- (3) comm bank database, exchange between users of one bank, to keep users level ledger.

Interesting that if we're looking only at these data layers, w/o looking at other non-data mechanisms within this system, all layers are similar to layers we have at modern blockchain systems, for example, in Bitcoin/Lightning:
- L(1) - Bitcoin blockchain, exchange between main blockchain and lightning nodes;
- L(2) - Lightning payment channel, similar to SWIFT, exchange directly between lightning nodes;
- L(3) - Lightning nodes, similar to bank database, exchange between users of one node.

History rhymes. Or not?