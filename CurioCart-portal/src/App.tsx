import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
