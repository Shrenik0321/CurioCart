import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Billboard = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1676800604854-1efdb61aab87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "150px",
      }}
    >
      <Typography variant="h2" fontWeight="semi-bold">
        Welcome to CurioCart!
      </Typography>
    </Stack>
  );
};

export default Billboard;
