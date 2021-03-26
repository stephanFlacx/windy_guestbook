export interface GuestbookOverviewModel {
    author: string;
    claps: number;
    comments: number;
    id: number;
    messagePreview: string;
}

export interface GuestbookDetailModel {
  author: string;
  claps: number;
  comments: [
    {
      author: string;
      comment: string;
      date: string;
    }
  ];
  message: string;
}
