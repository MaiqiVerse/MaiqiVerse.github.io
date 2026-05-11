---
layout: page
title: DyV2X
description: Cooperative V2X trajectory prediction with per-timestep dynamic interaction graphs and a temporal graph attention encoder. 14.2% ADE / 12.1% FDE improvement over V2X-Graph, 37.2% FDE↓ on left turns.
importance: 4
category: research
---

V2X cooperative trajectory prediction must reason over inter-agent interactions that **change at every timestep** — especially during safety-critical maneuvers like turns and merges. DyV2X tackles this by building *per-timestep* dynamic interaction graphs and processing them with a **temporal graph attention encoder** that jointly captures evolving social context and per-agent kinematic history.

### Results on V2X-Seq-TFD (9,320 target agents)

Improvements over the V2X-Graph baseline on every metric:

| Metric | Baseline | DyV2X | Δ |
| --- | --- | --- | --- |
| ADE | 1.110 | **0.952** | **–14.2%** |
| FDE | 1.894 | **1.664** | **–12.1%** |
| MR@2m | 27.9% | **24.7%** | –3.2 pts |

The largest gains appear on safety-critical turning maneuvers — e.g., on **left turns**, FDE improves 4.216 → 2.646 (**–37.2%**) and MR@2m improves 64.2% → 47.5%, exactly where inter-agent interactions evolve most rapidly.

I mentored the two first-authors and led the design.

> Yiran Ding, Muhammed Muminul Hoque, **Maiqi Jiang**, Yongming Qin, Sidi Lu, Yanfu Zhang. *Submitted to IROS 2026 (under review).*

Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
