---
layout: post
title: "Reinforcement learning in humans"
date: 2026-02-08 16:04:32 +0000
telegram: 128
ru: /ru/2026/02/08/reinforcement-learning-in-humans.html
---
Can you learn something just by imagining it in your head?

In 1983 the psychologists Feltz and Landers gathered data from 60 studies on the subject. The answer: yes. Mental practice genuinely improves skills, from free throws to playing the piano.

And it is not magic. When you imagine a movement, the brain activates the same areas as during the real action. The signal just does not reach the muscles. But the neural connections get stronger.

Essentially the brain is a simulator with built-in reinforcement learning:

- It builds a model of the world
- It runs scenarios
- It gets virtual feedback
- It adjusts behavior

I used this myself when I was doing wrestling. You lie there in the evening, eyes closed, and replay throws in your head and how they would play out under different conditions. I did not know back then that this is called motor imagery, I just felt that it helped. My classmate Borya did the same thing with kicking a ball: he would run through the kicking technique before going to sleep.

Chess players analyze games in their heads, without a board. Pianists "rehearse" pieces without touching the keys.

And lucid dreaming is a whole other level. It is essentially a world model you can interact with: a full-blown simulator of reality where you can train anything without consequences.

Why does this matter now? Because AI is going down the same path.

In robotics they figured out long ago that training a robot in the real world is expensive, slow and dangerous. So first they run thousands of simulations in Isaac Sim or MuJoCo, then transfer to hardware. It is called sim-to-real.

World models are one of the main directions in AI: teaching a model to predict "what happens if" without real interaction with the environment. Essentially, building an internal simulator of the world.

For many years we thought neural networks needed terabytes of real experience. It turns out a good model of the world and imagination are enough.

The first simulator of reality did not appear at Nvidia. It appeared inside the skull about 300,000 years ago.
