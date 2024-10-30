// skill.model.ts
export interface Skill {
  id: number; // Optional for new skills
  type: string; // The type of skill (e.g., programming language, framework, etc.)
  title: string; // The name or title of the skill
  title_class: string; // Optional class name for styling (if needed)
}
