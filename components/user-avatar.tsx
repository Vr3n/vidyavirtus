import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = ({
  avatar_url,
  full_name,
  className = "w-24 h-24",
}: {
  avatar_url: string;
  full_name: string;
  className?: string;
}) => {
  const getInitials = (fullName: string) => {
    const nameParts = fullName.trim().split(" ");

    if (nameParts.length === 1) {
      return nameParts[0][0].toLocaleUpperCase();
    }

    const firstInitial = nameParts[0][0].toLocaleUpperCase();
    const lastInitial = nameParts[nameParts.length - 1][0].toLocaleUpperCase();

    return `${firstInitial}${lastInitial}`;
  };

  return (
    <Avatar className={className}>
      <AvatarImage src={avatar_url} alt={`@`} />
      <AvatarFallback>{getInitials(full_name)}</AvatarFallback>
    </Avatar>
  );
};
