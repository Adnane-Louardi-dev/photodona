import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import envelope from "../public/mail.svg";
const Navbar = () => {
   return (
      <div className="container-fluid">
         <nav
            className={styles.nav + " row gx-1  d-flex justify-content-between"}
         >
            <div className={styles.envelopeCont + " col-12 col-sm-3 px-3"}>
               <Image src={envelope} height={25} width={25} alt="envelope" />
               <p className={styles.email}>adnanelouardiaws@gmail.com</p>
            </div>

            <ul
               className={
                  styles.navItems +
                  " col-12 col-sm-4 text-center d-flex justify-content-between px-4"
               }
            >
               <li className={styles.navItem}>Works</li>
               <li className={styles.navItem}>Services</li>
               <li className={styles.navItem}>Contact</li>
            </ul>
         </nav>
      </div>
   );
};

export default Navbar;
