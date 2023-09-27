import React, { useEffect, useState } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { updateUser } from '../redux/allAction';

const EditUser = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
   const navigate = useNavigate ();
    const user = location.state.user;
    

    useEffect(()=>{
        // if(location.state.user.name == ""){
        const {name, email, phone} = location.state.user;
        setInputFelid (
            {
                name : name ,
                email : email ,
                phone : phone
            }
        )
      // }
        dispatch(updateUser(user));
    },[])

  
    const [inputField, setInputFelid]= useState ({
        name : "",
        email :"",
        phone : ""
    })

    const inputHandle = (e) =>{
setInputFelid ({...inputField,[e.target.name]:e.target.value})
    }

    const submitButton = () =>{
        let newData = Object.assign (location.state.user, inputField);
        navigate('/');
    }
  return (
    <div className='container'>
        <div className='row login'>
            <h3 className='heading' style={{marginTop : '20px'}}> Edit Registration</h3>

            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <form autoComplete='off' action='/login-user' method='post'>
                    <div className='mb-3'>
                        <label className='form-label' >User Name</label>
                        <input type="text" className='form-control' name='name' value={inputField.name} onChange={inputHandle}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' >Email</label>
                        <input type="text" className='form-control' name='email' value={inputField.email}onChange={inputHandle}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' >Phone</label>
                        <input type="text" className='form-control' name='phone' value={inputField.phone} onChange={inputHandle}/>
                    </div>
                   
                    <div className='mb-3'>
                       <button type='button' className='btn btn-primary' onClick={submitButton}>Edit User</button>&nbsp;
                       <Link to="/home" ><button type='button' id='addUserBtn' className='btn btn-success'>Back</button></Link>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default EditUser