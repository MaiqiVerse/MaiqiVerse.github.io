---
layout: page
title: "Mentored Projects: Pruning & Long-Context ICL"
description: Intern-led projects I mentor — domain-adaptive pruning (CDAM), ICL-preserving pruning (ICLPrune), the cross-lingual gap in long-context reasoning, and demonstration ordering for ICL.
importance: 7
category: research
---

Since Sep 2025 I have mentored several intern-led projects in Prof. [Yanfu Zhang](https://yaz91.github.io/)'s group, all circling the same question as my own work: _which interventions preserve the capabilities that matter?_

### Domain-Adaptive Pruning (CDAM)

With _Noman Ali_: a **training-free activation measure** that combines domain-specific and general-purpose statistics with feature-wise cross-domain interactions, integrated into Wanda and CFSP. On Llama-2-13B at **50% sparsity** with 1,024 calibration examples, CDAM raises CFSP's average biomedical accuracy from **34.45% to 38.70%** versus naive calibration mixing, while improving general-task accuracy from 58.73% to 61.32%. Targeting **ACL 2027**.

### ICL-Preserving Pruning (ICLPrune)

With _Chongyuan Sun_: improving pruned-LLM **in-context learning** under task-shifted prompts via demonstration-aware calibration (_ICLPrune: Improving In-Context Learning in Structured LLM Pruning via Demonstration-Aware Calibration_). Targeting **ACL 2027**.

### Long-Context & Cross-Lingual ICL

I proposed the research direction and co-supervised (with Prof. Zhang) _Yiran Ding_ on the **cross-lingual gap in long-context reasoning** under context-extension methods, leading to:

> Yiran Ding, **Maiqi Jiang**, Qun Li, Yanfu Zhang. _One Direction Away: The Cross-Lingual Gap in Long-Context Reasoning and a Shift That Closes It._ Submitted to **NAACL 2027**.

I also mentor _Muhammed Muminul Hoque_ on demonstration-ordering policies for ICL motivated by the **Lost-in-the-Middle** effect, given per-example rankings.

See also [DyV2X](/projects/4_dyv2x/), where I mentored the two first authors.
