---
layout: post
title: "A brief history of AI applications"
date: 2025-06-03 20:28:42 +0000
telegram: 85
ru: /ru/2025/06/03/a-brief-history-of-ai-applications.html
---
## Intro

![](/assets/images/tg/85_0.jpg)

People have been doing machine learning for a long time. Progress was always happening in different corners of computer science. Artificial neural networks have been known since, I think, the 50s, and 30 years ago there were already cool applications people had written - for example [here](https://www.youtube.com/watch?v=FwFduRA_L6Q) Yann LeCun (now a director at Meta), one of the founders of CNN architectures in neural networks, shows a neural net recognizing digits. But there were no big breakthroughs in those applications, more like cool demos that were hard to apply to real problems.

Everything developed more or less evenly until, in the late 2000s, Geoffrey Hinton (the one who recently, unexpectedly, got a Nobel Prize in physics for his work in AI), who had long worked on psychology, how the brain works, and later neural networks, realized that graphics cards (GPUs) turn out to be better suited than CPUs for the math that neural networks need to do in enormous quantities (linear algebra, matrix operations, tensors and so on). And that's when the breakthrough happened. Specifically in image recognition.

It's important to understand the context. By 2010 researchers had one big problem - there was no proper dataset for training and testing image recognition models. There were various small sets like MNIST (handwritten digits) or CIFAR-10 (32x32 images in 10 categories), but that was like learning to drive on a toy track.

In those same years Fei-Fei Li from Stanford did something fundamental - ImageNet. She and her team collected a dataset of 14 million images in 22 thousand categories. But the coolest part - they launched the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) competition in 2010. The task is simple: here's a million training images in 1000 categories, show how well your model can classify them.

For the first couple of years all the solutions were based on classical computer vision - features were extracted by hand, then fed into an SVM or something similar. The error rate was around 25-30%. And then in 2012 Hinton and his team showed up with their model and simply destroyed everyone - 15.3% error! That was a gap of almost 10 percentage points from the nearest competitor. That's a lot.

## AlexNet

![](/assets/images/tg/86_0.jpg)
![](/assets/images/tg/87_0.jpg)

Thanks to improved compute and new approaches to architecture, Hinton and his team managed to train a very cool (for its time) neural net - [AlexNet](https://en.wikipedia.org/wiki/AlexNet). One of Hinton's students, by the way, was Ilya Sutskever, who would later be one of the co-founders of OpenAI.

You could say the clock on deep neural networks started with AlexNet, in 2012 - when people realized that the architectures described 30 years earlier actually work, they just had to be made much bigger (more neurons) and you had to spend much more compute for the network to learn.

Then came another period of steady progress across all the disciplines within machine learning over the next 5 years - good image recognition, speech recognition and synthesis, image style transfer and so on. Very hyped apps appeared - like Prisma or MSQRD. OpenAI was founded, somewhere around the turn of 2015/2016.

But with all that, no fundamental breakthrough happened, since neural nets back then (quite small by today's standards) required a lot of GPUs for training and inference (that's what the actual work of a trained network is called).
Everyone sort of wanted even bigger networks, understood that bigger would mean better results, but there wasn't really a way to go bigger.

That was the case until in 2017 the folks at Google wrote the now historic paper - [Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need). In it they presented several breakthrough ideas on neural network architectures at once, namely the architecture now called the Transformer. One of the main ideas was "attention", which let the network understand context better, and another was how to technically work better at the level of operations on the GPU.

It was a breakthrough paper. Nevertheless, even though the paper was written at Google, the main beneficiary soon turned out to be OpenAI. And the person who helped them succeed at that was Ilya Sutskever. I listened to an interview where he says that when he saw the transformer paper he immediately understood that this was what would let them scale their neural nets at OpenAI.

## The transformer era

![](/assets/images/tg/88_0.jpg)

After transformers appeared, a real race began. In 2018 Google rolled out BERT (Bidirectional Encoder Representations from Transformers) - a model that learned to understand the context of words from both sides of a sentence. It was a breakthrough for language understanding tasks - classification, question answering and so on. BERT broke all the records on benchmarks and showed that pre-training on huge corpora of text gives incredible results.

OpenAI had long been working on text generation, or more precisely on predicting which word comes next in a set of words fed to the model as input. They applied "transformers" there and the quality of predictions grew substantially, it was a breakthrough. That's how the GPT models appeared - [Generative Pre-trained Transformer](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer). OpenAI first offered GPT models through an API for developers, and then they made a consumer product, ChatGPT.

GPT-1 was released in 2018. It was a relatively small model with on the order of 100 million parameters, but it already showed that you could take a transformer, train it to predict the next word on a pile of text from the internet, and then fine-tune it for specific tasks.

In 2019 they released GPT-2 with 1.5 billion parameters. And here something interesting happened - OpenAI at first refused to publish the full model, saying it was too dangerous, could generate fake news and so on. People laughed, but when the model was eventually released, it turned out it really could generate very convincing text. That was the first warning bell that we were approaching something serious.

Everything turned out just as Sutskever predicted. Today "transformers" are in fact under the hood of ML applications everywhere, which are now called AI applications. Almost all the improvements in video, image, text generation and so on today are applications of the architecture the folks at Google published in 2017.

What's more. Over the past 3-4 years almost all the major hardware vendors have started designing GPUs/TPUs/AI chips specifically for the needs of transformers.

## The ChatGPT revolution

![](/assets/images/tg/90_0.jpg)

In 2020 OpenAI released GPT-3 with 175 billion parameters - a monster compared to the previous versions. But the real revolution happened when OpenAI figured out how to make these models useful for ordinary people.

The thing is, if you just take a pre-trained model, like GPT-3 was, and try to talk to it the way you're used to talking to modern chatbots, you won't get any long dialogue out of it. It will be more like a set of logical but not very connected texts. Not bad for getting a short answer, but definitely not an AI conversation partner. Passing the Turing test was still a long way off.
The secret sauce was RLHF - Reinforcement Learning from Human Feedback.

The idea of RLHF is simple: take a bunch of people, they rate which of the model's answers are good and which are bad. Based on those ratings we train another model (a reward model), which learns to predict what people will like. And then we use reinforcement learning so that the main model generates answers this reward model will like. Essentially, we teach the AI to be helpful, harmless and honest through human feedback.

It was RLHF that turned the raw GPT-3.5 into ChatGPT, which blew up the internet in November 2022. It was the fastest-growing consumer product in history.

This breakthrough, which OpenAI was the first to pull off, around 2021/2022, spurred everyone else - startups, venture investors, the big tech giants - to invest money and time in this industry. In particular, Nvidia's stock grew 10x on the frantic demand for its chips, since they are the default choice for anyone who wants to train and run inference on neural nets.

## LLM

![](/assets/images/tg/92_0.jpg)

LLM stands for Large Language Models, in general the name of a class, but in practice today it's the subset of transformers that work with text.

If we talk purely about text, what's happening today can be split into two stages:
- First everyone improved quality by increasing the number of GPUs and the amount of data (for example OpenAI's GPT-1/2/3/4/4o models)
- Then everyone hit a certain ceiling on compute/data and started doing active post-training optimization, so-called reasoning - to simplify, improving answers by having the network run its generated answer through itself again and evaluate its quality. Then it returns the improved answer (for example OpenAI's o1, o3, o3-mini models)

Now every LLM provider has a bunch of different models for different purposes - some faster and cheaper, some pricier and thinking longer, some better for general tasks, some better for coding and so on.

There's a huge number of different LLM models on the market right now - proprietary and open source. There's plenty to choose from. I'll list just some of the ones everyone is talking about as of spring-summer 2025:

OpenAI
- Many different models, good quality on average across many tasks
- They have ChatGPT - by a huge margin the most popular consumer AI product, they have hundreds of millions of users

Anthropic
- Can probably officially be called number 2 after OpenAI on the sum of all factors
- My favorite, we use them a lot
- Their model Claude Sonnet 3.5/3.7 is excellent for almost all tasks, in particular for code generation and copywriting
- Update: the 4 models have now already come out

Gemini
- Google's product
- The latest models are very good
- The main feature is the huge context window, meaning you can load a lot of material into the chat or just keep a conversation going for a very long time without interruption
- Google in general should be the leader here considering they do almost everything, invented those same transformers and make their own chips (TPUs, Nvidia's competitors), but so far they're behind in the race for developers and consumers. But I think they have a chance to catch up

Gemma
- Also Google, but open source
- The latest models are quite decent on the benchmarks

Meta
- They make the main open source model in the world right now - LLama
- A decent base LLM, used in many places as a foundation for fine-tuning and further training

Mistral
- A French AI company making the models of the same name, many of which it releases as open source
- Like Tottenham: "You were never crap, but you never made it to the top either"

Grok
- xAI's product
- The API seems decent
- Their latest model was trained on the largest cluster to date
- For all of Musk's marketing, they haven't gained much popularity outside Twitter/X yet
- But time will tell - after all, it's better not to bet against Musk

Deepseek
- These are the Chinese who blew up the market with their open source model, almost on par in quality with OpenAI's best model, and they spent far less money on it (but also did it years later, which matters)
- They took a clear niche with a cheap and relatively good model (their model can be used on a bunch of platforms, usually cheaper than everything else)

Qwen
- A whole family of models for every taste from Alibaba
- Some models are leaders in the open-weight world, ahead of that same Llama and Deepseek
