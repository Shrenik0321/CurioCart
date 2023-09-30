import express from "express";
import cors from "cors";
import { SERVER_PORT } from "./config/envConfig.js";
import connectDb from "./config/dbConfig.js";
import cookieParser from "cookie-parser";
// Route Imports
import auth from "./api/routes/authRoute.js";
import items from "./api/routes/itemRoute.js";
const app = express();
app.use(express.json());
const allowedOrigins = ["http://127.0.0.1:5174", "http://127.0.0.1:5173"];
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
// Defining Routes
app.use("/api/auth", auth);
app.use("/api/items", items);
// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Uh oh! An unexpected error occured.");
});
app.listen(SERVER_PORT, async () => {
    connectDb();
    console.log(`Server listening on port ${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map