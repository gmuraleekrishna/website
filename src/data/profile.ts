// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the website.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Muraleekrishna Gopinathan",
  shortName: "Muraleekrishna",
  credentials: "PhD",
  role: "Senior AI/ML Scientist · Data Engineer",
  location: "Perth, Western Australia",
  timezone: "AWST (UTC+8)",
  summary:
    "Senior-level AI/ML scientist with 5+ years of ML and data science expertise and 10+ years of software engineering knowledge. Focused on the productionisation of Generative AI solutions — from agentic systems and LLM evaluation to large-scale retrieval and data platforms.",
  // Short lines shown under the hero heading.
  highlights: [
    "Productionising Generative AI",
    "Agentic AI & LLM evaluation",
    "Scalable data & lakehouse platforms",
  ],
  links: {
    github: "https://github.com/gmuraleekrishna",
    linkedin: "https://linkedin.com/in/gmuraleekrishna",
    email: "mailto:gmuraleekrishna@gmail.com",
    resume: "/resume.docx",
  },
  contact: {
    phone: "+61 468 467 963",
    phoneHref: "tel:+61468467963",
  },
} as const;

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  /** Short technology / skill tags shown as chips. */
  stack: string[];
  highlights: string[];
  /** Roles after the first are collapsed behind a "Show all roles" toggle. */
  collapsed?: boolean;
};

export const experience: Role[] = [
  {
    company: "Fortescue Ltd",
    title: "Senior Data Engineer",
    period: "Jun 2025 – Present",
    location: "Australia",
    stack: [
      "Agentic AI",
      "LLM evaluation",
      "AWS / Azure",
      "OpenSearch",
      "SolidJS",
      "TanStack",
      "vLLM",
      "Snowflake",
      "LLM-as-a-judge",
    ],
    highlights: [
      "Conducted AI architecture design, code reviews and solution design decisions for enterprise generative AI products.",
      "Developed a semantic search RAG service processing 10M+ engineering documents.",
      "Led evaluation of a contract-evaluation product, improving AI feedback quality.",
    ],
  },
  {
    company: "Hitachi Rail STS",
    title: "Lead Data Engineer",
    period: "Apr 2020 – Jun 2025",
    location: "Australia",
    stack: [
      "Machine Learning",
      "Data Lake",
      "Analytics",
      "Business Intelligence",
      "Python",
      "Apache Kafka",
      "StarRocks",
      "PostgreSQL",
      "MySQL",
      "NumPy",
      "Spark",
      "MLflow",
      "Elasticsearch",
    ],
    highlights: [
      "Improved quality of autonomous rail system maintenance by developing predictive models on a big data platform.",
      "Developed machine learning models for predicting asset behaviour from time-series data.",
      "Developed a scalable, highly available ETL and lakehouse architecture using an open-source ecosystem.",
      "Developed custom data parsers for decoding multi-format logs from autonomous locomotive computers — 80,000+ lines of code.",
    ],
  },
  {
    company: "Australian National University",
    title: "Session Academic",
    period: "Feb 2019 – Jun 2020",
    location: "ACT, Australia",
    stack: [
      "ROS",
      "OpenCV",
      "Verilog",
      "FPGA",
      "Control Systems",
      "Python",
      "Systems Engineering",
    ],
    highlights: [
      "Prepared course content and lab materials, and recommended course improvements to the academic committee.",
      "Tutored Systems Engineering and Embedded Systems courses.",
      "Mentored 120+ students through to completion of their academic projects.",
    ],
    collapsed: true,
  },
  {
    company: "Aconex (India) Pty Ltd",
    title: "Software Engineer",
    period: "Apr 2017 – Oct 2017",
    location: "India",
    stack: ["Ruby on Rails", "Python", "JavaScript", "AngularJS", "Agile", "Git", "JIRA"],
    highlights: [
      "Conceived and deployed a multi-service, large-scale application serving over 1 million users.",
      "Designed new REST APIs, built AngularJS UI components and improved hybrid mobile applications.",
      "Built CQRS-based microservices in Ruby and JavaScript — 80,000+ lines of code.",
      "Applied TDD and extreme programming practices, significantly improving the development process.",
      "Resolved a long-standing bug and improved application performance and security.",
    ],
    collapsed: true,
  },
  {
    company: "Multunus Software Pvt Ltd",
    title: "Software Programmer",
    period: "Jun 2014 – Mar 2017",
    location: "Bangalore, India",
    stack: ["Ruby", "PostgreSQL", "HTML5", "TDD", "Agile", "Git", "JIRA"],
    highlights: [
      "Led design, development and testing of software products across multiple domains, liaising with customers and product owners to identify business requirements.",
      "Drove delivery through agile methodology, practising pair programming and test-driven development.",
      "Built an intelligent recommendation system that increased the client's customer conversion ratio.",
      "Delivered working software every 2 days against a very tight turnaround.",
    ],
    collapsed: true,
  },
];

// ---------------------------------------------------------------------------
// Research & publications
// ---------------------------------------------------------------------------

export type Publication = {
  title: string;
  venue: string;
  year: string;
  tags: string[];
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "StratXplore: Strategic Novelty-seeking and Instruction-aligned Exploration for Vision and Language Navigations",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2024)",
    year: "2024",
    tags: ["Robotics", "Computer Vision", "Language Modelling"],
  },
  {
    title: "Spatially-Aware Speaker for Vision Language Navigation Instruction Generation",
    venue: "Annual Meeting of the Association for Computational Linguistics (ACL 2024)",
    year: "2024",
    tags: ["Generative AI", "Transformers", "Computer Vision"],
  },
  {
    title: "Gesture Control of Boston Dynamics Spot using XRAI Vision Glasses for Defence Applications",
    venue: "Defence Science Technology Group grant — A$150,000",
    year: "2022",
    tags: ["Robotics", "Computer Vision"],
    note: "In collaboration with UWA, Chironix, Agili8 and Edith Cowan University.",
  },
  {
    title: "Indoor Semantic Scene Understanding using 2D–3D Fusion",
    venue: "Digital Image Computing: Techniques and Applications (DICTA 2021)",
    year: "2021",
    tags: ["Robotics", "Computer Vision"],
  },
  {
    title: "Solving occlusion in object detection using multiple camera views",
    venue: "Master's Thesis",
    year: "2019",
    tags: ["Computer Vision", "Deep Learning"],
    note: "Deep learning model for object detection and tracking across multiple cameras, improving accuracy and robustness.",
  },
  {
    title: "Altitude Control System Design for High Power Rockets",
    venue: "ANU Rocketry — competition entry",
    year: "2019",
    tags: ["Systems Engineering", "Control Systems", "Rocketry"],
    note: "Optimal control scheme achieving competition-winning apogee and altitude.",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export type Qualification = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  topics: string[];
};

export const education: Qualification[] = [
  {
    degree: "Doctor of Philosophy, Computer Science",
    institution: "Edith Cowan University",
    period: "Jan 2021 – Sep 2025",
    detail: "Vice-Chancellor's PhD by Research Scholarship",
    topics: ["Robotics", "Computer Vision", "Machine Learning", "NLP", "Generative AI"],
  },
  {
    degree: "Master of Engineering, Mechatronics Engineering",
    institution: "Australian National University",
    period: "Feb 2018 – Dec 2019",
    detail: "GPA 6.1 / 7",
    topics: ["Robotics", "Embedded Systems", "Computer Vision", "Control Systems"],
  },
  {
    degree: "Bachelor of Technology, Electronics & Communication Engineering",
    institution: "Mahatma Gandhi University",
    period: "Jun 2010 – May 2014",
    detail: "GPA 7.5 / 10",
    topics: ["Mechatronics", "Control Systems", "Telecommunication Systems"],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Generative AI",
    items: ["Agentic AI", "LLM Evaluation", "NLP", "RAG", "Prompt Engineering", "Transformers"],
  },
  {
    label: "Machine Learning",
    items: ["Deep Learning", "Computer Vision", "Predictive Maintenance", "PyTorch", "MLflow", "MLOps"],
  },
  {
    label: "Data & Platforms",
    items: ["Snowflake", "Apache Spark", "Apache Kafka", "Elasticsearch", "OpenSearch", "Lakehouse", "ETL"],
  },
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Ruby", "Verilog", "Bash"],
  },
  {
    label: "Cloud & Tooling",
    items: ["AWS", "Azure", "SageMaker", "Bedrock", "Docker", "Linux", "Git", "MATLAB"],
  },
  {
    label: "Domains",
    items: ["Robotics", "ROS", "FPGA", "Control Systems", "Systems Engineering", "Agile", "Leadership"],
  },
];

export const achievements: string[] = [
  "Presented 2 international AI papers — IROS 2024 (Robotics, A rank) and ACL 2024 (NLP, A* rank).",
  "Team Lead, Operation & Maintenance Data Science Team, Hitachi Rail STS (2020).",
  "Winner, Vice-Chancellor's PhD by Research Scholarship, Edith Cowan University (2021).",
  "Team Leader, ANU Rocketry 2020 Avionics team (2019).",
];

// ---------------------------------------------------------------------------
// GitHub projects
//
// `fallback` is used when the GitHub API is unreachable at build time.
// Featured projects are hand-picked; the full list is fetched live.
// ---------------------------------------------------------------------------

export type Project = {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
  topics: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "StratXplore",
    description:
      "Research code for my IROS 2024 paper on strategic novelty-seeking and instruction-aligned exploration for vision-and-language navigation.",
    language: "Jupyter Notebook",
    stars: 2,
    url: "https://github.com/gmuraleekrishna/StratXplore",
    topics: ["robotics", "computer-vision", "nlp"],
  },
  {
    name: "SAS",
    description:
      "Python project and the most actively maintained repository in my account — an experimental sandbox for applied machine learning work.",
    language: "Python",
    stars: 4,
    url: "https://github.com/gmuraleekrishna/SAS",
    topics: ["python", "machine-learning"],
  },
  {
    name: "semantic-segmentation",
    description:
      "SegNet-based semantic image segmentation implementation, built as part of my computer vision research.",
    language: "Python",
    stars: 2,
    url: "https://github.com/gmuraleekrishna/semantic-segmentation",
    topics: ["computer-vision", "deep-learning", "segmentation"],
  },
  {
    name: "DE10Nano-Balance-Car",
    description:
      "A Verilog implementation of a self-balancing car for the Terasic DE10-Nano, exploring FPGA-based control design.",
    language: "Verilog",
    stars: 2,
    url: "https://github.com/gmuraleekrishna/DE10Nano-Balance-Car",
    topics: ["verilog", "fpga", "embedded"],
  },
  {
    name: "aus-house-select",
    description:
      "A TypeScript web application for searching and comparing properties across Australia.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/gmuraleekrishna/aus-house-select",
    topics: ["typescript", "web"],
  },
  {
    name: "kohonen_som",
    description:
      "Implementation and notebooks for Kohonen self-organising maps, used for exploratory analysis and clustering of high-dimensional data.",
    language: "Jupyter Notebook",
    stars: 0,
    url: "https://github.com/gmuraleekrishna/kohonen_som",
    topics: ["machine-learning", "unsupervised-learning"],
  },
  {
    name: "MarsRover",
    description:
      "A ROS-based autonomous MarsRover implementation covering perception and planning for the roversim simulator.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/gmuraleekrishna/MarsRover",
    topics: ["robotics", "ros", "simulation"],
  },
  {
    name: "Learn_RL",
    description:
      "Notes and implementations built while learning reinforcement learning — from classical control methods to modern policy-gradient approaches.",
    language: "Jupyter Notebook",
    stars: 0,
    url: "https://github.com/gmuraleekrishna/Learn_RL",
    topics: ["reinforcement-learning", "machine-learning"],
  },
];

// Extra repos shown under "More on GitHub" when the API is unavailable.
export const fallbackProjects: Project[] = [
  {
    name: "dummies-guide-to-retrospectives",
    description: "A plain-language guide to running agile retrospectives. My most starred repository.",
    language: null,
    stars: 14,
    url: "https://github.com/gmuraleekrishna/dummies-guide-to-retrospectives",
    topics: ["agile"],
  },
  {
    name: "attendance-tracker",
    description: "Attendance tracker application built with Node.js and Express.",
    language: null,
    stars: 0,
    url: "https://github.com/gmuraleekrishna/attendance-tracker",
    topics: ["nodejs", "express"],
  },
  {
    name: "Benchbot-SSLAM",
    description: "SLAM experimentation on a robotic benchtop platform.",
    language: null,
    stars: 0,
    url: "https://github.com/gmuraleekrishna/Benchbot-SSLAM",
    topics: ["slam", "robotics"],
  },
  {
    name: "reaction_timer",
    description: "A reaction-time challenge implemented in HTML and JavaScript.",
    language: "HTML",
    stars: 0,
    url: "https://github.com/gmuraleekrishna/reaction_timer",
    topics: ["javascript"],
  },
  {
    name: "irobot-ros",
    description: "ROS packages for the iRobot Create / Turtlebot platform.",
    language: "Makefile",
    stars: 0,
    url: "https://github.com/gmuraleekrishna/irobot-ros",
    topics: ["ros", "robotics"],
  },
];
