import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link class = "c1" to={`/course/${course.id}`}>
            <h2>{title}</h2>
          </Link>
          <button class="button1"onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <br></br>
      <br></br>
      <Link to={`/newcourse`}>
        <button class="button1">Add New Course</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Link to={`/instructors`}>
            <button class="button">All Instructors</button>
      </Link>
      <br></br>
      <br></br>

        <br></br>
      <Link to={`/`}>
        <button class="btn"><i class="fa fa-home"></i></button>
      </Link>
    </div>
    
  );
};


export default AllCoursesView;