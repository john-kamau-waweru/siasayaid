// import { connectToDatabase } from "@/lib/mongodb";
// import Experience from "@/models/Experience";
import Experience from "../models/Experience";
import { connectToDatabase } from "../lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, age, email, county, experience } = body;

    // Validate inputs
    if (!name || !age || !county || !experience) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    // Connect to database
    await connectToDatabase();

    // Save to database
    const newExperience = await Experience.create({ name, age, email, county, experience });

    return new Response(JSON.stringify({ message: "Experience submitted successfully", data: newExperience }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error submitting experience:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
