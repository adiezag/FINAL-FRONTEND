import { Link } from "react-router-dom";
const NewInstructorView = (props) => {
    const{handleChange, handleSubmit} = props;

    return(
        <div className="root">
            <div className="formContainer">
                <div className="formTitle">
                    <h2 style={{fontWight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                        New Instructor
                    </h2>
                </div>
                <form style={{textAlign: 'center'}} onSubmit={(e)=>handleSubmit(e)}>
                    <label class = "c1"style={{color:'#11153e', fontWeight: 'bold'}}>First name: </label>
                    <input type='text' name='firstname' onChange = {(e) => handleChange(e)} />
                    <br/>
                    <br/>

                    <label class = "c1" style={{color:'#11153e', fontWeight: 'bold'}}>Last name: </label>
                    <input type='text' name='lastname' onChange = {(e) => handleChange(e)} />
                    <br/>
                    <br/>

                    <label class = "c1" style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
                    <input type="text" name="department" onChange = {(e) => handleChange(e)} />
                    <br/>
                    <br/>

                    <button class="button1" type="submit">
                        Submit
                    </button>
                    <br></br>
                    <br></br>
                    <Link to={'/instructors'} > 
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

export default NewInstructorView;