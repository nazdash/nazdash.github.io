---
layout: post
title: "How to read LLM benchmarks"
date: 2026-02-17 14:44:57 +0000
telegram: 133
ru: /ru/2026/02/17/how-to-read-llm-benchmarks.html
---
![](/assets/images/tg/137_2.jpg)

Every week someone releases a new model, and every one of them "wins on the benchmarks." OpenAI publishes a table where they are ahead of the whole planet, Anthropic its own table where they lead, Google a third one where Gemini wins. Marketing wars in their purest form. But if you dig deeper, benchmarks are a genuinely useful thing, you just need to understand what they measure and what to trust.

## What a benchmark is

A benchmark is a standardized exam for AI models. A set of tasks with known correct answers that lets you compare different models against each other. The idea is simple: give it 1000 questions, count the percentage of correct answers, and there is your result.

The problem is that there are now dozens of benchmarks, each measures something of its own, and not all of them are equally reliable. Let's sort out what is what.

## The main categories

All benchmarks can be split into a few big groups:

- General knowledge: how "well-read" the model is across different fields
- Reasoning: the ability to reason logically and draw conclusions
- Code: the ability to write working code
- Math: solving problems from school level to olympiad level
- Multimodality: understanding images, diagrams, charts
- Human preferences: whether real users like the answers

## Benchmarks worth knowing

**MMLU-Pro (Massive Multitask Language Understanding)**

A test of general erudition: 57 subjects from elementary math to law, medicine, and philosophy. The format is multiple choice, but the Pro version has 10 answer options instead of 4, which makes guessing much harder. Top models currently score around 89-90% (Gemini 3 Pro leads with 90.1%). Useful as a baseline quality filter, but already close to saturation: all strong models show similar results in a narrow range.

**GPQA Diamond (Graduate-Level Google-Proof Q&A)**

Graduate-level questions in physics, chemistry, and biology. The name "Google-proof" means the answers can't simply be googled; you need to genuinely understand the material at a deep level. Important context: experts with a PhD in the relevant fields score around 65%, and ordinary well-educated people only 34%. When the benchmark first came out, GPT-4 scored 39%. Now top models have passed 78%. One of the best tests of depth of understanding rather than simple memorization of facts.

**SWE-bench Verified**

Probably the most practical benchmark for those who work with code. These are real GitHub issues from popular open-source projects: the model has to read the bug description, figure out the codebase, and generate a patch that fixes it. Not abstract algorithmic puzzles, but a programmer's real work with context, dependencies, and legacy code. The current leaders are Claude Opus 4.5 with 80.9% and GPT-5.2 with 80%. Interestingly, on the harder SWE-bench Pro version the same models score only ~23%, so there is room to grow.

**MATH**

Math problems from school level to olympiad level. Importantly, this isn't just "compute 2+2" but problems that require chains of reasoning: algebra, geometry, probability theory, combinatorics. A good indicator of a model's reasoning abilities.

**Chatbot Arena (LMSYS)**

A separate story and possibly the most honest benchmark of all. It works simply: real users ask a question to two anonymous models, see both answers, and pick the better one. From millions of such votes an ELO rating is built, like in chess. Right now Gemini 3 Pro with a rating of 1492 and Claude Opus 4.6 are at the top. The main advantage is that this benchmark can't be "gamed," because it is literally the preferences of live people on real tasks.

**ARC-AGI**

A benchmark that AI still can't properly solve. These are tests of abstract thinking: you are shown a few examples of a grid transformation (input → output), and you need to figure out the pattern and apply it to a new input. Sounds simple, but it requires a generalization ability that modern LLMs are still weak at. Important as an indicator of the fundamental limitations of current architectures.

**Humanity's Last Exam (HLE)**

The newest frontier benchmark for genuinely hard problems. The questions were collected from world-class experts in different fields, from quantum physics to the linguistics of ancient languages. The idea is that if a model can't answer these questions, it definitely can't be trusted with serious expert work without human oversight.

## Why you can't just trust the numbers

**Data contamination**

The industry's main headache. If test questions accidentally end up in the training data, the model simply "remembers" them rather than solving them. The older and more popular a benchmark is, the higher the chance it has leaked into the training data. That is why updated versions appear: MMLU → MMLU-Pro, and LiveBench, which is refreshed every month with new questions.

**Optimizing for the metrics**

Companies actively tune models for specific benchmarks; that is a fact of life. 95% on some test may mean the model was drilled on exactly that task format, and on your real cases it will perform worse.

**The gap between numbers and practice**

A model can brilliantly solve benchmark problems and at the same time be bad at following complex instructions, generate odd text, or hallucinate facts. Standard benchmarks don't measure the "vibe," the ease of working with it, or practical usefulness for specific tasks.

## What to do in practice

Don't fixate on a single number. Look at several benchmarks in the category that matters to you specifically. Need code? SWE-bench matters more than MMLU. Need general knowledge? Look at MMLU-Pro and GPQA together.

Chatbot Arena is a good reference point for overall quality. If a model ranks high there, it will most likely be good for the majority of ordinary tasks.

Fresh benchmarks are more reliable than old ones. GPQA, MMLU-Pro, LiveBench, HLE: there is less chance of contamination there than in classic tests from five years ago.

The best benchmark is your own tasks. Take 20-30 real examples from your work and run them through several models. That will tell you more than any public tables, because it measures exactly what you need.

## Useful resources

- [Chatbot Arena](https://lmarena.ai/): live rating based on human preferences
- [Artificial Analysis](https://artificialanalysis.ai/): model comparison by quality, speed, and price
- [LLM Stats](https://llm-stats.com/): aggregator of results across different benchmarks
- [SWE-bench](https://www.swebench.com/): coding leaderboard
