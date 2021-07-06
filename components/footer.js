import styles from "../styles/footer.module.css";
import Image from "next/image";
const Footer = () => {
   return (
      <footer class={`${styles.footer} mt-5`}>
         <div class="container">
            <div class="row">
               <div class="col-md-12 py-5">
                  <div class="my-1 flex-center d-flex justify-content-center">
                     <a className="mx-4">
                        <Image
                           src="/socialMediaIcons/facebook.svg"
                           height={50}
                           width={50}
                        />
                     </a>

                     <a className="mx-4">
                        <Image
                           src="/socialMediaIcons/linkedin.svg"
                           height={50}
                           width={50}
                        />
                     </a>

                     <a className="mx-4">
                        <Image
                           src="/socialMediaIcons/whatsapp.svg"
                           height={50}
                           width={50}
                        />
                     </a>

                     <a className="mx-4">
                        <Image
                           src="/socialMediaIcons/github.svg"
                           height={50}
                           width={50}
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div class={`${styles.subFooter} text-center py-3`}>
            <a style={{ color: "white" }}>
               © 2021 Copyright: Make with ❤︎ by me
            </a>
         </div>
      </footer>
   );
};

export default Footer;
