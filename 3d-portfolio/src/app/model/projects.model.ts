// project.model.ts
export interface Project {
  id: number; // Optional for new projects
  imgUrl: string; // Optional property for project image URL
  title: string; // The title of the project
  tech: string; // Technologies used (comma-separated string)
  description: string; // Optional description of the project
  live_url: string; // Optional live URL of the project
  giturl: string; // Optional Git URL of the project
}
