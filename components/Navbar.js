import Image from "next/dist/client/image";
const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/Logo.png" width={150} height={80}></Image>
        </div>
        <a>TUB</a>
      </nav>
  );
  }
   
  export default Navbar;