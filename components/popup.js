import Image from "next/image";
import Link from "next/link";
import popup from "../styles/popup.module.css";

const PopUp = ({ overlayClicked, imageSrc, title, imageAlt, imageHeight, imageWidth, username, userImageSrc, download_location, likes, name, instaAccount, userAccount }) => {
   return (
      <>
         <div className="container">
            <div className={popup.overlay} onClick={overlayClicked}></div>
            <div className="row gx-0 d-flex justify-content-center my-5">
               <div className={`${popup.popupCont} container col-12 col-md-10 col-lg-8 my-5`}>
                  <div className={`row my-2 gx-0 d-flex justify-content-between border-bottom`}>
                     <div className={`${popup.userInf} col-12 col-sm-6 mt-2 d-inline-flex justify-content-start px-3`}>
                        <div className={`${popup.userImgCont} mt-2 mx-2`}>
                           <Link href={userAccount}>
                              <Image src={userImageSrc} height={42} width={42} alt={username} className={`${popup.userImg}`} />
                           </Link>
                        </div>
                        <div className={`${popup.userNameCont}  mt-3 mx-2`}>
                           <h6 className={`${popup.name} mt-1`}>{name}</h6>
                           <Link href={instaAccount}>
                              <p className={`${popup.userName}`}>{`@${username}`}</p>
                           </Link>
                        </div>
                     </div>
                     <div className={`col-12 col-sm-6 my-3  d-inline-flex justify-content-end px-3`}>
                        <div className={`${popup.photoLikeCont} my-2 mx-1 d-inline-flex`}>
                           <h6 className={`my-2 mx-2`}>{likes} likes </h6>
                           <div className={popup.likeIconCont}>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`${popup.photoLikeIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                           </div>
                        </div>
                        <Link href={`${download_location}`} passHref={true}>
                           <div className={`${popup.photoDownCont} my-2 mx-2 d-inline-flex `}>
                              <h6 className={`my-2 mx-2`}>Download</h6>
                              <div className={popup.downIconCont}>
                                 <svg xmlns="http://www.w3.org/2000/svg" className={`${popup.photoDownIcon} mx-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                 </svg>
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>
                  <Link href={`${download_location}`} passHref={true}>
                     <div className={"mx-auto d-flex justify-content-center my-5"}>
                        <Image src={imageSrc} height={imageHeight / 10} width={imageWidth / 10} alt={username} />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default PopUp;
