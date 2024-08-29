import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import MenuDropdown from "./MenuDropdown";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 ">
      <div className="flex items-center justify-between relative">
        <Logo />
        <NavLinks />
        <LoginBtn />
        <MenuDropdown />
      </div>
    </header>
  );
};

export default Navbar;
