---
layout: page
title: Reading Out In-Context Task Learning
description: In-context task learning as a kernel classifier — mapping-sensitive heads identified via intact/randomized-label contrasts, read out directly from 8 heads, and reused through Selective TL Memory.
importance: 4
category: research
---

Does in-context _task learning_—the part of ICL that actually uses the demonstration label mapping—live in a small, identifiable set of attention heads? And if so, can those heads be read out directly and reused?

### Mapping-sensitive heads as a kernel classifier

We identify **mapping-sensitive attention heads** through paired **intact / randomized-label** contrasts, and characterize their outputs as a **kernel classifier** that combines **query-dependent retrieval** over demonstrations with **contextual class votes**.

On **TREC-fine** with Llama-3.1-8B and 180 demonstrations, a direct readout from just **8 selected heads** reaches **50.3% accuracy**, versus 51.6% for the full model.

### Selective TL Memory

Building on this, we propose **Selective TL Memory**: cached demonstration K/V is reused only through the selected heads, while query-dependent retrieval stays live. Selective access improves the same fixed readout across **all 18 natural-language settings** at both tested head budgets, and the **30-head readout** outperforms every compared adapted-vector baseline in **14/18 settings**.

> **Maiqi Jiang**, Xugui Zhou, Bin Ren, Guodong Liu, Yanfu Zhang. _Submitted to ICLR 2027 (under review)._

Project lead. Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
