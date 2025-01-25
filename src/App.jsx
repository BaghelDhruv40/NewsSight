import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

export default function App() {
  const [category,setCategory]=useState("general")
  return (<>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}
