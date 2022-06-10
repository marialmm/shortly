import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/ranking");
        }
    },[])

    return(
        <h1>Home</h1>
    )
}