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

export const userPasswordUpdateRequest = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to update password: " + error.message);
  }
};

export const emailVerificationTokenRequest = async () => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/send-email-verification`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error(
      "Failed to send email verification token: " + error.message
    );
  }
};

export const forgotPasswordRequest = async (email: string) => {
  console.log(email);

  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to send forgot password email: " + error.message);
  }
};

export const resetPasswordTokenVerifyRequest = async (token: string) => {
  // working in progress
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password-verify/${token}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to verify reset token: " + error.message);
  }
};

export const resetPasswordRequest = async (
  token: string,
  newPassword: string,
  confirmPassword: string
) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/${token}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, confirmPassword }),
      }
    );
    return res.json();
  } catch (error: any) {
    throw new Error("Failed to reset password: " + error.message);
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
