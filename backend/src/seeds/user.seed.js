import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "emma@example.com",
    fullName: "Emma",
    password: "123456",
  },
  {
    email: "dony@example.com",
    fullName: "dony",
    password: "123456",
  },
  {
    email: "bony@example.com",
    fullName: "Bony",
    password: "123456",
  },
  {
    email: "james@example.com",
    fullName: "James",
    password: "123456",
  },
  {
    email: "jose@example.com",
    fullName: "jose",
    password: "123456",
  },
  {
    email: "don@example.com",
    fullName: "Don",
    password: "123456",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
