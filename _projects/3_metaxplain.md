---
layout: page
title: MetaXplain — Is Meta-Path Attention an Explanation?
description: A controlled empirical study and a meta-path-aware post-hoc analysis protocol for understanding when (and when not) attention in heterogeneous GNNs is a faithful explanation.
importance: 3
category: research
github: https://github.com/MaiqiVerse/ExplainerForHGNN
---

Heterogeneous GNNs (HAN, HGT, …) use attention over **meta-paths** and routinely treat that attention as an *explanation* of the model's prediction. We ask: is it actually faithful?

### Findings

Across multiple datasets and HGNN backbones, we identify regimes where attention is **well aligned** with the model's decision — and regimes where attention and faithful explanation are **statistically significantly decoupled**.

### MetaXplain Protocol

- **View-factorized explanations** that respect meta-path structure.
- **Schema-valid perturbations** for faithfulness evaluation.
- **Fusion-aware attribution** that accounts for how meta-path views are combined.
- **MP-AEA**, a metric that quantifies attention–explanation alignment.

We release [**ExplainerForHGNN**](https://github.com/MaiqiVerse/ExplainerForHGNN), an explainability benchmark codebase for the heterogeneous-GNN community.

> **Maiqi Jiang**, Noman Ali, Yiran Ding, Yanfu Zhang. *Submitted to KDD 2026 (under review).*

Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
