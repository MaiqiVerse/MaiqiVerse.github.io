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
          description: "Under Construction.",
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
          section: "News",},{
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
