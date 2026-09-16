// Edit this file to update your portfolio content — no need to touch component code.

export const profile = {
  name: "Matin Nezami",
  initials: "MN",
  eyebrow: "AI / Machine Learning Engineer",
  role: "Software Engineer / AI Engineer",
  headline: "I turn data into models that hold up outside the notebook.",
  subtext:
    "Classical machine learning, deep learning, NLP and computer vision — from raw data to an evaluated, reproducible result.",
  availability: "Open to AI / ML engineering opportunities",
  location: "Stuttgart, Germany",
  email: "matinnezami07@gmail.com",
  links: {
    github: "https://github.com/Martin-nezami",
    linkedin: "https://www.linkedin.com/in/matin-nezami/",
    resume: "/Modern_CV.pdf",
  },
};

export const heroTrace = {
  label: "Project pipeline",
  filename: "training_log.txt",
  heading: "Model inside a repeatable pipeline",
  subheading: "The same path from raw data to an evaluated result, every time.",
  steps: ["Data", "Preprocess", "Model", "Train", "Evaluate", "Report"],
  logLines: [
    { step: "01", text: "load & clean dataset", status: "done" },
    { step: "02", text: "train model", status: "done" },
    { step: "03", text: "evaluate on held-out set", status: "passed" },
  ],
};

export const credibility = {
  eyebrow: "Selected work",
  heading: "Grounded in real projects",
  focusAreas: [
    { title: "Deep learning", desc: "CNNs, LSTMs, meta-learning" },
    { title: "NLP", desc: "Classification, transformers, embeddings" },
    { title: "Classical ML", desc: "scikit-learn pipelines, feature engineering" },
    { title: "Delivery", desc: "Next.js, reproducible pipelines, deployment" },
  ],
  stats: [
    { value: "5", label: "ML / DL projects shipped" },
    { value: "4+", label: "frameworks — PyTorch, TensorFlow, Keras, scikit-learn" },
    { value: "100%", label: "projects with public source code" },
  ],
};

export type FeaturedProject = {
  number: string;
  category: string;
  title: string;
  oneLiner: string;
  problem: string;
  system: string;
  engineering: string[];
  stack: string[];
  repo: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    category: "NLP / Deep Learning",
    title: "Fake News Detection",
    oneLiner:
      "Classical ML and transformer models compared head-to-head on real-vs-fake news classification.",
    problem:
      "Telling real news from fake at scale takes more than a single model family to trust the result.",
    system:
      "Articles are cleaned and vectorized with TF-IDF for classical baselines, while a fine-tuned BERT model and an LSTM benchmark handle the neural track — all evaluated on the same train/validation/test split for a fair comparison.",
    engineering: [
      "TF-IDF + Naive Bayes / Logistic Regression baselines",
      "BERT fine-tuning via Hugging Face Transformers",
      "LSTM benchmark in Keras / TensorFlow",
      "Shared evaluation protocol across classical and neural models",
    ],
    stack: ["Python", "scikit-learn", "PyTorch", "Transformers", "TensorFlow", "NLTK"],
    repo: "https://github.com/Martin-nezami/Fake-news-Detection--DL-NLP",
  },
  {
    number: "02",
    category: "Time Series / Deep Learning",
    title: "Stock Market Trading Strategy",
    oneLiner:
      "An LSTM model turns historical price sequences into next-step forecasts and a backtested trading signal.",
    problem:
      "Price movements are sequential — models that ignore order throw away the signal that matters most.",
    system:
      "Historical closing prices are windowed and scaled, then fed through an LSTM to learn temporal dependencies. Predictions are evaluated with RMSE and run through a simple backtest to simulate a wealth process.",
    engineering: [
      "Dataset windowing and scaling pipeline",
      "LSTM model with early stopping",
      "RMSE evaluation with prediction-vs-actual plotting",
      "Backtesting module simulating investment outcomes",
    ],
    stack: ["Python", "TensorFlow / Keras", "NumPy", "pandas", "Jupyter"],
    repo: "https://github.com/Martin-nezami/Stock-Market-Trading-Strategy",
  },
  {
    number: "03",
    category: "Computer Vision / Meta-Learning",
    title: "Face Recognition with Meta-Learning",
    oneLiner:
      "A Siamese network learns face embeddings that adapt to new identities from very few examples.",
    problem:
      "Standard classifiers need many labeled photos per person — that doesn't scale to recognizing new faces.",
    system:
      "A Siamese CNN learns to compare genuine and impostor image pairs. Model-Agnostic Meta-Learning (MAML) trains it across many small recognition tasks so it adapts quickly to identities it has never seen.",
    engineering: [
      "Genuine / impostor pair generation from the ORL Faces dataset",
      "Siamese CNN with conv, pooling, dropout and dense layers",
      "MAML inner/outer-loop meta-training across sampled tasks",
      "Evaluation via accuracy and confusion matrices on held-out identities",
    ],
    stack: ["Python", "TensorFlow", "Keras", "NumPy"],
    repo: "https://github.com/Martin-nezami/Face-Recognition-Meta-Learning",
  },
];

export type MoreProject = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
};

export const moreProjects: MoreProject[] = [
  {
    category: "NLP",
    title: "Wikipedia Text Classification",
    description:
      "TF-IDF + Logistic Regression pipeline that classifies Wikipedia articles into topic categories, trained on data pulled live via the Wikipedia API.",
    tags: ["scikit-learn", "TF-IDF", "NLP"],
    repo: "https://github.com/Martin-nezami/Wikipedia-Text-Classification",
  },
  {
    category: "Machine Learning",
    title: "Fruit Detection with SVM",
    description:
      "Support Vector Machine classifier for detecting and grading fruit from image-derived features.",
    tags: ["Python", "scikit-learn", "SVM"],
    repo: "https://github.com/Martin-nezami/Machine_Learning-",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Job Title",
    org: "Company / Organization",
    period: "Mon Year – Present",
    description:
      "One or two lines on what you did and the impact you had in this role.",
  },
  {
    role: "Previous Job Title",
    org: "Previous Company",
    period: "Mon Year – Mon Year",
    description:
      "One or two lines on what you did and the impact you had in this role.",
  },
];

export type SkillGroup = {
  number: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { number: "01", title: "Deep learning", items: ["PyTorch", "TensorFlow", "Keras"] },
  { number: "02", title: "NLP", items: ["Transformers (Hugging Face)", "NLTK", "TF-IDF"] },
  {
    number: "03",
    title: "Machine learning",
    items: ["scikit-learn", "SVM", "Logistic Regression", "Naive Bayes"],
  },
  {
    number: "04",
    title: "Tools & data",
    items: ["Python", "NumPy", "pandas", "Jupyter", "Git", "Next.js / TypeScript"],
  },
];

export const about = {
  paragraphs: [
    "I'm an AI/ML engineer based in Stuttgart, Germany, working across classical machine learning, deep learning, NLP and computer vision.",
    "My projects span text classification, time-series forecasting, meta-learning for computer vision and fake-news detection — each one taken from a raw dataset through to an evaluated, reproducible model.",
  ],
};

export const education = {
  items: [
    { school: "Your University", field: "Your Degree / Field of Study" },
  ],
};

export const contact = {
  heading: "Have an ML problem worth solving?",
  subtext: "I'm open to AI / ML engineering roles and interesting data problems.",
};
