import Footer from "./Footer"
import Navbar from "./Navbar"
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import Navbar5 from "./Navbar5";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <Navbar1/>
      { children }
      <Navbar2/>
      <Navbar3/>
      <Navbar4/>
      <Navbar5/>
      <Footer />
    </div>
  );
}
 
export default Layout;