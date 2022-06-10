import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import UrlInfo from "./UrlInfo";

export default function Home() {
    const [userInfo, setUserInfo] = useState();
    const [url, setUrl] = useState("");
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    useEffect(() => {
        if (!token) {
            navigate("/ranking");
            return;
        }

        getUserInfo();
    }, []);

    function getUserInfo() {
        const URL = `https://shortly-back-end.herokuapp.com/users/${user.id}`;
        const promise = axios.get(URL, config);
        promise.then((response) => {
            setUserInfo(response.data);
        });
        promise.catch((error) => {
            console.log(
                error.response.status,
                " - ",
                error.response.statusText
            );
            window.alert("Um erro aconteceu, tente novamente!");
        });
    }

    function shortenUrl(e) {
        e.preventDefault();
        const URL = "https://shortly-back-end.herokuapp.com/urls/shorten";
        const body = { url };
        const promise = axios.post(URL, body, config);
        promise.then((response) => {
            getUserInfo();
            setUrl("");
        });
        promise.catch((error) => {
            console.log(
                error.response.status,
                " - ",
                error.response.statusText
            );
            window.alert("Um erro aconteceu, tente novamente");
        });
    }

    return (
        <>
            <Header />
            <Main>
                <form onSubmit={shortenUrl}>
                    <input
                        type="url"
                        placeholder="Links que cabem no bolso"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <button type="submit">Encurtar link</button>
                </form>
                <section>
                    {userInfo ? (
                        userInfo.shortenedUrls.map((info) => {
                            return (
                                <UrlInfo info={info} config={config} />       
                            );
                        })
                    ) : (
                        <></>
                    )}
                </section>
            </Main>
        </>
    );
}

const Main = styled.main`
    form {
        flex-direction: row;
        justify-content: space-between;
    }

    form button,
    form input {
        margin: 0px;
    }

    section > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 42px;
    }

    section div div:first-child {
        width: 90%;
        min-height: 60px;
        background-color: var(--light-green);
        color: #ffffff;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        font-size: 18px;
        padding: 21px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    section div div:first-child p:first-child{
        max-width: 200px;
        word-break: break-all;
    }

    section div div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;

    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;

    }
`;
