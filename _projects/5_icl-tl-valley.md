---
layout: page
title: Mechanistic Long-Context ICL
description: A kernel–vote decomposition of task-learning attention heads (Nadaraya–Watson kernel × per-demo class votes), motivated by a non-monotone "TL valley" under context extension.
importance: 5
category: research
---

### The TL valley

Under **Self-Extend** context extension for long-context in-context classification, we observe a **non-monotone "TL valley"**: as the number of demonstrations _k_ grows, task-learning accuracy first _drops_ and then _recovers_. This contradicts the intuitive view of monotone improvement with more demonstrations and suggests context-extension mechanisms perturb in-context learning in a structured way.

### Kernel–vote decomposition

We are developing a **kernel-retrieval identification** framework that decomposes the contribution of task-learning (TL) heads at the answer position into:

1. an **attention kernel** κ(x_q, x_i) over demonstrations (Nadaraya–Watson-style), and
2. a **per-demonstration class vote** φᶜᵢ.

We derive a structural identity tying TL logits _exactly_ to this kernel–vote form, and use a **UUID-label protocol** that isolates task learning from task recognition (label priors) for clean empirical verification.

Targeting **ICLR 2027**. Project lead. Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
