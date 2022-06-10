import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset Css */
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root{
        --dark-green: #5D9040;
        --light-green: #80CC74;
        --grey: #9C9C9C;
    }

    *{
        box-sizing: border-box;
    }

    body {
        max-width: 1020px;
        margin: 0 auto;
    }

    a{
        text-decoration: none;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 130px 0 60px;
    }

    input{
        width: 100%;
        max-width: 769px;
        height: 60px;
        margin-bottom: 25px;
        padding: 21px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        font-size: 14px;
    }

    button{
        width: 182px;
        height: 60px;
        background-color: var(--dark-green);
        color: #ffffff;
        font-size: 14px;
        border: none;
        border-radius: 12px;
        margin-top: 36px;
    }
`;

export default GlobalStyle;
