import Image from "next/image";
import Link from "next/link";
import PopUp from "./popup";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
const Photos = ({ photos }) => {
   const imgInfo = useRef(null);
   const [popuped, setPopuped] = useState(false);
   const photoClicked = () => {
      setPopuped(!popuped);
   };
   const { small, alt_description, height, width } = photos;
   return (
      <>
         <div className={`container`}>
            <div className="row gx-5">
               {photos.map((photo) => (
                  <>
                     <div className={`${styles.flex_column} col-12 col-md-6 col-lg-4 my-3`} key={photo.id} ref={imgInfo} onClick={photoClicked}>
                        <div className={`${styles.imgCont}`} style={{ backgroundColor: photo.color, height: "100%", width: "100%" }}>
                           <Image src={photo.urls.small} width={photo.width} height={photo.height} alt={photo.alt_description} className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.onHoverElem} d-flex justify-content-between px-2 `}>
                           <div className={`${styles.userInf} my-2`}>
                              <div className={`${styles.userImgCont} my-2 `}>
                                 <Image src={photo.user.profile_image.small} height={32} width={32} alt={photo.user.username} className={`${styles.userImg}`} />
                              </div>
                              <div className={`${styles.userNameCont} my-2 mx-2`}>
                                 <h6 className={`${styles.userName} my-1`}>{photo.user.username}</h6>
                              </div>
                           </div>
                           <div className={`${styles.photoInf} my-2`}>
                              <div className={`${styles.photoLikeCont} my-2 `}>
                                 <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.photoLikeIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                 </svg>
                              </div>
                              <div className={`${styles.photoDownCont} my-2 mx-2`}>
                                 <Link href={photo.links.download_location} passHref={true}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.photoDownIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </>
               ))}
               {/* <Link href="https://api.unsplash.com/photos?page=2" passHref={true}>
                  <button className="btn">next page</button>
               </Link> */}
            </div>
         </div>
         <div className="popup">{popuped ? <PopUp title={alt_description} /> : null}</div>
      </>
   );
};

export default Photos;
