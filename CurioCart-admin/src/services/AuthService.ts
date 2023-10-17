import baseAxios from "../utils/axios";

export async function refresh(): Promise<{
  message: string;
  statusCode: number;
  authStatus: boolean;
  accessToken: string;
}> {
  try {
    const response = await baseAxios.get("/api/auth/refresh", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return {
      message: response.data.message,
      statusCode: response.status,
      authStatus: response.data.authStatus,
      accessToken: response.data.accessToken,
    };
  } catch (error) {
    console.error(error);
    throw new Error("SignIn failed");
  }
}

export async function userSignIn(signInDetails: any): Promise<{
  message: string;
  statusCode: number;
  authStatus: boolean;
  accessToken: string;
}> {
  try {
    const response = await baseAxios.post("/api/auth/sign-in", signInDetails, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return {
      message: response.data.message,
      statusCode: response.status,
      authStatus: response.data.authStatus,
      accessToken: response.data.accessToken,
    };
  } catch (error) {
    console.error(error);
    throw new Error("SignIn failed");
  }
}

export async function userSignUp(
  signUpDetails: any
): Promise<{ message: string }> {
  try {
    const response = await baseAxios.post("/api/auth/sign-up", signUpDetails, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Signup failed");
  }
}

export async function userSignOut() {
  try {
    const response = await baseAxios.post("/api/auth/sign-out", {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
