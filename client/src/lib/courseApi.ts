export const allCourses = async (limit: number = 0) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses?limit=${limit}`
    );
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

export const singleCourse = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch course");
  }
};

export const purchaseCourse = async () => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/purchase/`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to purchase course");
  }
};
