import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { fetchInstructorThunk, editInstructorThunk } from '../../store/thunks';

class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            department: "",
            // imageUrl: null,
            instructorId: null,
            redirect: false,
            redirectId: null
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department
            // imageUrl: this.state.imageUrl
        };

        let newInstructor = await this.props.editInstructor(instructor);

        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            // imageUrl: this.state.imageUrl,
            redirect: true,
            redirectId: newInstructor.id

        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        // go to single instructor view of newly created instructor
        if(this.state.redirect) {
            return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
            <EditInstructorView
                instructor={this.props.instructor}
                editInstructor={this.props.editInstructor}  
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
        );

    }
}

// map state to props
const mapState = (state) => {
    return {
      instructor: state.instructor,
      allInstructors: state.allInstructors

    //   allCourses: state.allCourses,
  
    };
  };
  


const mapDispatch = (dispatch) => {
    return({
        fetchInstructorThunk: (id) => dispatch(fetchInstructorThunk(id)),
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    })
}

export default connect(mapState, mapDispatch)(EditInstructorContainer);