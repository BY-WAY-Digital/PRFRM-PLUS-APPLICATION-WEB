import Navigation from "./navigation";
import Link from "next/link";
import UserAvatar from "./user-avatar";

export default function Sidebar() {
  return (
    <aside className="h-full p-4 w-full flex flex-col justify-between">
      <div className="flex flex-col space-y-5">
        <Link href="/dashboard" className="font-bold text-2xl dark:text-white">
          PRFRM+
        </Link>
        <Navigation />
      </div>
      <div className="justify-end">
        <UserAvatar />
      </div>
    </aside>
  );
}
