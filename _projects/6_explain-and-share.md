---
layout: page
title: Explain-and-Share V2X Forecasting under Bandwidth Budgets
description: An explain-and-share framework that learns training-time rationales over agents/interactions and converts them into a bandwidth-aware communication policy for cooperative V2X forecasting.
importance: 6
category: research
---

In cooperative V2X forecasting, the **bandwidth budget** between roadside units (RSUs) and vehicles is finite — yet most cooperative methods assume full feature exchange. We instead learn *what to share* and *why*.

### Approach

- **Training-time rationales.** We learn agent- and interaction-level rationales as part of the forecasting model, so the rationale is *intrinsic*, not a post-hoc surrogate.
- **Bandwidth-aware policy.** At inference, the RSU selects the top-M motion-critical agents under a **byte budget** and transmits compact summaries downstream.
- **Faithfulness without surrogates.** Evaluation reports accuracy–bandwidth trade-offs *and* explanation faithfulness (sufficiency / necessity), avoiding the usual surrogate-model evaluations.

Currently in prototype. Targeting **AAAI 2027**. Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
