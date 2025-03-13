import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://harshadakhot30:bSp3tNKe7yGtyEBa@cluster0.wh7vo.mongodb.net/Food-del",
    )
    .then(() => console.log("db coonect"));
};
