---
layout: page
title: Biomedical Heterogeneous Information Networks
description: PAIRS / IM-HIN — predicting protein-phenotype associations as link prediction over a heterogeneous information network built from STRING, HumanNet XN, GeneMania, and HPO.
img: assets/img/projects/im-hin.png
importance: 4
category: research
---

**PAIRS** ("PAIRS, Not Labels") frames the protein-phenotype association problem as **link prediction over a biomedical heterogeneous information network (HIN)**, rather than as a per-label classification problem.

### IM-HIN: Integrated Multi-source HIN Construction

We construct a single HIN by integrating four complementary biomedical sources:

- **STRING**, **HumanNet XN**, and **GeneMania** → protein–protein interaction edges
- **HPO** (Human Phenotype Ontology) → protein–phenotype association edges

The resulting graph mixes two node types (proteins, phenotypes) and multiple edge types, on which we then learn jointly.

### HIN processing framework

Two type-specific encoders — a **protein encoder** and a **phenotype encoder** — share the HIN structure and feed a **relation prediction** head. By treating the supervision signal as edges rather than labels, the model can generalize to phenotypes (and proteins) with few or no labeled examples in the training graph.

> **Maiqi Jiang**, Yanshuo Chen, Guodong Liu, Avinash Sahu, Ye Gao, Yanfu Zhang. _IEEE International Conference on Acoustics, Speech and Signal Processing (**ICASSP 2026**)._

Advisor: [Prof. Yanfu Zhang](https://yaz91.github.io/).
