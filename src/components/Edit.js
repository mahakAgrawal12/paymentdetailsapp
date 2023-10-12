import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username:"",
    email:"",
    number: "",
    securitycode:"",
    rupess:"",
    city:"",
    fathername :""
  });
  const { name, username, email, number, securitycode,rupess,city,fathername} = user;
  const onInputChange = (e) => {
    //console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();

    //await axios.put(`http://localhost:52587/api/Users/${id}`,user);
    await axios.put(`http://localhost:3003/PaymentDetails/${id}`, user);
    navigate("/");
  };
  const loadUser = async () => {
    //const result = await axios.get(`http://localhost:52587/api/Users/${id}`)
    const result = await axios.get(`http://localhost:3003/PaymentDetails/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="name"
              value={name}
              maxLength={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Card Number"
              pattern="\d*"
              maxLength={16}
              name="number"
              value={number}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your security code"
              name="securitycode"
              value={securitycode}
              pattern="\d*" 
              maxLength={3}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Rupess"
              name="rupess"
              value={rupess}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your city"
              name="city"
              value={city}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Father Name"
              name="fathername"
              value={fathername}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
