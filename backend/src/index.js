import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true, 
    credentials: true, 
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

// If using cookies/sessions:
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  res.send("CORS Fixed!");
});


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
