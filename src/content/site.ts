import { resolveSiteUrl } from "@/lib/site-url";
export const site = {
  name: "Tam Nguyen",
  fullName: "Duc Tam Nguyen",
  description:
    "Tam Nguyen’s personal portfolio: UIC computer science student, teaching assistant, and aspiring data and machine learning engineer.",
  url: resolveSiteUrl(),
  email: "ductam.nguyen.201005@gmail.com",
  linkedin: "https://www.linkedin.com/in/ductam05/",
  github: "https://github.com/ChiCoTheLaAnh",
  location: "Chicago, IL",
  university: "University of Illinois Chicago",
  education: "Bachelor of Science in Computer Science",
  minor: "Mathematics",
  graduation: "May 2027",
  introduction: {
    interests:
      "I like working through the practical parts of data and machine learning: making a pipeline dependable, comparing models, and turning an experiment into something usable.",
    opportunities:
      "I’m looking for internships and early-career opportunities in data engineering, machine learning, and AI.",
    experience:
      "Two industry internships at Viettel · Teaching assistant for CS 151 & CS 341",
  },
  educationDates: "August 2023 – May 2027",
  coursework: [
    "Machine Learning",
    "Applied Statistics",
    "Computer Vision",
    "Data Science",
    "Big Data Mining",
  ],
  gpa: "3.6/4.0",
  achievement: "Dean’s List",
  targetRoles: [
    "Data Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Scientist",
    "Analytics Engineer",
  ],
};
export const capabilities = [
  {
    title: "Languages",
    description: "The foundations I build with.",
    tools: ["Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Data engineering",
    description: "From source data to trustworthy tables.",
    tools: [
      "PostgreSQL",
      "dbt",
      "Airflow",
      "ETL/ELT",
      "REST APIs",
      "Data Modeling",
      "Data Quality Testing",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Packaging, shipping, and observing systems.",
    tools: [
      "Google Cloud Run",
      "Google Cloud Monitoring",
      "Supabase",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Machine learning",
    description: "Experiments with a path to an application.",
    tools: ["scikit-learn", "XGBoost", "PyTorch", "FastAPI", "pandas"],
  },
];
export const experience = [
  {
    company: "Viettel AI",
    organization: "Viettel Group",
    location: "Hanoi, Vietnam",
    kind: "internship",
    resumeBullets: [
      "Implemented and evaluated face recognition pipelines using ResNet and Vision Transformer (ViT) backbones in Python, benchmarking recognition accuracy and inference latency to assess model performance and deployment trade-offs.",
      "Analyzed external NIST FRTE 1:N identification benchmarks across galleries of up to 1.6 million identities, examining false positive and false negative identification rates (FPIR/FNIR) to evaluate accuracy and scalability.",
      "Synthesized experimental findings, technical benchmarks, and implementation constraints into comparative reports supporting internal computer vision research.",
    ],
    role: "Computer Vision / AI Intern",
    field: "Computer vision",
    dates: "May 2025 – August 2025",
    description:
      "Implemented and evaluated face recognition pipelines using ResNet and Vision Transformer backbones, benchmarking recognition accuracy and inference latency.",
    outcomes: [
      "Synthesized experimental findings, technical benchmarks, and implementation constraints into comparative reports supporting internal computer vision research.",
      "Analyzed external NIST FRTE 1:N identification benchmarks with galleries of up to 1.6 million identities.",
      "Examined FPIR/FNIR and deployment trade-offs. The gallery size describes the external benchmark, not an internal system I deployed or evaluated.",
    ],
    highlight: "Face recognition · ResNet & ViT",
    skills: ["ResNet", "Vision Transformers", "Model evaluation"],
  },
  {
    company: "Viettel High Tech",
    organization: "Viettel Group",
    location: "Hanoi, Vietnam",
    kind: "internship",
    resumeBullets: [
      "Developed customer segmentation and propensity models using Python and SQL on multi-million-row telecom datasets, improving campaign targeting accuracy by 15%.",
      "Built and automated data cleaning, transformation, and feature engineering workflows using Python and SQL, reducing recurring reporting time by 30%.",
      "Conducted exploratory data analysis and data quality checks to identify customer behavior patterns, validate model inputs, and support data-driven marketing decisions.",
    ],
    role: "Data Science Intern",
    field: "Applied data science",
    dates: "May 2024 – August 2024",
    description:
      "Worked with multi-million-row telecom datasets to build customer segmentation and propensity models, and automated recurring Python and SQL workflows.",
    outcomes: [
      "Improved campaign targeting accuracy by 15%.",
      "Reduced recurring reporting time by 30%.",
      "Used exploratory analysis and data-quality checks to validate model inputs and support marketing decisions.",
    ],
    highlight: "15% better targeting · 30% less reporting time",
    skills: ["Python", "SQL", "Customer segmentation", "Propensity modeling"],
  },
  {
    company: "University of Illinois Chicago",
    organization: "",
    location: "Chicago, IL",
    kind: "teaching",
    resumeBullets: [
      "Supported more than 100 students in discrete mathematics and programming language concepts through office hours, technical instruction, assignment grading, and collaboration with faculty.",
    ],
    role: "Undergraduate Teaching Assistant",
    field: "CS 151 & CS 341",
    dates: "August 2024 – Present",
    description:
      "Supported more than 100 students in discrete mathematics and programming language concepts through office hours, technical instruction, assignment grading, and faculty collaboration across CS 151 and CS 341.",
    outcomes: [],
    highlight: "100+ students · CS 151 & CS 341",
    skills: [
      "Instruction",
      "Office hours",
      "Grading",
      "Technical communication",
    ],
  },
];
