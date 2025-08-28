export interface userType {
  id: string;
  name: string;
  email: string;
  role: string;
  courses: courseType[];
  successStory: successStoryType[];
  isVerified: boolean;
  block: boolean;
  avatar: string;
}
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

export interface AuthContextType {
  user: userType | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<void>;
}
