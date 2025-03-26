import Experience from "../models/Experience";
import { connectToDatabase } from "../lib/mongodb";

export async function GET() {
  try {
    // Connect to database
    await connectToDatabase();

    // Fetch all experiences
    const experiences = await Experience.find().sort({ createdAt: -1 });

    // Check if no data exists
    if (experiences.length === 0) {
      return new Response(JSON.stringify({ message: "No experiences found", data: [] }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: "Experiences fetched successfully", data: experiences }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
