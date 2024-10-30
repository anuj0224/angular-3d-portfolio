// profile.model.ts
export interface SocialMedia {
  class: string;
  link: string;
}

export interface Profile {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  title: string;
  social_media: { [key: string]: SocialMedia };
}
