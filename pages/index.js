import Photos from "../components/Photos.js";
import React, { useEffect, useState } from "react";

// export const getStaticProps = async () => {
//    const API_KEY = "K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E";
//    const URL = `https://api.unsplash.com/photos/?per_page=15&client_id=${API_KEY}`;
//    const req = await fetch(URL);
//    const photos = await req.json();
//    // `https://api.unsplash.com/search/photos?page=5&per_page=30&query=${inputValue}&client_id=${API_KEY}`;
//    return {
//       props: {
//          photos,
//       },
//    };
// };

const Page = () => {
   const [photos, setPhotos] = useState([]);
   useEffect(() => {
      const API_KEY = "K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E";
      const URL = `https://api.unsplash.com/photos/?per_page=30&client_id=${API_KEY}`;

      fetch(URL)
         .then((response) => response.json())
         .then((data) => setPhotos(data));
   }, []);
   return (
      <>
         <Photos photos={photos} />
      </>
   );
};
export default Page;
