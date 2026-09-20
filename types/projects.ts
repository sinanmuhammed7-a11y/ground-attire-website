export type ProjectCategory = "residential" | "hospitality";

export type Project = {
  slug: string;
  title: string;
  location: string;
  description: string;
  category: ProjectCategory;
  year?: string;
  image: {
    src: string;
    alt: string;
  };
  featured: boolean;
};
