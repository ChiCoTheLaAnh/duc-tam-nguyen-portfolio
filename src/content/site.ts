import { resolveSiteUrl } from "@/lib/site-url";
export const site = {
  name: "Tam Nguyen",
  fullName: "Duc Tam Nguyen",
  description:
    "Tam Nguyen is a Chicago-based UIC computer science student building reliable data pipelines, machine learning systems, and intelligent applications.",
  url: resolveSiteUrl(),
  email: "ductam.nguyen.201005@gmail.com",
  linkedin: "https://www.linkedin.com/in/ductam05/",
  github: "https://github.com/ChiCoTheLaAnh",
  location: "Chicago, IL",
  university: "University of Illinois Chicago",
  education: "Bachelor of Science in Computer Science",
  minor: "Mathematics",
  graduation: "May 2027",
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
    title: "Cloud & delivery",
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
    role: "Computer Vision / AI Intern",
    field: "Computer vision",
    dates: "May 2025 – August 2025",
    description:
      "Implemented and evaluated face recognition pipelines using ResNet and Vision Transformer backbones, benchmarking recognition accuracy and inference latency.",
    outcomes: [
      "Analyzed external NIST FRTE 1 identification benchmarks with galleries of up to 1.6 million identities.",
      "Examined FPIR/FNIR and deployment trade-offs. The gallery size describes the external benchmark, not an internal system I deployed or evaluated.",
    ],
    highlight: "Face recognition · ResNet & ViT",
    skills: ["ResNet", "Vision Transformers", "Model evaluation"],
  },
  {
    company: "Viettel High Tech",
    role: "Data Science Intern",
    field: "Applied data science",
    dates: "May 2024 – August 2024",
    description:
      "Worked with multi-million-row telecom datasets to build customer segmentation and propensity models, and automated recurring Python and SQL workflows.",
    outcomes: [
      "Improved campaign targeting accuracy by 15%.",
      "Reduced recurring reporting time by 30%.",
    ],
    highlight: "15% better targeting · 30% less reporting time",
    skills: ["Python", "SQL", "Customer segmentation", "Propensity modeling"],
  },
  {
    company: "University of Illinois Chicago",
    role: "Undergraduate Teaching Assistant",
    field: "CS 151 & CS 341",
    dates: "August 2024 – Present",
    description:
      "Supported more than 100 students through instruction, office hours, and grading across CS 151 and CS 341.",
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
