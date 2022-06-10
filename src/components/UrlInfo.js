import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export default function UrlInfo({ info, config }) {
    function openUrl(shortUrl) {
        const URL = `http://localhost:4000/urls/open/${shortUrl}`;
        const promise = axios.get(URL);
        promise.catch((error) => {
            console.log(
                error.response.status,
                " - ",
                error.response.statusText
            );
            window.alert("Um erro aconteceu, tente novamente!");
        });
    }

    function deleteUrl(id) {
        if (!window.confirm("Tem certeza que deseja deletar a url?")) {
            return;
        }
        const URL = `http://localhost:4000/urls/${id}`;
        const promise = axios.delete(URL, config);
        promise.then(() => {
            window.alert("URL deletada!");
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
    return (
        <Div>
            <div onClick={() => openUrl(info.shortUrl)}>
                <p>{info.url}</p>
                <p>{info.shortUrl}</p>
                <p>Quantidade de visitantes: {info.visitCount}</p>
            </div>
            <div onClick={() => deleteUrl(info.id)}>
                <FaTrashAlt />
            </div>
        </Div>
    );
}

const Div = styled.div`
    svg {
        color: #ea4f4f;
        font-size: 38px;
    }
`;
