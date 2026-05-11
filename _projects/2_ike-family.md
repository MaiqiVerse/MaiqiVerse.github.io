---
layout: page
title: In-Context Knowledge Editing (DR-IKE / FWE-IKE / MO-IKE)
description: A research line on retrieval-based in-context knowledge editing for black-box LLMs — policy-optimized retrieval, confidence-aware ensemble fusion, and constrained multi-objective RL.
importance: 2
category: research
github: https://github.com/mwnafee/DR-IKE
---

In-context knowledge editing (IKE) updates the behavior of a *black-box* LLM purely through demonstrations at inference time. Our research line tackles three orthogonal aspects of the retrieval pipeline:

### DR-IKE — Dynamic Retriever via Policy Optimization

We train a BERT retriever with **REINFORCE** and a **learnable threshold** that decides, per query, *how many* demonstrations to retrieve. The threshold lets the model adapt the prompt length to query difficulty.

> Mahmud Wasif Nafee\*, **Maiqi Jiang**\*, Haipeng Chen, Yanfu Zhang. *EMNLP 2025*, pp. 16755–16768. (\*Co-first author.) — [[code]](https://github.com/mwnafee/DR-IKE)

### FWE-IKE — Confidence-Aware Ranker Ensembles

A **confidence-gated ensemble** of LLM/BERT/MLP rankers performs **logit-space fusion** of demonstrations. The fused ranker closes ~**53% of the gap to the oracle** on COUNTERFACT.

> Tejal Nair, Mahmud Wasif Nafee, **Maiqi Jiang**, Ashley Gao, Haipeng Chen, Yanfu Zhang. *Findings of ACL 2026*.

### MO-IKE — Constrained Multi-Objective RL

We formulate prompt construction as a **Constrained MDP**, using **Lagrangian relaxation** and **GRPO** to jointly optimize reliability, generality, and specificity — three objectives that previous IKE methods trade off implicitly.

> Xuzhong Wang, **Maiqi Jiang**, Tejal Nair, Girija Bhusal, Yanfu Zhang, Haipeng Chen. *Submitted to EMNLP 2026 (under review).*

Advisors: [Prof. Yanfu Zhang](https://yaz91.github.io/), [Prof. Haipeng Chen](https://haipeng-chen.github.io/).
