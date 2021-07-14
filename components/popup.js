import Image from "next/image";
const PopUp = ({ imageSrc, title, imageAlt, imageHeight, imageWidth }) => {
   return (
      <>
         <div className={"mx-auto text-center bg-warning"}>
            <h1>{title} </h1>
         </div>
      </>
   );
};

export default PopUp;
