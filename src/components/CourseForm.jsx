import React, {useState} from 'react'

import useCourseStore from '../app/courseStore'

const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("")
    console.log("CourseForm Rendererd");

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("please add a course title");
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle
        })
        setCourseTitle("")

    }


  return (
    <div className="form-container">
        <input 
        value={courseTitle}
        onChange={(e) => {
            setCourseTitle(e.target.value)
        }}
        className="form-input" />
        <button 
        onClick={() => {
            handleCourseSubmit();
        }}
        className="form-submit-btn">
            Add Course
        </button>
    </div>
  )
}

export default CourseForm