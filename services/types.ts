export interface Exposition {
  Id: number;
  title: string;
  thumbnail: any | null;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  length: number;
  tickets: string | null;
  individualTickets: string | undefined;
  groupTickets: string | undefined;
  images: any | null;
  video: string | null;
  curator: string | null;
  activities: string | null;
  audioGuide: any | null;
  individualActivities: string | null;
  groupActivities: string | null;
}

export interface Collection {
  Id: number;
  title: string;
  thumbnails: string | null;
  description: string | null;
  images: any | null;
}

export interface CollectionCategories {
  Id: number;
  shortName: string;
  longName: string;
  thumbnail: any | null;
  collections: any | null;
}
