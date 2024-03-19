import React from 'react'

export default function Filter({ filterData, category, setCategory }) {
    //jaise hi category button pe click kiya datatitle category me pass hogya
    function filterhandler(title){
        setCategory(title)
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center gap-y-4">
            {filterData.map((data) => {
                return (
                    <button className={`text-lg ${category===data.title ? "bg-opacity-60 border-white" :"bg-opacity-40 transparent"} px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`} key={data.id} onClick={()=>filterhandler(data.title)}>{data.title}</button>
                )
            })}
        </div>
    )
}