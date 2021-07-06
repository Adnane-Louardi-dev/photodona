import styles from "../styles/pres.module.css";
import Image from "next/image";
const Pres = () => {
   return (
      <div className="container-fluid ">
         <div className={styles.presCont + " row gx-1"}>
            <div
               className={
                  styles.presText + " col-12 col-md-5 pt-3 px-4 mx-auto "
               }
            >
               <h5 className={styles.presHello}>Hello, I'm</h5>
               <h1 className={styles.presName + " mt-3"}>
                  Adnane <br /> Louardi
               </h1>
               <h5 className={styles.presAbout + " mt-3"}>
                  Lorem ipsum dolor sit amet consectetur
                  <br /> adipisicing elit. Accusamus, magni?
               </h5>
               <button className={styles.presBtn + " mt-3"}>
                  Connect with me
               </button>
            </div>
            <div className="col-12 col-md-6">
               <div className={styles.presImg + " mx-auto"}>
                  <div className={styles.presCircle}></div>
                  <div className="mx-auto  d-flex justify-content-center">
                     <Image
                        src="/portfolio.png"
                        alt="portfolio"
                        height={450}
                        width={350}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Pres;
