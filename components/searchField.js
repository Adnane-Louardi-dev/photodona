import searchField from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

const SearchField = () => {
   const searchInput = useRef(null);
   const [query, setQuery] = useState("");

   const searchInputChange = () => {
      setQuery(searchInput.current.value);
   };

   return (
      <div className={searchField.subNavbar + " row d-flex justify-content-center mb-5"}>
         <div className={searchField.textArea + " col-12 col-sm-10 col-md-7 my-5 px-4  "}>
            <div className="mt-3">
               <h1 className={searchField.textAreaTitle + " my-2"}>Photodona</h1>
               <span className="my-2">
                  The internet’s source of images.
                  <br /> Powered by Adnane Louardi.
               </span>
            </div>
            <div className={searchField.textAreaInput + " w-100 my-5 pl-2 justify-content-between"}>
               <input type="text" placeholder="search for a picture" className={searchField.textAreaInput + " w-100 px-3 "} ref={searchInput} onChange={searchInputChange} />
               <Link href={{ pathname: "/search", query: { searchword: query } }} passHref={true}>
                  <button type="submit" className={searchField.searchBtn}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="my-1" style={{ color: "black" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SearchField;
