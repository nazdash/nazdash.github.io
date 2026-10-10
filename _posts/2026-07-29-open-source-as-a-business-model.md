---
layout: post
title: "Open source as a business model"
date: 2026-07-29 09:40:08 +0000
telegram: 140
ru: /ru/2026/07/29/open-source-as-a-business-model.html
---
At first glance an open-source business sounds strange.

You spend money on development, publish the code for free, competitors can copy it, users may not pay. Where is the business?

But in reality open source is almost never a business model in itself. It is a go-to-market strategy. A way to get distribution, trust and standardization.

A company opens up not because it is kind, but because in some markets openness gives you more than secrecy.

Why companies choose open source:

- Distribution. A developer can just grab it and try it without a sales call, procurement, demos and all that corporate bureaucracy. For developer tools this is a superpower.
- Trust. If you are putting a database, an infrastructure tool or an AI model inside your system, you need to understand what is going on in there. Especially when it comes to security, data, compliance or on-premise installs.
- Standard. If your project becomes the default choice, plugins, integrations, documentation, specialists and content grow up around it. And from then on it is no longer you selling to the market; the market starts selling you.
- Hiring and development. Strong engineers are more willing to go where their work is visible to the world. Plus the community finds bugs, writes integrations and tests edge cases.
- Making the adjacent layer cheaper. If you make money on cloud, support, enterprise features or applications, it is in your interest for the base layer to become more accessible and cheaper.

The last point is especially important for AI.

Many Chinese AI companies are now actively releasing open-weight models: DeepSeek, Qwen, Kimi and so on. This is not quite classic open source, because often the weights are open but the full training data, methodology and infrastructure are not. But the logic is similar.

If you cannot beat OpenAI with a closed premium model and consumer distribution, you can play differently: make the model so accessible and so good that developers, cloud providers, startups, research labs and corporations start using it. You buy reach at the price of disclosing part of the technology.

This makes particular sense if your real business is not selling a file with weights. The real business can be:

- inference as a service
- enterprise deployments
- fine-tuning and customization
- cloud resource consumption
- closed products on top of the model
- government and corporate contracts
- the ecosystem around your standard

In other words, open source in AI often works as a land grab. You give away the base layer in order to become part of someone else's stack.

## How open-source companies make money

1. Managed cloud

The most straightforward model. You can run the code yourself, but sensible companies pay for a ready-made cloud version, because nobody wants to debug Kubernetes at night to save $800.

MongoDB Atlas, Elastic Cloud, Confluent Cloud all come roughly from here.

2. Open core

The base version is open, the enterprise features are paid: SSO, access rights, audit logs, compliance, advanced security, team management, support.

This is the GitLab model. A developer starts for free, the company pays once organizational complexity appears.

3. Support and subscriptions

The Red Hat classic. Linux is free, but corporations pay for stability, security patches, certification, support and long-term maintenance. IBM did not buy Red Hat for $34B out of charity.

4. Source-available instead of true open source

Many companies started out as open source and then closed their license to shut out cloud competitors. MongoDB moved to SSPL, Elastic also experimented with licenses, HashiCorp switched Terraform to BSL, after which the OpenTofu fork appeared.

This is an important trade-off: you protect your monetization, but part of the community starts to feel you have broken the social contract.

5. Services and consulting

It works, but scales worse. Good as a start, bad as the final model if you want software margins.

How much do they make on this?

A lot, if the project becomes an infrastructure standard.

Red Hat was doing ~$3.4B in annual revenue before the IBM acquisition. GitLab is already at almost ~$1B in annual revenue. Elastic is around ~$1.7B. MongoDB is around ~$2.5B. HashiCorp was at about ~$600M in revenue before the sale to IBM. Confluent has also already crossed ~$1B in subscription revenue.

But here is an important caveat: almost none of these companies are "pure open source". They are open core, managed cloud, source-available, enterprise subscriptions. Community romance on top, very pragmatic monetization underneath.

## How to decide: open or closed?

I would look at it not ideologically, but through one question: where is your real moat?

If the moat is in the code as a secret, keep it closed.

If the moat is in distribution, cloud, data, brand, relationships with corporations, UX, ecosystem or speed of execution, you can open up part of the stack.

Open source works well when:

- the product is for developers, infrastructure or AI products
- reach matters more than fast monetization
- the market works on the principle of "the winner becomes the standard"
- the user cares about trust, self-hosting or on-premise installs
- plugins, integrations and a community can grow up around the product
- you know how to monetize the adjacent layer: cloud, enterprise features, support, applications

Closed code is better when:

- the code and the model are the main secret
- the product is easy to copy without your distribution
- there is no clear paid layer
- security, abuse and regulation matter too much
- consumer UX and brand matter more than developer adoption

My current conclusion: open source is not about "being kind" and not about "not knowing how to make money".

It is a way of telling the market: "let the base layer become a commodity, because I am going to make money on what sits above it, is more reliable, more convenient or closer to the corporate budget".

And if that works, the business can be enormous.

But if you opened up the only thing that was your moat and then did not build a cloud, an enterprise layer, distribution or a product on top, you have not built an open-source business.

You have just given the world a nice repository.
