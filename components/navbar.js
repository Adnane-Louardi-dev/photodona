import styles from "../styles/navbar.module.css";
import Image from "next/image";
const Navbar = () => {
   return (
      <>
         <div className={styles.navBar + " container-fluid mb-5"}>
            <nav className={styles.nav + " row gx-1  d-flex justify-content-between"}>
               <div className={styles.envelopeCont + " col-1 col-sm-4 px-1 my-2 text-center"}>
                  <Image src="/mail.svg" height={50} width={50} alt="envelope" />
                  <p className={styles.email}>adnanelouardiaws@gmail.com</p>
               </div>

               <ul className={styles.navItems + " col-12 col-sm-5 text-center d-flex justify-content-between px-4 my-2 "}>
                  <li className={styles.navItem}>Works</li>
                  <li className={styles.navItem}>Services</li>
                  <li className={styles.navItem}>Contact</li>
               </ul>
            </nav>
         </div>
      </>
   );
};

export default Navbar;
