import React from "react";
import Card from "./Card"
import { useState } from "react";
export default function Cards({courses , category}) {

    //The data within the api courses is in key value pairs. where object is courses. and kays are (business,design development ,....) theses are coursse category. Now  but we want only values (array of elements of the keys/object
    //get courses is a funtion that retur an array of all the values in api
    
    

    const allCourses = [];
 
    function getCourses() {
        if(category==="All"){
        // Agar category all hai toh sara data show hoga 
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
        //specific category ka data show hoga
            return courses[category]
        }
        
    }
    // getCourses=[ {description : "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.", id : "MK101" image : {url: 'https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png', alt: 'Introduction to Marketing'}  title : "Introduction to Marketing"},{},{},{}.......]

//Initiallty all the courses are unliked.
   
const [likedCourses,setlikedCourses]=useState([]);

    return (
        <div className="flex flex-wrap justify-center gap-7 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}/>
                ))
            }
        </div>

    )
}