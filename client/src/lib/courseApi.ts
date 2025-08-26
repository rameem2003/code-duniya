export const allCourses = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch courses");
  }
};

export const allCategories = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

export const singleCategory = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch category");
  }
};
