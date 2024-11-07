import { UserProfile } from "@/components/user-profile";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <UserProfile />;
}
