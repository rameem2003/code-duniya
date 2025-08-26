export interface courseType {
  _id: string;
  title: string;
  description: string;
  sellingPrice: number;
  discountedPrice: number;
  thumb: string;
  price: number;
  successStories: [];
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
