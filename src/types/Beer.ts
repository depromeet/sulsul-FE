export interface CountryType {
  id?: number;
  name?: string;
  nameEng?: string;
  continent?: {
    id: number;
    name: string;
  };
}

export interface Beer {
  id?: number;
  country?: CountryType;
  type?: string;
  name?: string;
  nameEng?: string;
  imageUrl?: string;
  content?: string;
  alcohol?: number;
  price?: number;
  volume?: number;
  feel?: number | null;
  isLiked?: boolean;
}
