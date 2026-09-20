import projects from "@/data/projects";
import type { Project } from "@/types/projects";

const SELECTED_WORK_LIMIT = 4;

export async function getProjects() {
  return projects;
}

export async function getProject(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getSelectedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured).slice(0, SELECTED_WORK_LIMIT);
}
