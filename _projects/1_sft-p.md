---
layout: page
title: Federated LLM Pruning
description: SFT-P — FedAvg jointly learns client-specific structured pruning masks and adaptation for on-device LLM deployment under non-IID data and mixed client budgets.
importance: 1
category: research
---

**SFT-P** is a federated framework that _jointly_ learns client-specific **structured pruning masks** and adaptation parameters under non-IID private data, designed for on-device deployment with mixed client compute budgets.

### Design

- **Client-conditioned mask generator.** A shared hypernetwork plus a private per-client embedding produces _hard binary routing masks_ via Bernoulli gating, so each client can carry a different pruning ratio.
- **Residual-safe route/merge.** A dense-kernel-friendly route/merge interface keeps inference on the device fast even when the mask is highly sparse.
- **FedAvg-based training.** Mask hypernetwork and base weights are aggregated; client embeddings stay private.

### Results

On **LLaMA-7B at 50% pruning**, SFT-P achieves **+8.5 Avg over the best federated baseline** across the benchmark suite.

Manuscript submitted to **EMNLP 2026** (under review). Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/). Collaborators: Xugui Zhou, Bin Ren, Junyi Li, Shangqian Gao.
