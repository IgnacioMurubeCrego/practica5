export type postCardInfo = {
  title: string;
  content: string;
  cover: string;
  author: string;
  likes: number;
  commments: Comment[];
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  author: string;
  content: string;
  createdAt: string;
};
