

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <body>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Final Project</h1>
    
      <div>
        <Link to={'/instructors'} > 
          <button class="button"> All Instructors </button> 
        </Link>
        <br></br>
        <br></br>
        <Link to={'/courses'} > 
          <button class= "button">All Courses </button>
        </Link>

      
      </div>
    
    </body>
  );    
}




export default HomePageView;
