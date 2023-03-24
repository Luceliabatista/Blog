export interface IDetalhePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TPostsComTotalCount {
  data: IDetalhePost[];
}
