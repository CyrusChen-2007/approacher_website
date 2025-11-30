
export type Language = 'en' | 'zh';

export interface Club {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  leaderImage: string;
  icon: string;
  color: string;
}

export interface Resident {
  id: string;
  name: string;
  major: string;
  clubId: string;
  motto: string;
  garmentImage: string;
}

export interface PollOption {
  id: string;
  label: string;
  votes: number;
}

export enum AppSection {
  HUB = 'HUB',
  MANIFESTO = 'MANIFESTO',
  ARTIFACTS = 'ARTIFACTS',
  WARDROBE = 'WARDROBE',
  OPERATIONS = 'OPERATIONS'
}