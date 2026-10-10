---
layout: post
title: "Agent Teams in Claude Code: what has actually changed"
date: 2026-02-06 16:27:04 +0000
telegram: 126
ru: /ru/2026/02/06/agent-teams-in-claude-code.html
---
Claude Code has long been able to run subagents: separate agents for specific tasks. It worked simply: the main agent hands out a task, the subagent does it and returns the result. Like a boss and a worker.

Agent Teams is a different model. Now agents can talk to each other directly, argue, and coordinate on their own without constant supervision from above. In effect it's a shift from "I hand out tasks" to "the team figures it out itself".

## What exactly is the difference

Subagents work in isolation: do the task, return the result, done. They don't talk to each other. If one finds something important for another, there's no way to pass it on directly.

In Agent Teams each teammate has its own context, but they see a shared task list and can message each other. If the security agent finds a problem that affects the performance agent's work, it will message it itself, without the lead getting involved.

## Where this is actually useful

Debugging with an unclear cause. You launch 5 agents, each investigating its own hypothesis. They don't just work in parallel: they argue with each other and try to disprove each other's theories. This matters, because a single agent tends to latch onto the first plausible version and stop looking.

Code review from different angles. Three agents look at one PR: security, performance, test coverage. Each focuses on its own area, but if the security agent sees that some code affects performance, it pings its colleague right away.

## How to use it

First enable it in settings.json:

```
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

Then describe the task and the team:

```
Users are complaining that the app crashes after the first message.
Create a team of 5 agents and have each one investigate its own hypothesis.
They should argue with each other and try to disprove each other's theories.
```

Or for review:

```
Create a team to review PR #142.
One agent for security, one for performance, one for tests.
Have each one do a review and share its findings with the others.
```

You can require a plan before any work:

```
Create an architect teammate to refactor the auth module.
Require approval of the plan before any changes.
```

## What to keep in mind

The feature is experimental and burns tokens: each teammate is a separate session. For simple sequential tasks the regular mode is more efficient. Agent Teams make sense when parallel work and communication between agents genuinely add value.
