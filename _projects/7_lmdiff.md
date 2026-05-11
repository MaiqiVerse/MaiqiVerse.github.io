---
layout: page
title: lmdiff
description: Python library (PyPI lmdiff-kit) for comparing LLM configurations — weights + system prompt + decoding + adapter — via behavioral distance and multi-level diagnostics, rather than aggregate benchmark scalars.
importance: 1
category: open-source
github: https://github.com/MaiqiVerse/lmdiff
redirect: https://pypi.org/project/lmdiff-kit/
---

[**lmdiff**](https://pypi.org/project/lmdiff-kit/) (PyPI: `lmdiff-kit`, [GitHub](https://github.com/MaiqiVerse/lmdiff)) is a Python library for comparing **LLM configurations**—weights + system prompt + decoding + adapter—through behavioral distance and multi-level diagnostics, rather than a single benchmark scalar.

### Design

The API centers on a `family()` abstraction that compares one base configuration against *N* variants on a shared set of probe-domain axes. It treats:

- weight modifications (fine-tuning, RLHF, adapters),
- runtime modifications (system prompt, decoding, ICL context), and
- quantization / pruning

as **first-class variants** of the same configuration object.

### Geometry-level metrics

Per-domain drift, share, raw + selective cross-variant cosine — these quantify *where* each variant moves in behavior space and whether different modifications push in the **same direction**. A pairwise scalar (or a single-model benchmark) cannot produce this view.

### A showcase

A 7-variant Llama-2-7B family reveals that **a system prompt can reshape next-token distributions more than 7B → 13B scaling**.

### Engineering

- **Engine layer** with HF Transformers + mock backends.
- **Engine reuse** that keeps peak VRAM at base + 1 active variant in 7-variant families.
- **lm-eval-harness** multi-task probe loader with a task → domain mapping.
- JSON schema versioning with auto-recompute on load.
- 5-channel reporting (ANSI / PNG / HTML / Markdown / JSON).
- ~860 tests.

Active development; representation, trajectory, and causal metrics planned for v0.4+. Sole author.
