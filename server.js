import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/database.js";
import { syncDatabase } from "./src/models/index.js";
import router from "./src/routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

syncDatabase();

app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
