---
layout: page
title: Faithful Heterogeneous-GNN Attention
description: MetaXplain — when is meta-path attention actually a faithful explanation? A controlled empirical study plus a meta-path-aware post-hoc analysis protocol for HGNNs.
img: assets/img/projects/metaxplain.png
importance: 3
category: research
github: https://github.com/MaiqiVerse/ExplainerForHGNN
---

Heterogeneous GNNs (HAN, HGT, …) use attention over **meta-paths** and routinely treat that attention as an _explanation_ of the model's prediction. We ask: is it actually faithful?

### Findings

Across multiple datasets and HGNN backbones, we identify regimes where attention is **well aligned** with the model's decision — and regimes where attention and faithful explanation are **statistically significantly decoupled**.

### MetaXplain Protocol

- **View-factorized explanations** that respect meta-path structure.
- **Schema-valid perturbations** for faithfulness evaluation.
- **Fusion-aware attribution** that accounts for how meta-path views are combined.
- **MP-AEA**, a metric that quantifies attention–explanation alignment.

We release [**ExplainerForHGNN**](https://github.com/MaiqiVerse/ExplainerForHGNN), an explainability benchmark codebase for the heterogeneous-GNN community.

> **Maiqi Jiang**, Noman Ali, Yiran Ding, Yanfu Zhang. _arXiv:2602.08500; submitted to TMLR (under review)._ — [[OpenReview]](https://openreview.net/forum?id=g9cnIFAYB3) [[arXiv]](https://arxiv.org/abs/2602.08500)

Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
