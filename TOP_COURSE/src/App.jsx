import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards"
import Filter from "./Components/Filter";
import { toast } from "react-toastify";
import { filterData, apiUrl } from "./data"
import Spinner from "./Components/Spinner"

import "./App.css"
const  App=()=> {
  // const [text, settext] = useState("")
  // function changehandler(event) {
  //   settext(() => event.target.value);
  //   console.log(text);
  // }
  //note - usestate component agar state variable ki value change hoti h tw vo ui ko rerender karta h

  //jb app component(jis b component me useeffect likj=h re ho) render hochuka hoga tab useeffect hook execute hona chalu hogaa it can handle several side effects dom updation api calling
  // -----------------------------------------------------
  // for useEffect Case 1 => Run on every Render
  // jab bhi page render hoga useeffect wala hook chalega

  // useEffect(()=>{
  //   console.log("UI is rendering");
  // })
// ---------------------------------------------------------
  // for case 2=> First time render. This hook runs only on first time when the page is rendered. Here we use dependency array.
  // -------------------------------------------------------
  // useEffect(()=>{
  //   console.log("render only once");
  // },[])
// -----------------------------------------------
  // case 3=> on every render on particular dependencies whenever change occur in them..
  // basically jb b text change hoga tb effect run hoga

  // useEffect(()=>{
  //   console.log("text is changed");
  // },[text])

  // case 4 => To handle unmounting of a component (Unmounting is when a React component is removed from the DOM).
  //basically whenever you want some side effects after rendering your current component then you need useEffect hook now what is side effect component ke normal flow of  execution ke aalawa koi or b task krana chahte ho us task ko naam h side effect and or us side effect ko handle karne ka tareeka h useeffect 

  // useEffect(() => {
  //   //add event listener
  //   console.log("listender added");

  //   //Note once the listener is added it first executes the return statement then add another listener.
  //   return()=>{
  //     console.log("listener removed");
  //in return section code will run for cleaning 
  //   }
  // },[text])

  const [courses, setCourses] = useState(null)
  // To show loading icon while fetching data
  const [loading, setLoading] = useState(true)
  // To show filtered data of specific category.
  // filter me jis bhi button pe click krege uski category title ke through set hojayegi. 
  const [category,setCategory]=useState(filterData[0].title)

  async function FetchData() {
    setLoading(true)//loading image dikhao
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      // Now save all the data within the json file into another variable i.e courses.
      setCourses(output.data)

    } catch (error) {
      toast.error("something went wrong")
    }
    setLoading(false) //loading image hatao , data aa chuka hai.. 
  }
// Courses=["development","business","design","lifestyle"]
  useEffect(() => {
    FetchData();
  }, []);


  return (
    // <div className='App'>
    //   <input type="text" onChange={changehandler} />
    // </div>
    <div className="min-h-screen flex flex-col gap-4 bg-slate-400">
      <div>
        <Navbar />
      </div>

      <div >
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
         {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
      </div>

    </div>
  )
}

export default App
// kisi component pr side effect ka mtlb hota hai jb uske alawa  kar bakki par uska effect pde modifying the browser calling api
