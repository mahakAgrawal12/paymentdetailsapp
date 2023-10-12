import { useNavigate } from "react-router-dom";
import { useState} from  "react";
import axios, { Axios } from "axios";

const AddUser = () => {
  
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
  const navigate = useNavigate();
  const { name, username, email, number, securitycode,rupess,city,fathername } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e =>{
      e.preventDefault();
       await axios.post("http://localhost:3003/PaymentDetails",user);
      navigate("/");
    
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Payment User</h2>
        <form onSubmit={e=> onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="name"
              value={name}
              maxLength={30}
              onChange={(e) => onInputChange(e)}
            
              required
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
              required
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
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter your Card Number"
              name="number"
              pattern="\d*"
              maxLength={16}
              value={number}
              
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Security Code"
              name="securitycode"
              pattern="\d*"
              maxLength={3}
              
              value={securitycode}
              onChange={(e) => onInputChange(e)}
              required
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
              required
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
              required
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
              required
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;





