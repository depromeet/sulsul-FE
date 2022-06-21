export enum IRequestBeerStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface IRequestBeer {
  beerId: number;
  beerImageUrls: string[];
  beerName: string;
  createdAt: string;
  requestCompletedAt: string;
  requestRejectionReason: string;
  status: IRequestBeerStatus;
}
