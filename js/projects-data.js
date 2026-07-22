/* =========================================================
   Sereen Alhmoud — Projects Data
   -----------------------------------------------------------
   Add a new project by pushing a new object into PROJECTS.
   Image slots are left empty on purpose — drop screenshots into
   assets/projects/<id>/ and reference them in the "cover" field
   (single image) or "coverImages" field (array of 2+ images shown
   as a side-by-side collage). All images are treated as LANDSCAPE
   / wide, not portrait.

   IMPORTANT — site-wide image policy: real screenshots are shown
   ONLY on the outer project card cover. The detail modal never
   renders real screenshots (no "gallery" field is used anymore) —
   it only shows generated visuals (e.g. the dataset pipeline visual
   for "dataset"-type projects) or no image at all.
   ========================================================= */

const PROJECTS = [
  {
    id: "mubeen",
    title: "Mubeen",
    titleArabic: "مُبين",
    tagline: "A gamified AR & speech-recognition app that helps children master hard Arabic letters.",
    year: "2025",
    status: "Graduation Project - IT 496",
    role: "Team Project",
    duration: "First Semester 1447H · Fall 2025",

    // Cover shown on the grid card (landscape, e.g. 16:9 or wider) — leave empty until provided
    cover: "",
    coverImages:[
    "assets/projects/mubeen/mubeen2.png",
    "assets/projects/mubeen/mubeen1.png",
    "assets/projects/mubeen/mubeen3.png"
],

    // Category chips shown on the card
    tags: ["AI / Computer Vision", "Speech Recognition", "Augmented Reality", "Mobile Game", "Unity / C#"],

    // Short description for the card face
    cardSummary: "An interactive, game-based educational app that helps children aged 4–7 learn to pronounce, recognize, and write challenging Arabic letters (ض, ظ, غ...) through AR, speech recognition, and letter tracing.",

    // ===== Full detail-view content =====
    overview: "Mubeen (مُبين) is an interactive, game-based educational system designed to support children aged 4 to 7 in learning some of the most challenging Arabic letters. Young learners often struggle with correct pronunciation, visual discrimination, and writing accuracy — particularly for letters such as ض, ظ, and غ. Mubeen integrates letter tracing, speech recognition, augmented reality (AR), and card-based activities into one cohesive, child-friendly platform.",

    problem: "Despite the importance and widespread use of the Arabic language, learning it presents unique challenges — especially for children aged 4 to 7. Some Arabic letters are characterized by complex articulation or visual similarity, making it difficult for children to differentiate between phonetically similar letters (such as ض and ط) or pronounce letters requiring complex articulation (such as غ and ع). These challenges are amplified for children in multilingual environments or those learning Arabic as a second language.",

    solution: "Mubeen proposes an interactive, game-based educational platform that addresses the challenge of teaching difficult Arabic letters through modern technologies: augmented reality (AR) object hunts, speech recognition for pronunciation feedback, guided letter tracing, and card-based matching activities. The platform is structured into progressive game levels with a reward system (coins, stars, and a virtual store) to keep children motivated, while parents get a dashboard to track their child's progress over time.",

    vision: "For parents who struggle with maintaining children's interest and overcoming difficulties in teaching challenging Arabic letters, Mubeen is an educational game mobile application that helps children pronounce and write difficult Arabic letters in an enjoyable and interactive manner. Unlike traditional teaching methods or static learning tools, Mubeen combines modern technologies with a dynamic, engaging learning experience.",

    features: [
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "AR Object Hunt",
        desc: "Uses YOLOv8 object detection to let children search for real-world objects starting with the target letter, reinforcing letter–word association through the camera."
      },
      {
        icon: "fa-solid fa-microphone",
        title: "Speech Recognition",
        desc: "An offline speech-recognition model (Whisper — ggml-tiny) evaluates the child's pronunciation of each letter and gives instant feedback."
      },
      {
        icon: "fa-solid fa-pen-nib",
        title: "Guided Letter Tracing",
        desc: "An interactive tracing module detects whether the child follows the correct stroke points and provides real-time feedback to improve writing accuracy."
      },
      {
        icon: "fa-solid fa-clone",
        title: "Card Choice Activity",
        desc: "Children pick the correct picture card matching the target letter's sound, with the system pronouncing the object's name to reinforce vocabulary."
      },
      {
        icon: "fa-solid fa-coins",
        title: "Rewards & Progression",
        desc: "A coin & star system unlocks characters, badges, and new islands/levels — motivating children to keep practicing without feeling pressured."
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Parent Dashboard",
        desc: "Parents receive detailed reports on their child's reading, writing, and recognition progress across all the letters covered so far."
      }
    ],

    objectives: [
      "Support learning of difficult Arabic letters (ض, ظ, غ, س...) using interactive educational methods.",
      "Improve pronunciation accuracy through speech-recognition technology.",
      "Strengthen letter–word association using AR object hunts and card-choice activities.",
      "Improve writing skills through interactive letter-tracing.",
      "Facilitate learning through progressive, game-based levels.",
      "Increase motivation through a coin & star reward system.",
      "Give parents visibility into their child's proficiency and learning journey."
    ],

    // Tech stack grouped by layer
    techStack: {
      "Game Engine & Client": ["Unity 2D", "C#"],
      "Backend & Data": ["Firebase (Realtime Database)"],
      "Speech Recognition": ["Whisper (ggml-tiny model)"],
      "Computer Vision / AR": ["YOLOv8 Object Detection"],
      "Project Management": ["Agile / Scrum", "Jira"]
    },

    // High-level architecture explanation (Client-Server model)
    architecture: {
      summary: "Mubeen follows a Client-Server architecture. The Unity-based client handles game rendering and real-time interaction (tracing, AR camera feed, card selection, voice capture), while the server side manages data persistence and the heavier processing pipelines: Firebase for storing progress, Whisper for offline speech evaluation, a custom letter-tracing evaluator, and YOLOv8 for AR object recognition.",
      client: [
        "Interactive learning environment — tracing, AR, cards, pronunciation practice",
        "Parent dashboard with progress reports",
        "Seamless, child-friendly UI/UX"
      ],
      server: [
        "Firebase Database — stores progress, completed levels, and earned rewards",
        "Whisper speech recognition — analyzes spoken letters vs. target pronunciation",
        "Letter Tracing module — validates stroke accuracy and gives feedback",
        "YOLOv8 object detection — powers the AR real-world object hunt",
        "Card matching logic — validates card selection and gives instant feedback"
      ]
    },

    results: [
      "Improved letter recognition, clearer pronunciation, and more accurate tracing performance observed during user acceptance testing.",
      "Positive engagement and motivation indicators from children during testing sessions.",
      "Parents reported increased willingness from their children to practice Arabic at home.",
      "Parents valued the progress-tracking / reporting features highly.",
      "User Acceptance Testing (UAT) included questionnaires, interviews, and direct observation with children and parents."
    ],

    methodology: "Developed using an iterative Agile methodology: requirements gathering, UX/UI design, Unity-based implementation, and multiple stages of testing — including a full round of User Acceptance Testing (questionnaires, interviews, and observation) with real children and their parents.",

    links: [
      // { label: "GitHub", url: "#", icon: "fa-brands fa-github" },
      // { label: "Live Demo", url: "#", icon: "fa-solid fa-play" }
    ]

  },

  {
    id: "arabic-piqa",
    type: "dataset", 
    title: "Arabic PIQA",
    titleArabic: "",
    tagline: "Building and benchmarking an Arabic adaptation of the PIQA physical-commonsense-reasoning dataset.",
    year: "2025",
    status: "Course Project — IT 469 Human Language Technologies",
    role: "Team Project",
    duration: "2025",

    cover: "assets/projects/arabic-piqa/piqa1.png",

    coverImages: [
      "assets/projects/arabic-piqa/piqa1.png",
      "assets/projects/arabic-piqa/piqa2.png"
    ],

    tags: ["NLP", "Arabic NLP", "Dataset Curation", "Transformers", "LLM Evaluation"],

    cardSummary: "An Arabic Modern-Standard-Arabic adaptation of the PIQA benchmark for physical commonsense reasoning — built through a culturally-aware translation pipeline and benchmarked across lexical, linear, transformer, and LLM models.",

    overview: "This project develops an Arabic version of the PIQA (Physical Interaction Question Answering) dataset to evaluate physical commonsense reasoning — understanding everyday physical interactions, tool use, and cause-and-effect — in Modern Standard Arabic. The original English PIQA items were translated, culturally adapted, filtered, and rigorously analyzed, then used to benchmark a range of models from simple heuristics to GPT-4o.",

    motivation: [
      "Most commonsense-reasoning benchmarks are English-centric.",
      "No existing Arabic datasets test understanding of physical interactions, tool use, or cause-and-effect."
    ],
    relevance: [
      "A carefully curated and culturally appropriate Arabic adaptation of PIQA.",
      "Useful for evaluating Arabic ML models, Transformers, and LLMs.",
      "Supports research on transferring physical commonsense reasoning across languages."
    ],

    // ---- Methodology: dataset construction pipeline ----
    pipeline: [
      {
        step: "1",
        title: "Source & Structure",
        points: [
          "Based on the original English PIQA dataset (3,098 items).",
          "Each item contains: a Goal, two candidate Solutions, a binary label (correct choice), and Notes."
        ]
      },
      {
        step: "2",
        title: "Translation & Adaptation",
        points: [
          "Translated to Modern Standard Arabic using a multi-step workflow with three stages of quality control.",
          "Stage 1 — Data splitting & initial translation (GPT-4o + manual edits).",
          "Stage 2 — Cultural adaptation to ensure Islamic and Saudi appropriateness.",
          "Stage 3 — Double-review cross-checking within the team."
        ]
      },
      {
        step: "3",
        title: "Filtering & Final Count",
        points: [
          "Culturally adapted items whenever possible; removed only items that couldn't be adapted (e.g., alcohol, drugs) to preserve Islamic and Saudi value alignment.",
          "Final dataset size: 3,076 items, with the original balanced label distribution preserved (1,536 / 1,540)."
        ]
      }
    ],

    corpusAnalysisMethods: [
      "Stratified sampling for train/val/test split (80% / 10% / 10%)",
      "Stanza-based tokenization (Arabic & English)",
      "Arabic text normalization",
      "Descriptive statistics for length",
      "Vocabulary frequency analysis",
      "Vocabulary overlap analysis",
      "Part-of-speech (POS) tagging with Stanza",
      "Levenshtein edit distance (token-level)",
      "Lexicon-based search for brands and measurement units",
      "Named entity recognition (NER) with Stanza (English)"
    ],

    // ---- Dataset stats ----
    datasetStats: {
      full: { label: "Full Dataset", items: "3,076", note: "Label distribution: 49% / 51%" },
      train: { label: "Training Set", items: "2,460", note: "80% · ~50/50 label balance" },
      val: { label: "Validation Set", items: "308", note: "10% · 50% / 50%" },
      test: { label: "Test Set", items: "308", note: "10% · 50% / 50%" }
    },

    linguisticStats: [
      { label: "Total Unique Words", value: "10,515" },
      { label: "Vocabulary Overlap (Correct vs. Incorrect Solutions)", value: "76.10%" },
      { label: "Vocabulary Overlap (Goals vs. Solutions)", value: "31.67%" },
      { label: "Mean Token-level Edit Distance", value: "4.11" },
      { label: "Arabic Goals — Mean Length", value: "6.07 words" },
      { label: "Arabic Solutions — Mean Length", value: "18.14 words" }
    ],

    adaptations: [
      { icon: "fa-solid fa-tag", value: "339", label: "Brand Names Localized", desc: "Translated or adapted to generic terms." },
      { icon: "fa-solid fa-earth-africa", value: "159", label: "Cultural Contexts Adapted", desc: "Via substitution (pork → beef/lamb), generalization (Christmas ornament → ornament), or careful deletion of sensitive content." },
      { icon: "fa-solid fa-ruler", value: "3,920", label: "Measurement Units Converted", desc: "Converted to appropriate Arabic equivalents for clarity and consistency." }
    ],

    // ---- Results & Evaluation ----
    modelsComparison: [
      { model: "Lexical Heuristic Baseline", accuracy: 52.70, improvement: "N/A", sequential: "N/A" },
      { model: "Linear Classifier (Arabic FastText + Linear SVM)", accuracy: 56.80, improvement: "+4.1%", sequential: "+4.10% vs. Lexical Baseline" },
      { model: "Transformer (mDeBERTa v3 Base)", accuracy: 74.35, improvement: "+21.65%", sequential: "+17.55% vs. Linear Classifier" },
      { model: "LLM — GPT-4o (Zero-Shot)", accuracy: 91.88, improvement: "+39.18%", sequential: "+17.53% vs. Transformer" },
      { model: "LLM — GPT-4o (3-Shot)", accuracy: 93.50, improvement: "+40.80%", sequential: "+1.62% vs. LLM Zero-Shot" }
    ],

    transformerComparison: [
      { model: "mDeBERTa v3 Base", accuracy: 74.35 },
      { model: "AraELECTRA Base", accuracy: 73.70 },
      { model: "XLM-RoBERTa Large", accuracy: 70.78 },
      { model: "AraBERT v2", accuracy: 69.81 },
      { model: "XLM-RoBERTa Base", accuracy: 68.51 }
    ],

    trainingConfig: [
      { label: "Epochs", value: "5" },
      { label: "Batch Size", value: "16" },
      { label: "Learning Rate", value: "2e-5 (AdamW)" },
      { label: "Max Sequence Length", value: "128" }
    ],

    errorAnalysis: {
      summary: "Selected 11 representative misclassified test examples and categorized recurring error types, then tested three fix strategies against the GPT-4o 3-shot baseline.",
      categories: [
        "Lexical ambiguity", "Surface/frequency bias", "Safety/harm-avoidance bias",
        "Functional reasoning errors", "Causal reasoning errors",
        "Misinterpretation of practical feasibility/suitability", "Incorrect context inference"
      ],
      fixes: [
        { type: "Fix 1 — Prompt Engineering (refined prompt, anti-bias guidance, 3-prompt ensemble)", before: 93.51, after: 93.83, change: "+0.32%" },
        { type: "Fix 2 — Model-Level Adjustments (temperature = 0, top_p = 1)", before: 93.51, after: 92.53, change: "−0.98%" },
        { type: "Fix 3 — Post-Processing Enforcement (retry logic for malformed outputs)", before: 93.51, after: 93.51, change: "0%" }
      ]
    },

    generativeAI: [
      "GPT-4o (via the OpenAI API) was used as a translation aid during the initial Arabic translation stage, followed by manual human edits and double-review for quality control.",
      "GPT-4o was also evaluated as a benchmark model itself: tested in a Zero-Shot setting (Goal + two candidate solutions) and a Few-Shot setting (3 labeled examples from the training set) to measure raw LLM performance on Arabic physical commonsense reasoning.",
      "Prompt-engineering techniques (refined Arabic prompts, anti-bias guidance, prompt ensembling) were explored as part of the error-analysis phase to reduce specific bias patterns identified in misclassified examples."
    ],

    // Framed as data-driven takeaways derived from the project's own results/methodology
    lessonsLearned: [
      "Cultural adaptation of a benchmark dataset is a balancing act: preserving the original semantic contrast between correct/incorrect solutions while adjusting content for cultural appropriateness (only ~45% of low-contrast items retained a clearly distinguishable correct answer after strict adaptation).",
      "Model scale and pretraining matter far more than fine-tuning tricks for this task — GPT-4o's zero-shot performance (91.88%) alone outperformed every fine-tuned transformer by double digits.",
      "Few-shot prompting gave diminishing but still measurable returns (+1.62%) over zero-shot, showing GPT-4o already had strong prior physical-commonsense reasoning in Arabic.",
      "Prompt engineering can shift accuracy only marginally once an LLM is already near-ceiling — model-level randomness controls (temperature/top_p) even slightly hurt results in this case, showing fix strategies must be validated empirically rather than assumed.",
      "Combining an LLM-assisted translation pass with mandatory human review and cross-checking was essential to maintain both linguistic quality and Islamic/Saudi cultural alignment at scale."
    ],

    links: [
      // { label: "GitHub", url: "#", icon: "fa-brands fa-github" },
      // { label: "Dataset (Hugging Face)", url: "#", icon: "fa-solid fa-database" }
    ]
  },

  {
    id: "travelly",
    title: "Travelly",
    titleArabic: "",
    tagline: "A full-stack social platform for travelers to log trips, share visited places, and interact through likes and comments.",
    year: "2024",
    status: "Web Development Course Project",
    role: "Full-Stack Developer",
    duration: "2024",

    // Cover shown on the grid card (landscape) — two real screenshots shown side-by-side.
    // Images only ever appear on the outer card, never inside the detail modal.
    cover: "assets/projects/travelly/hero-landing.png",
    coverImages: [
      "assets/projects/travelly/welcome-gallery.png",
      "assets/projects/travelly/hero-landing.png"
    ],

    tags: ["PHP", "MySQL", "Full-Stack", "Web App", "Social Platform"],

    cardSummary: "A dynamic PHP & MySQL web app where users log their travels, add visited places with photos, and interact with other travelers through likes and comments.",

    overview: "Travelly is a full-stack travel-sharing web application built with PHP and MySQL. Users can register, log in, record trips (month, year, destination country), and add multiple visited places to each trip — each with a name, location, description, and photo. Other members of the community can browse everyone's travels, like individual places, and leave comments, turning personal trip logs into a shared, social experience.",

    problem: "Travelers often end up with trip photos and notes scattered across phones and chats, with no simple way to organize them by destination or share them with an interested community that can react and comment.",

    solution: "Travelly gives each user a personal space to log trips by country, month, and year, attach multiple visited places with photos and descriptions, and publish them to a shared feed where other users can like specific places and leave comments — plus a personal dashboard to edit or delete past trips at any time.",

    features: [
      {
        icon: "fa-solid fa-user-lock",
        title: "Authentication & Sessions",
        desc: "Secure sign-up/login flow using hashed passwords (password_verify) and PHP sessions to protect all trip-management pages."
      },
      {
        icon: "fa-solid fa-plane-departure",
        title: "Add New Trips",
        desc: "A guided flow to create a trip (month, year, destination country) and add one or more visited places to it, each with its own photo upload."
      },
      {
        icon: "fa-solid fa-images",
        title: "Place Details & Photo Uploads",
        desc: "Every visited place has a name, location, description, and an uploaded photo, stored on the server and linked back to its trip."
      },
      {
        icon: "fa-solid fa-heart",
        title: "Likes on Places",
        desc: "A toggleable like/unlike button per place, with live like counts pulled from the database for every visitor to see."
      },
      {
        icon: "fa-solid fa-comments",
        title: "Comments",
        desc: "Any logged-in user can leave comments on a visited place, displayed instantly below it along with the commenter's name."
      },
      {
        icon: "fa-solid fa-table-list",
        title: "My Travels Dashboard",
        desc: "A personal table view of all of a user's trips and places with quick Edit / Delete actions for full trip management."
      },
      {
        icon: "fa-solid fa-filter",
        title: "Community Feed & Country Filter",
        desc: "A homepage feed listing every user's trips sorted by most recent, filterable by destination country."
      }
    ],

    // Tech stack grouped by layer
    techStack: {
      "Backend": ["PHP (procedural)", "mysqli (prepared statements)", "PHP Sessions"],
      "Database": ["MySQL — User, Travel, Country, Place, Like, Comment tables"],
      "Frontend": ["HTML5", "CSS3", "JavaScript"],
      "File Handling": ["Server-side photo uploads (move_uploaded_file)"]
    },

    // High-level architecture explanation (Client-Server model)
    architecture: {
      summary: "Travelly follows a classic PHP server-rendered architecture. Each page is a PHP script that authenticates the session, runs parameterized MySQL queries, and renders HTML directly — with dedicated action scripts handling writes (adding trips/places, liking, commenting, editing, deleting) before redirecting back to the relevant view.",
      client: [
        "Server-rendered HTML pages styled with custom CSS",
        "Forms for sign-up, login, adding trips/places, editing trips",
        "Like button and comment form on every visited place"
      ],
      server: [
        "Session-based authentication guarding all protected pages",
        "Prepared-statement MySQL queries (mysqli) for all reads/writes",
        "Dedicated action scripts: add_like.php, add_comment.php, deleteTravel.php, update_travel.php",
        "Photo upload handling and file storage for place images",
        "Relational schema linking User → Travel → Place → Like/Comment, with a shared Country lookup table"
      ]
    },

    links: [
      // { label: "GitHub", url: "#", icon: "fa-brands fa-github" }
    ]
  },

  {
  id: "planbee",
  title: "PlanBee",
  titleArabic: "",
  tagline: "A collaborative task and project management platform for individuals and teams.",
  year: "2024",
  status: "Software Engineering Course Project",
  role: "Team Project",
  duration: "2024",

  // Three screenshots displayed side by side on the project card
  cover: "",
  coverImages: [
    "assets/projects/planbee/planbee1.png",
    "assets/projects/planbee/planbee2.png",
    "assets/projects/planbee/planbee3.png"
  ],

  tags: [
    "Software Engineering",
    "FlutterFlow",
    "Firebase",
    "Agile / Scrum",
    "UI/UX"
  ],

  cardSummary:
    "A collaborative task management application that enables users to organize personal tasks, manage shared workspaces, and collaborate with teams in real time.",

  overview:
    "PlanBee is a task and project management application developed as part of a Software Engineering course. The project followed a complete software engineering lifecycle—from domain analysis and requirements engineering to system design, implementation, testing, and documentation. The application enables users to create personal tasks, collaborate with teams through shared workspaces, monitor progress, and stay organized using an intuitive interface.",

  problem:
    "Managing personal and team tasks across multiple projects can quickly become overwhelming, often leading to missed deadlines, poor organization, and ineffective collaboration. Many users need a simple platform that combines personal task management with real-time teamwork.",

  solution:
    "PlanBee provides an all-in-one platform where users can create personal tasks, organize projects, collaborate with team members, assign tasks, monitor progress, and receive notifications. The application simplifies task management while encouraging efficient teamwork through shared project workspaces.",

  vision:
    "For individuals and teams who need an efficient way to organize work and collaborate, PlanBee is a task and project management application that simplifies planning, improves productivity, and enables seamless teamwork in a single platform.",

  features: [
    {
      icon: "fa-solid fa-user-plus",
      title: "Authentication",
      desc: "Secure user registration, login, and logout with individual user accounts."
    },
    {
      icon: "fa-solid fa-list-check",
      title: "Personal Task Management",
      desc: "Create, edit, delete, search, and track personal tasks through a simple dashboard."
    },
    {
      icon: "fa-solid fa-folder-tree",
      title: "Project Workspaces",
      desc: "Create collaborative project workspaces for managing shared team tasks."
    },
    {
      icon: "fa-solid fa-users",
      title: "Team Collaboration",
      desc: "Invite members, assign group tasks, and collaborate in real time."
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Progress Tracking",
      desc: "Monitor both personal and team task completion to improve productivity."
    },
    {
      icon: "fa-solid fa-bell",
      title: "Task Notifications",
      desc: "Receive reminders and notifications for deadlines and important updates."
    }
  ],

  objectives: [
    "Simplify personal and collaborative task management.",
    "Provide an intuitive and user-friendly interface.",
    "Support team collaboration through shared workspaces.",
    "Enable users to organize, update, and track task progress.",
    "Provide secure authentication and account management.",
    "Improve productivity through notifications and task monitoring."
  ],

  techStack: {
    "Frontend": [
      "FlutterFlow"
    ],
    "Backend": [
      "Firebase"
    ],
    "Design & Modeling": [
      "Use Case Diagram",
      "Class Diagram",
      "ER Diagram",
      "UI/UX Design"
    ],
    "Development Process": [
      "Agile",
      "Scrum"
    ]
  },

  architecture: {
    summary:
      "PlanBee follows a Client–Server architecture. The client application provides the user interface for task management, while Firebase handles authentication, data storage, synchronization, and backend services. This architecture improves scalability, maintainability, and secure access to project data.",

    client: [
      "User authentication",
      "Personal task dashboard",
      "Project workspace management",
      "Real-time user interface",
      "Task creation, editing, and tracking"
    ],

    server: [
      "Firebase Authentication",
      "Cloud database storage",
      "Business logic and data validation",
      "Data synchronization",
      "Secure user access and data management"
    ]
  },

  methodology:
    "The project was developed following the Agile Scrum methodology. Development progressed through domain analysis, requirements engineering, sprint planning, system design, implementation, integration testing, user acceptance testing (UAT), and final documentation.",

  results: [
    "Designed and implemented a complete software engineering project following the SDLC.",
    "Produced comprehensive software documentation including domain analysis, software requirements, architecture, UML diagrams, UI design, testing, and implementation.",
    "Successfully implemented personal and collaborative task management features.",
    "Conducted Integration Testing and User Acceptance Testing (UAT) using participant questionnaires and feedback.",
    "Delivered a scalable Client–Server solution with Firebase backend services."
  ],

  links: [
    // { label: "GitHub", url: "#", icon: "fa-brands fa-github" }
  ]
}
 
  // 👉 Add more projects here later using the same structure.
];
