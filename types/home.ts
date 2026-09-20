export type TextSegment = {
    text: string;
    emphasis?: boolean;
  };
  
  export type HomeContent = {
    hero: {
      image: {
        src: string;
        alt: string;
      };
    };
    intro: {
      eyebrow: string;
      statement: TextSegment[];
      cta: { label: string; href: string };
    };
  };