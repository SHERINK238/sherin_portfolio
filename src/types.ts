export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  domain: string;
  problemSolved: string;
  coreConcept: string;
  keyHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  scoreLabel: string;
  scoreValue: string;
}

export interface SkillCategory {
  name: string;
  description?: string;
  skills: string[];
  isLearning?: boolean;
}
