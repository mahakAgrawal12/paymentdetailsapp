import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username:"",
    email:"",
    cardnumber: "",
    securitycode:"",
    rupess:"",
    city:"",
    fathername :""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    
    const result = await axios.get(`http://localhost:3003/PaymentDetails/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id :{id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">username: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">number: {user.number}</li>
        <li className="list-group-item">securitycode: {user.securitycode}</li>
        <li className="list-group-item">fathername: {user.fathername}</li>
        <li className="list-group-item">rupess: {user.rupess}</li>
        <li className="list-group-item">city: {user.city}</li>
       
        
      </ul>
    </div>
  );
};
export default DetailsUser;
