export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface Project {
  type: string;
  id: string;
  name: string;
  symbol: string;
  image: Image;
}

export interface StatusUpdate {
  description: string;
  category: string;
  created_at: Date;
  user: string;
  user_title: string;
  pin: boolean;
  project: Project;
}

export interface StatusUpdates {
  status_updates: StatusUpdate[];
}
