import styled from "styled-components";
import {Link} from "react-router-dom";

import logo from "./../assets/images/logo.png";


export default function Header() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    function signout(){
        console.log("saindo");
    }

    return (
        <Container>
            {token ? (
                <>
                    <div className="signedIn">
                        <p>Seja bem-vindo(a), {user.name}!</p>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/ranking">Ranking</Link>
                            <p onClick={signout}>Sair</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="right">
                    <Link to="/signin">Entrar</Link>
                    <Link to="/signup">Cadastrar</Link>
                </div>
            )}
            <div>
                <h1>Shortly</h1>
                <img src={logo} alt="Shortly" />
            </div>
        </Container>
    );
}

const Container = styled.header`
    height: 195px;

    div.right,
    div.signedIn {
        display: flex;
        justify-content: flex-end;
        height: 80px;
        align-items: flex-end;
    }

    div.signedIn{
        justify-content: space-between;
    }

    div.signedIn div {
        display: flex;
        justify-content: space-between;
        width: 180px;
    }

    div.right a {
        margin-left: 22px;
    }

    div.right a:first-child, div.signedIn > p {
        color: var(--dark-green);
    }

    div.right a:last-child, div.signedIn div a {
        color: var(--grey);
    }

    div.signedIn div p:last-child{
        text-decoration: underline;
        color: var(--grey);
        cursor: pointer;
    }

    & > div:last-child {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 102px;
    }

    h1 {
        font-size: 64px;
        margin-right: 8px;
    }
`;
