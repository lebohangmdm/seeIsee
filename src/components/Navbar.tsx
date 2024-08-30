import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import MenuDropdown from "./MenuDropdown";
import NavBtns from "./NavBtns";

const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto py-4 px-4 sm:px-6 z-50">
      <div className="flex items-center justify-between relative">
        <Logo />
        <NavLinks />
        <NavBtns />
        <MenuDropdown />
      </div>
    </header>
  );
};

export default Navbar;
