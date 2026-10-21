---
layout: about
title: about
permalink: /
subtitle: PhD Student @ <a href='https://www.wm.edu/as/computerscience/'>William & Mary CS</a>. Understanding and building LLM interventions that preserve what matters.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

typing_tagline:
  - "What does an intervention actually change inside an LLM?"
  - "Pruning · knowledge editing · adapters · decoding"
  - "Building interventions that preserve what matters"
  - "Mechanistic analysis, RL-based methods, released tooling"

research_interests:
  - "LLM Interventions: Pruning / Editing / Adapters / Decoding"
  - "Structured Pruning & Federated / On-device LLMs"
  - "In-Context Knowledge Editing"
  - "Mechanistic Interpretability of ICL"
  - "RL for LLMs"
  - "Behavioral Diagnostics & Tooling"
  - "Graph Learning & Explainability"

stats:
  - count: 5
    label: "Accepted Papers"
  - count: 7
    label: "Under Review"
  - count: 8
    label: "Top Venues"
  - count: 5
    label: "Mentees"

timeline:
  - year: "2017"
    title: "BSc BME"
    active: false
  - year: "2021"
    title: "MSc IT"
    active: false
  - year: "2025"
    title: "PhD CS"
    active: true

selected_papers: true
social: true
news: true
visitor_map: true
latest_posts:
  enabled: false

experience:
  - title: "PhD Researcher"
    place: "William & Mary (Advisor: Prof. Yanfu Zhang)"
    period: "2025.8 – Present"
    icon: "fa-solid fa-flask"
  - title: "Research Assistant"
    place: "City University of Hong Kong (Prof. Junming Liu)"
    period: "2023.2 – 2023.12"
    icon: "fa-solid fa-flask"
  - title: "Researcher"
    place: "The Hong Kong Polytechnic University (Prof. Xiao Huang)"
    period: "2021.11 – 2023.2"
    icon: "fa-solid fa-microscope"
  - title: "Software Developer Intern"
    place: "Neusoft Inc., China"
    period: "2020.9"
    icon: "fa-solid fa-building"

service:
  - text: "PC member / Reviewer: <strong>ICASSP 2026</strong>, <strong>NeurIPS 2026</strong>, <strong>CIKM 2026</strong> Workshop, <strong>ICLR 2027</strong>, <strong>ACM Trans. on Computing for Healthcare</strong>"
    icon: "fa-solid fa-pen-fancy"
  - text: "Author & maintainer of <a href='https://pypi.org/project/lmdiff-kit/'><strong>lmdiff-kit</strong></a> (PyPI)"
    icon: "fa-solid fa-cube"
  - text: "Maintainer of <a href='https://github.com/MaiqiVerse/ExplainerForHGNN'>ExplainerForHGNN</a> benchmark (2025–2026)"
    icon: "fa-solid fa-code-branch"
  - text: "Open Source Contributor, The Unified AI Framework (2023)"
    icon: "fa-solid fa-code-branch"
---

I am a PhD student in Computer Science at the [College of William & Mary](https://www.wm.edu/), advised by Prof. [Yanfu Zhang](https://yaz91.github.io/). I study **what interventions actually change inside an LLM**—structured pruning, knowledge editing, adapters, decoding—and **how to build interventions that preserve the capabilities that matter**, through mechanistic analysis, RL-based methods, and released tooling.

My current work spans four threads: (1) **efficient adaptation under deployment constraints**—federated tuning that jointly learns client-specific structured pruning masks for on-device LLMs (SFT-P); (2) **in-context knowledge editing** of black-box LLMs via policy-optimized retrieval, confidence-aware fusion, and constrained multi-objective RL (DR-IKE / FWE-IKE / MO-IKE); (3) **mechanistic analysis** of in-context learning—reading task learning out of a few selected attention heads as a kernel classifier (Selective TL Memory)—and of attention-based explanations in heterogeneous GNNs (MetaXplain); and (4) **behavioral diagnostics** of LLM configurations with [**lmdiff-kit**](https://pypi.org/project/lmdiff-kit/).

I also mentor several intern-led projects on LLM efficiency (domain-adaptive and ICL-preserving pruning), long-context and cross-lingual ICL, and cooperative V2X forecasting.

Previously, I received my M.Sc. (with Distinction) from [The Hong Kong Polytechnic University](https://www.polyu.edu.hk/) and my B.S. from [Northeastern University, China](http://www.neu.edu.cn/).
