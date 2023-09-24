import baseAxios from "../utils/axios";

export async function userSignIn(signInDetails: any) {
  try {
    const response = await baseAxios.post("/api/auth/sign-in", signInDetails);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function userSignUp(signUpDetails: any) {
  try {
    const response = await baseAxios.post("/api/auth/sign-up", signUpDetails);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function googleSignIn(loginInDetails: any) {
  console.log(loginInDetails);
  try {
    const response = await baseAxios.post("/api/profile/login", loginInDetails);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
