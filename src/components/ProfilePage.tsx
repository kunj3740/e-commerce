"use client"
import { isAuthenticated } from "./productFinalLook/ProductFinalCard";
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface User {
  id : string;
  email : string;
  phoneno ?: string;
  username ?: string;
  address?: string;   
  pincode?: number;   
  state?: string;     
  city?: string;      
  country?: string;
}
const ProfilePage = () => {
  const [userData, setUserData] = useState<User>({
    id : "",
    email : "",
    phoneno : "",
    username : "",
    address : "",   
    pincode: 0,   
    state: "",     
    city: "",      
    country: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await isAuthenticated();
        if (!response || response.status !== 200) {
          return;
        }
        const userId = response.data.user.userId;
        console.log(userId)
        const res = await axios.get(`/api/user/Auth/getPersonalInfo/[userId]/?userId=${userId}`);

        setUserData(res.data.user);
      } catch (error) {
        console.error('Error while fetching user', error);
      }
    };
    getUserData();
  }, []);


  const updateAddressHandler =async () => {
      try {
        console.log(userData.id)
        const response = await axios.post(`/api/user/Auth/updateuser/[userId]/?userId=${userData.id}` , userData );
      } catch (error) {
        console.error('Error while fetching user', error);
      }
  };
  

  return (
    <div>
      <input type="text" value={userData?.phoneno} 
        onChange={(e) => {
          setUserData({
              ...userData,
              phoneno : e.target.value
          })
      }}
      />
      <button onClick={updateAddressHandler}>
        Update Address
      </button>
    </div>
  );
}

export default ProfilePage;

