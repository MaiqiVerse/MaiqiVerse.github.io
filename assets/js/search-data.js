// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. &quot;*&quot; means the equal comtribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of my research projects and open-source tools, spanning efficient &amp; reliable foundation models, in-context knowledge editing, graph learning, and V2X cooperative perception.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-started-my-b-sc-in-biomedical-engineering-at-northeastern-university-china",
          title: 'Started my B.Sc. in Biomedical Engineering at Northeastern University, China.',
          description: "",
          section: "News",},{id: "news-graduated-with-a-b-sc-in-biomedical-engineering-from-northeastern-university-china",
          title: 'Graduated with a B.Sc. in Biomedical Engineering from Northeastern University, China. 🎓',
          description: "",
          section: "News",},{id: "news-started-my-m-sc-in-information-technology-at-the-hong-kong-polytechnic-university",
          title: 'Started my M.Sc. in Information Technology at The Hong Kong Polytechnic University.',
          description: "",
          section: "News",},{id: "news-started-research-collaboration-with-prof-xiao-huang-on-graph-neural-networks",
          title: 'Started research collaboration with Prof. Xiao Huang on graph neural networks.',
          description: "",
          section: "News",},{id: "news-graduated-with-an-m-sc-in-information-technology-from-the-hong-kong-polytechnic-university",
          title: 'Graduated with an M.Sc. in Information Technology from The Hong Kong Polytechnic University....',
          description: "",
          section: "News",},{id: "news-joined-prof-junming-liu-s-team-at-city-university-of-hong-kong-as-a-research-assistant",
          title: 'Joined Prof. Junming Liu’s team at City University of Hong Kong as a...',
          description: "",
          section: "News",},{id: "news-our-paper-dynamic-retriever-for-in-context-knowledge-editing-via-policy-optimization-has-been-accepted-at-emnlp-2025",
          title: 'Our paper “Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization” has been...',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-in-computer-science-at-william-amp-amp-mary",
          title: 'Started my Ph.D. in Computer Science at William &amp;amp;amp; Mary! 🎓',
          description: "",
          section: "News",},{id: "news-our-paper-hierarchical-convolution-multibranch-transformer-for-eeg-signals-has-been-accepted-at-icassp-2026",
          title: 'Our paper “Hierarchical Convolution Multibranch Transformer for EEG Signals” has been accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-pairs-not-labels-predicting-protein-phenotype-associations-via-link-prediction-has-been-accepted-at-icassp-2026",
          title: 'Our paper “PAIRS, Not Labels: Predicting Protein-Phenotype Associations via Link Prediction” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-confidence-aware-ranker-ensembles-for-robust-in-context-knowledge-editing-fwe-ike-has-been-accepted-to-acl-2026-findings",
          title: 'Our paper “Confidence-Aware Ranker Ensembles for Robust In-Context Knowledge Editing” (FWE-IKE) has been...',
          description: "",
          section: "News",},{id: "projects-semi-supervised-learning-for-whole-slide-pathology-images",
          title: 'Semi-supervised Learning for Whole-Slide Pathology Images',
          description: "Weakly- and semi-supervised pipelines for gigapixel whole-slide pathology images that use eye-tracking signals to guide efficient patch sampling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_wsi-gaze/";
            },},{id: "projects-temporal-user-engagement-modeling-in-polarized-social-platforms",
          title: 'Temporal User Engagement Modeling in Polarized Social Platforms',
          description: "Multimodal temporal GNN for forecasting user engagement across polarized online communities, fusing image/video content with text and interaction context.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_reddit-engagement/";
            },},{id: "projects-sft-p-federated-tuning-amp-structural-pruning-for-llms",
          title: 'SFT-P — Federated Tuning &amp;amp; Structural Pruning for LLMs',
          description: "FedAvg-based training that jointly learns client-specific structured pruning masks and adaptation for on-device LLM deployment under non-IID data and mixed client budgets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_sft-p/";
            },},{id: "projects-in-context-knowledge-editing-dr-ike-fwe-ike-mo-ike",
          title: 'In-Context Knowledge Editing (DR-IKE / FWE-IKE / MO-IKE)',
          description: "A research line on retrieval-based in-context knowledge editing for black-box LLMs — policy-optimized retrieval, confidence-aware ensemble fusion, and constrained multi-objective RL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_ike-family/";
            },},{id: "projects-metaxplain-is-meta-path-attention-an-explanation",
          title: 'MetaXplain — Is Meta-Path Attention an Explanation?',
          description: "A controlled empirical study and a meta-path-aware post-hoc analysis protocol for understanding when (and when not) attention in heterogeneous GNNs is a faithful explanation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_metaxplain/";
            },},{id: "projects-dyv2x-dynamic-interaction-graphs-for-v2x-trajectory-prediction",
          title: 'DyV2X — Dynamic Interaction Graphs for V2X Trajectory Prediction',
          description: "A cooperative trajectory prediction framework that constructs per-timestep dynamic interaction graphs and uses a temporal graph attention encoder to jointly model evolving interactions and individual kinematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_dyv2x/";
            },},{id: "projects-mechanistic-identification-of-task-learning-in-long-context-icl",
          title: 'Mechanistic Identification of Task Learning in Long-Context ICL',
          description: "A kernel-retrieval identification framework that decomposes task-learning attention heads into a Nadaraya–Watson kernel over demonstrations and a per-demo class vote, motivated by a non-monotone &quot;TL valley&quot; we observe under context extension.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_icl-tl-valley/";
            },},{id: "projects-explain-and-share-v2x-forecasting-under-bandwidth-budgets",
          title: 'Explain-and-Share V2X Forecasting under Bandwidth Budgets',
          description: "An explain-and-share framework that learns training-time rationales over agents/interactions and converts them into a bandwidth-aware communication policy for cooperative V2X forecasting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_explain-and-share/";
            },},{id: "projects-lmdiff-behavioral-diagnostics-for-llm-configurations",
          title: 'lmdiff — Behavioral Diagnostics for LLM Configurations',
          description: "A Python library for comparing LLM configurations (weights + system prompt + decoding + adapter) via behavioral distance and multi-level diagnostics, rather than aggregate benchmark scalars.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_lmdiff/";
            },},{id: "projects-explainerforhgnn-explainability-benchmark-for-heterogeneous-gnns",
          title: 'ExplainerForHGNN — Explainability Benchmark for Heterogeneous GNNs',
          description: "An open benchmark codebase for evaluating explainers on heterogeneous graph neural networks, released alongside the MetaXplain study.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_explainer-for-hgnn/";
            },},{id: "projects-autognr-automated-heterogeneous-network-learning",
          title: 'AutoGNR — Automated Heterogeneous Network Learning',
          description: "Differentiable NAS over heterogeneous aggregation paths and node-type combinations, with a non-recursive message-passing scheme that decouples path search from depth.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_autognr/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Maiqi_Jiang_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6A%69%61%6E%67%30%34@%77%6D.%65%64%75", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ozEndNQAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maiqi-jiang-103346273", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
