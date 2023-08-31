import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import watches from "../../assets/watch_3.webp";

export default function ShoppingCart() {
  return (
    <Card sx={{ display: "flex", margin: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={watches}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" sx={{ fontWeight: "bold" }}>
            Headhphones
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            $99.99
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" sx={{ fontWeight: "bold" }}>
            Order Summary
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Order total
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
