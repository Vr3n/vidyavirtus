import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function JobsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <h1 className="text-2xl text-blue-300">
        Hello, {user.user_metadata?.full_name}
      </h1>
      <p className="text-sm">These Are Your Jobs.</p>
    </>
  );
}
