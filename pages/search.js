import Photos from "../components/Photos";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// export const getStaticProps = async () => {
//    const API_KEY = "K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E";
//    const inputValue = "mobile";
//    const URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E`;
//    const req = await fetch(URL);
//    const photos = await req.json();
//    // `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${API_KEY}`;
//    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E
//    return {
//       props: {
//          photos,
//       },
//    };
// };
const Search = () => {
   const router = useRouter();
   const {
      query: { searchword },
   } = router;
   const [searchQuery, setSearchQuery] = useState([]);
   useEffect(() => {
      const API_KEY = "K83D7htjgyhEZilliweiQpbVCLsBNkKZWEcpSqioG4E";
      const URL = `https://api.unsplash.com/search/photos?page=1&query=${searchword}&client_id=${API_KEY}`;

      fetch(URL)
         .then((response) => response.json())
         .then((data) => setSearchQuery(data.results));
   }, [searchword]);
   return <Photos photos={searchQuery} />;
};
export default Search;
