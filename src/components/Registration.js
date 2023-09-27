import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import shortid from 'shortid';
import { useDispatch } from "react-redux";
import { userRegister } from '../redux/allAction';


const Registration = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [inputField, setInputFelid] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const inputHandle = (e) => {
        setInputFelid({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = () => {
        Object.assign(inputField, { id: shortid.generate() })
        dispatch(userRegister(inputField));
        history('/');
    }
    return (
        <div className='container'>
            <div className='row login'>
                <h3 className='heading' style={{ marginTop: '20px' }}> Add Registration</h3>

                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <form autoComplete='off' action='/login-user' method='post'>
                        <div className='mb-3'>
                            <label className='form-label' >User Name</label>
                            <input type="text" className='form-control' name='name' value={inputField.name} onChange={inputHandle} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' >Email</label>
                            <input type="text" className='form-control' name='email' value={inputField.email} onChange={inputHandle} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' >Phone</label>
                            <input type="text" className='form-control' name='phone' value={inputField.phone} onChange={inputHandle} />
                        </div>
                        {/* <div className='mb-3'>
                        <label className='form-label' >User Name</label>
                        <input type="text" className='form-control' name='name' value={inputField.name} onChange={inputHandle}/>
                    </div> */}
                        <div className='mb-3'>
                            <button type='button' className='btn btn-primary' onClick={submitButton}>Add User</button>&nbsp;
                            <Link to="/home" ><button type='button' id='addUserBtn' className='btn btn-success'>Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Registration