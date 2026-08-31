import { NextResponse } from "next/server";
import postgres from "postgres";
import bcrypt from "bcryptjs";

const sql = postgres(process.env.DATABASE_URL!);

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Check that required fields exist
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required." },
        { status: 400 }
      );
    }

    // Check if the email is already registered
    const existingUser = await sql`
      SELECT id FROM "user"
      WHERE email = ${email}
      LIMIT 1
    `;

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const users = await sql`
      INSERT INTO "user" (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email, "createdAt"
    `;

    return NextResponse.json(
      {
        message: "Account created successfully.",
        user: users[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      { error: "Something went wrong while creating the account." },
      { status: 500 }
    );
  }
}