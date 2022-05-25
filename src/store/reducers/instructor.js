//import { FETCH_INSTRUCTOR } from "../actions/actionTypes";
import * as at from "../actions/actionTypes";

const initialState = {
  courses: [],
};

const instructor = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCH_INSTRUCTOR:
      return action.payload;
    case at.EDIT_INSTRUCTOR:
      return state.map(instructor => {
        return (
          instructor.id===action.payload.id ? action.payload : instructor
        );
      });
    default:
      return state;
  }
};

export default instructor;