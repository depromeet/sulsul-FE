export interface IUserLevel {
  id: number;
  imageUrl: string;
  req: number;
  tier: number;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  profileUrl: string;
  role: string;
  social: string;
  memberLevelResponseDto: IUserLevel;
}
