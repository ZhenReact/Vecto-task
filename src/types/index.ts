export interface ContentItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
  ReleaseYear:string;
  VideoUrl?: string;
  Thumbnail?:string;
}

export interface VideoContent {
  Featured: ContentItem;
  TendingNow: ContentItem[];
}
export interface MenuItem {
  icon: string;
  label: string;
  path: string;
  id: number;
}
export interface SidebarNavigation {
  label: string;
  path: string;
  id: number;
}

export interface MovieState {
  featured: ContentItem | null;
  movies: ContentItem[];
  trending: ContentItem[];
  lastSeen: string | null;
}
