export interface User{
  avatar_url:string;
  login: string;
  type: string;
}

export interface SearchUserCriteria{
  q: string;
  sort?: string;
  order?: string;
  per_page?: number;
  page?: number;
}
