import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { GoogleAuthButton } from "@/components/google-auth-button";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <>
      <div className="flex-1 flex flex-col min-w-64">
        <h1 className="text-2xl font-medium mb-4">Sign in</h1>
        <GoogleAuthButton />
      </div>
    </>
  );
}
