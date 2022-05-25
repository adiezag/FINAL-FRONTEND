import { Link } from "react-router-dom";


const NewCourseView = (props) => {
  const {handleChange, handleSubmit } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Course
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label class = "c1" style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label class = "c1" style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
          <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label class = "c1" style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
          <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button class="button1" type="submit">
            Submit
          </button>
          <br/>
          <br/>
          <Link to={'/courses'} > 
            <button class="button1"> Cancel </button> 
          </Link>
          <br/>
          <br/>
        </form>
        </div>
        <Link to={`/`}>
          <button class="btn"><i class="fa fa-home"></i></button>
        </Link>
      </div>
    
  )
}

export default NewCourseView;