import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Signup() {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function sendNewUser(e) {
        e.preventDefault();
        if (newUser.password !== newUser.confirmPassword) {
            window.alert("Senha e Confirmar senha não podem ser diferentes!");
            setNewUser({ ...newUser, password: "", confirmPassword: "" });
            return;
        }
        const URL = "https://shortly-back-end.herokuapp.com/signup";
        const promise = axios.post(URL, newUser);
        promise.then(() => navigate("/signin"));
        promise.catch((error) => {
            if(error.response.status === 409){
                window.alert("Email já cadastrado!");
                setNewUser({...newUser, email: ""});
                return;
            }
            console.log(error.response.statusText, "-", error.response.status);
            window.alert("Erro no cadastro, tente novamente!");
        })
    }

    return (
        <>
            <Header />
            <Form onSubmit={sendNewUser}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={newUser.password}
                    onChange={(e) =>
                        setNewUser({ ...newUser, password: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={newUser.confirmPassword}
                    onChange={(e) =>
                        setNewUser({ ...newUser, confirmPassword: e.target.value })
                    }
                    required
                />
                <button type="submit">Criar Conta</button>
            </Form>
        </>
    );
}

const Form = styled.form``;