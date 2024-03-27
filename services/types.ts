export interface Exposition {
  Id: number;
  title: string;
  thumbnail: string | null;
}

export interface ExpositionDetails extends Exposition {
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  tourLength: string | null;
  tickets: string | null;
  individualTickets: string | undefined;
  groupTickets: string | undefined;
  images: any | null;
  video: string | null;
  videoInfo: string | null;
  curator: string | null;
  activities: string | null;
}

export interface Collection {
  Id: number;
  title: string;
  thumbnails: string | null;
}

export interface CollectionDetails extends Collection {
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