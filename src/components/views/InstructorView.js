import { Link } from "react-router-dom";
//import EditInstructorView from "./EditInstructorView"; 
//import Form from "../containers/Form";
//import React,{Component, useState} from 'react'

const InstructorView = (props) => {
  const {instructor, editCourse, allCourses} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      {/* <div>
        <button onClick={this.handleToggleClick}>{this.state.showlist? 'Edit instructor information':'Edit instructor information'}</button>
      {
          this.state.showlist? <Form changeUser={this.changeUser}/>:null
        }
      </div>   */}
      <div>
        <Link to={`/editinstructor/${instructor.id}`} >
          <button class="button1">Edit instructor information</button>
        </Link>
      </div>

      {/* <button onClick={() => editInstructor({instructorId: instructor.id})}>{this.instructorId}</button> */}
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div class="c1">Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})}>x</button>
            </div>
          );
        })}</div>
        <div class="c1">Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
          })
        }
        </div>
        
      </div>
      <div>
          <br></br>
          <br></br>

          <Link to={`/instructors`}>
            <button class="button">All Instructors</button>
          </Link>
          <br></br>
          <br></br>
          <Link to={`/courses`}>
            <button class="button">All Courses</button>
          </Link>
          <br></br>
          <Link to={`/`}>
            <button class="btn"><i class="fa fa-home"></i></button>
          </Link>
        </div>

      

  
    </div>
  );

};



export default InstructorView;