import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import { useGetAllTradesmenQuery, useGetTrademanByEmailQuery } from '../store/storeApi';
import {useNavigate} from "react-router-dom"
import axios from "axios";

const UserContext = createContext();
export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const {data: email} = useGetTrademanByEmailQuery()
  const [userInfo, setUserInfo] = useState({firstName: "",image: "", lastName: "", password: "", email: "", phoneNumber: null, category: "",})
  const [content, setContent] = useState([]);
  const [tradesManProfileId, setTradesManProfileId] = useState(null)
  const {data: tradesManProfiles} = useGetAllTradesmenQuery();
  const [tradesmanProfiles, setTradesmanProfiles] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null)
  const [tradesmanProfileDetails, setTradesmanProfileDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({firstName: "", lastName: "", password: "", email: "", phoneNumber: null, category: "",});
  const [tradesManProfile, setTradesManProfile] = useState({
    username:"",
    tradeType: "",
    location: "",
    phoneNumber: null,
    description: "",
  image:"",
    gigImage1:'',
    gigImage2:'',
    gigImage3:''
  })
const [isLogedUser,setLogedUser] = useState()
  // ----------------------------------------------------------------
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const [query,setQuery] = useState({});
  const navigate = useNavigate();

  const userLoginInfo = JSON.parse(localStorage.getItem("userLoginInfo"))
  // console.log(userLoginInfo, 'userinfo');
  useEffect(() => {
    const userInfos = JSON.parse(localStorage.getItem("userLoginInfo"));
    const logInUser  = JSON.parse(localStorage.getItem("tokenabc"));
    setUser(userInfos);
    setLogedUser(logInUser)
    // if (!userInfos) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  
  // console.log(user, "user1234");
  

  // ----------------------------------------------------------------


  const fetchTradesmanProfile = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/v1/tradesman/getProfile?email=${user?.email}`);
      setTradesManProfileId(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(tradesManProfileId, "1id details");
  
  useEffect(() => {
    if(user){
    fetchTradesmanProfile();
    }
    setTradesManProfileId(user?.id)
  }, [user]);
  // useEffect(() => {
  //   if(tradesManProfiles){
  //     setTradesmanProfiles(tradesManProfiles)
  //   }
  // }, [tradesManProfiles])
  // console.log(tradesmanProfiles, "tradesmanProfiles");
  ;
  useEffect(()=> {
    setTradesmanProfileDetails(tradesmanProfileDetails)
  }, [tradesmanProfileDetails])

  return (
    <UserContext.Provider value={{ content, userDetails, setUserDetails, setContent, userInfo, setUserInfo, tradesManProfile, setTradesManProfile, searchedLocation, setSearchedLocation,
    tradesmanProfiles, userLoginInfo, tradesmanProfileDetails, setTradesmanProfileDetails, tradesManProfileId, setTradesManProfileId,
    selectedChat,
    setSelectedChat,
    user,
    setUser,
    notification,
    setNotification,
    chats,
    setChats, query,setQuery,setTradesManProfile,tradesManProfile,isLogedUser,setLogedUser}}>
      {children}
    </UserContext.Provider>
  );
};
