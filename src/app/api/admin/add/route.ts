import { authOptions } from "@/lib/auth";
import { createAdmin } from "@/database/admin.query";
import { getServerSession } from "next-auth";
import { CreatedSuccessfully, Forbidden, InternalServerError } from "@/utils/apiResponses";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Forbidden("Not authenticated");

  try {
    const data = await req.formData();
    const username: string = data.get("username") as string;
    const password: string = data.get("password") as string;

    const newAdmin = await createAdmin({ username, password });

    return CreatedSuccessfully("Admin created successfully");
  } catch (error) {
    return InternalServerError();
  }
}
