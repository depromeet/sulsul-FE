export enum IRequestBeerStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface IRequestBeer {
  beerId: number;
  beerImageUrls: string[];
  beerName: string;
  createAt: string;
  requestCompletedAt: string;
  requestRejectionReason: string;
  status: IRequestBeerStatus;
}
