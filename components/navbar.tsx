import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import logo from "../app/logo1.jpg"
import NavFilters from "./nav-filters";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b sticky top-0 z-10 bg-inherit">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="absolute">
            <Image className="w-10 h-10 rounded-full" src={logo} alt="logo" />
          </Link>

          <div className="ml-16 hidden md:block">
            <MainNav data={categories} />
          </div>

          <div className="ml-16 block md:hidden">
            <NavFilters data={categories} />
          </div>

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;