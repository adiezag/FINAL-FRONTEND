import { Link } from "react-router-dom";
const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
    
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
    
  );

};

export default CourseView;