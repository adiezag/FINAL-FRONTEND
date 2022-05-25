import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  //let deleteInstructor = props;
  if (!props.allInstructors.length) {
    // Editing AllInstructorsView to add button
    return (
    <div>
      <p>There are no instructors.</p>
      <Link to={`/newinstructor`}>
        <button class="button">Add New Instructor</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
            <Link class ="c1" to={`/instructor/${instructor.id}`}>
              <h4>{name}</h4>
            </Link>
          <h6>{instructor.department}</h6>
          <button onClick={() => props.deleteInstructor(instructor.id)}>Delete</button>
        </div>
        );

      })}
      <br></br>
      <Link to={`/newinstructor`}>
        <button class = "button1">Add New Instructor</button>
      </Link>
      <div>
        <br></br>
        <Link to={`/courses`}>
          <button class="button">All Courses</button>
        </Link>
        <br></br>
        <br></br>
        <Link to={`/`}>
          <button class="btn"><i class="fa fa-home"></i></button>
        </Link>
      </div>

    </div>
    
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;