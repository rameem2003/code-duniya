export const allSuccessStories = async (limit: number = 0) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/successstory?limit=${limit}`
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch success stories");
  }
};
