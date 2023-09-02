import express from "express";
import { SERVER_PORT } from "./config/envConfig.js";
import connectDb from "./config/dbConfig.js";
// Route Imports
import items from "./api/routes/itemRoute.js";
const app = express();
app.use(express.json());
// Defining Routes
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