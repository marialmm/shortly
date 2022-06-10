import styled from "styled-components"

export default function Logout({setLogout}){
    return(
        <Section>
            <div>
                <p>Deseja sair?</p>
                <div className="buttons">
                    <button>Sim</button>
                    <button onClick={setLogout(false)}>Não</button>
                </div>
            </div>
        </Section>
    )
};

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    top: 0;
    left: 0;

    div {
        margin: auto;
    }
`;