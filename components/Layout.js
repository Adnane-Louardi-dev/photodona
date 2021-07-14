import Navbar from "./navbar";
import SearchField from "./searchField";
import Footer from "./footer";

const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         <SearchField />
         {children}
         {/* <Footer /> */}
      </>
   );
};

export default Layout;
