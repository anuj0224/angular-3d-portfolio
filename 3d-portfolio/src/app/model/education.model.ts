// education.model.ts
export interface Education {
  id: number; // Optional for new entries
  title: string; // Title of the education
  college_name: string; // Name of the college/university
  period: string; // Period of study (e.g., 2019-2022)
  description: string; // Optional description of the education
}
