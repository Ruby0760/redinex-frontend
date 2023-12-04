/* eslint-disable */

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const emailRegex = new RegExp(/\S+@\S+\.\S+/);

    const navigate = useNavigate();

    const [dataItem, setDataItem] = useState({
        email: '',
        password: ''
    });
    const onChange = (e) => {
        setDataItem({ ...dataItem, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        console.log(dataItem.email);
        if(dataItem.email=="" || dataItem.email==undefined){
            alert('Please enter email')
            return
        }
        if(!emailRegex.test(dataItem.email)){
            alert('Please enter vaild email')
            return
        }
        if(dataItem.password=="" || dataItem.password==undefined){
            alert('Please enter password')
            return
        }

        if(dataItem.email == "admin@gmail.com" && dataItem.password == "1234"){
            console.log("Succesfully login");
            navigate("/Dashboard")
        }else{
            alert("Incorrect email, Password")
        }

    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-primary text-white" style={{ height: '60vh', marginTop: '100px', overflow: 'hidden' }}>
                        <div className="card-body ">

                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-center">LOGIN</h2>
                                <p className="text-white-80 text-center">Please enter your username and password!</p>

                                <div className="form-outline form-white mb-4">
                                    <label className="text-left">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control form-control-sm" 
                                        value={dataItem.email}
                                        onChange={(e) => onChange(e)} 
                                    />
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <label className="text-left">Password</label>
                                    <input type="password" name="password" className="form-control form-control-sm" value={dataItem.password} onChange={onChange} />
                                </div>
                                <button className="btn btn-outline-light" style={{ marginLeft: '150px' }} type="submit" onClick={handleSubmit}>Login</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;