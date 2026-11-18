import connectDB from "./config/db.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });