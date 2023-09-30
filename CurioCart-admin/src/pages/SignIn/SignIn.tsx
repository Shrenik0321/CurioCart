import React from "react";

import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { signInWithGoogle } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../services/AuthService";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { AuthReducerAction } from "../../types";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();
  // const handleSignInWithGoogle = () => {
  //   signInWithGoogle()
  //     .then((result: any) => {
  //       console.log("Signed in successfully:", result);

  //       const firebaseAuthId: any = result?.uid;
  //       const name: any = result?.user.displayName;
  //       const email: any = result?.user.email;
  //       const profilePic: any = result?.user.photoURL;

  //       localStorage.setItem("name", name);
  //       localStorage.setItem("email", email);
  //       localStorage.setItem("profilePic", profilePic);

  //       // const loginDetails = {
  //       //   firebaseAuthId: firebaseAuthId,
  //       //   name: name,
  //       //   email: email,
  //       //   profilePic: profilePic,
  //       // };
  //       // googleSignIn(loginDetails);
  //       navigate("/overview");
  //     })
  //     .catch((error) => {
  //       console.error("Error signing in:", error);
  //     });
  // };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const signInDetails = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await userSignIn(signInDetails);
      setAuth(response);
      navigate("/overview");
    } catch (err) {
      console.log(err);
    }
    // if (response.statusCode === 201 || 200) {
    //   navigate("/overview");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          {/* <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignInWithGoogle}
          >
            Sign In with Google
          </Button> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
