import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

export default function App() {
  const [category,setCategory]=useState("general");
  const [country,setCountry]=useState("us");
  return (<>
    <Navbar setCategory={setCategory} setCountry={setCountry}/>
    <NewsBoard category={category} country={country}/>
    </>
  )
}
