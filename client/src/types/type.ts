export interface courseType {
  _id: string;
  title: string;
  description: string;
  sellingPrice: number;
  discountedPrice: number;
  thumb: string;
  price: number;
  successStories: successStoryType[];
  users: [];
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface categoryType {
  _id: string;
  name: string;
  thumb: string;
  courses: courseType[];
  createdAt: string;
  updatedAt: string;
}

export interface successStoryType {
  _id: string;
  userID: string;
  course: string;
  video: string;
  thumb: string;
  createdAt: string;
  updatedAt: string;
}
export interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}
