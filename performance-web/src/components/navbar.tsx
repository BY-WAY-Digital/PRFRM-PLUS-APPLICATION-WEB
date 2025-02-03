import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <nav className="flex fixed w-full overflow-hidden bottom-0 items-center p-4 mx-auto rounded-lg shadow-md mt-4 justify-between border lg:hidden">
      <MobileSidebar />
    </nav>
  );
}
