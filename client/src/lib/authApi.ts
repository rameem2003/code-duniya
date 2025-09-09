export const loginRequest = async (email: string, password: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to login: " + error.message);
  }
};

export const registerRequest = async (
  name: string,
  phone: string,
  email: string,
  password: string
) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, phone, email, password }),
    });
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to register: " + error.message);
  }
};

export const userUpdateRequest = async (
  name: string,
  email: string,
  address: string,
  phone: string
) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/update-profile`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name, email, address, phone }),
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to update user: " + error.message);
  }
};

export const logoutRequest = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to logout: " + error.message);
  }
};

export const userRequest = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
      method: "GET",
      credentials: "include",
    });
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to get user: " + error.message);
  }
};
