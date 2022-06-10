import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import trophy from "./../assets/images/trophy.png";
import Header from "./Header";

export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const URL = "https://shortly-back-end.herokuapp.com/ranking";
        const promise = axios.get(URL);
        promise.then((response) => setRanking(response.data));
        promise.catch((error) => {
            console.log(error.response.status);
            window.alert("Não foi possível obter o ranking, tente novamente!");
        });
    }, []);

    return (
        <>
            <Header />
            <Main>
                <section className="title">
                    <img src={trophy} alt="trophy" />
                    <h2>Ranking</h2>
                </section>
                <section className="ranking">
                    {ranking.map((user, i) => {
                        return (
                            <p>
                                <span>
                                    {i + 1}. {user.name}
                                </span>{" "}
                                - {user.linksCount} links - {user.visitCount}{" "}
                                visualizações
                            </p>
                        );
                    })}
                </section>
                {token ? <></> : <p>Crie sua conta para usar nosso serviço!</p>}
            </Main>
        </>
    );
}

const Main = styled.main`
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 75px;
    }

    h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        margin-left: 10px;
    }

    .ranking {
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;
        padding: 19px 40px;
        margin: 57px 0 82px;
    }

    .ranking p {
        font-size: 22px;
        line-height: 28px;
        font-weight: 400;
    }

    .ranking p span {
        font-weight: 500;
    }

    & > p {
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
    }
`;
