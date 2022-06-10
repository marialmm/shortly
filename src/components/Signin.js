import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function signin(e) {
        e.preventDefault();
        const URL = "http://localhost:4000/signin";
        const promise = axios.post(URL, user);
        promise.then((response) => {
            const token = response.data.token;
            const user = JSON.stringify(response.data.user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            navigate("/");
        });
        promise.catch((error) => {
            if(error.response.status === 401){
                window.alert("Email ou senha inválidos!");
                return;
            }
            console.log(error.response.status, " - ", error.response.statusText);
            window.alert("Um erro aconteceu, tente novamente!");
        });
    }

    return (
        <Form onSubmit={signin}>
            <input
                type="email"
                placeholder="E-mail"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
            />
            <button type="submit">Entrar</button>
        </Form>
    );
}

const Form = styled.form``;
