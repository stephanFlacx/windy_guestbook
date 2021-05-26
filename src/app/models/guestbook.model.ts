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

export interface GuestbookPostNewEntryModel {
  author: string;
  message: string;
}

export interface GuestbookCommentModel {
  author: string;
  comment: string;
}

export interface GuestbookClaps {
  claps: number;
}

export interface GuestbookUsers {
  name: string;
  role: string;
}
