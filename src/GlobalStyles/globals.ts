import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    //RESET
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
    button, a, input, select {
    -webkit-tap-highlight-color: transparent;
  }


    :root {
        --big-title: clamp(2.5rem, 2.0117rem + 2.4414vw, 4.209rem);
        --medium-title: clamp(2rem, 2.0117rem + 2.4414vw, 3.157rem);
        --small-title: clamp(1.7rem, 0.9354rem + 3.8229vw, 2.369rem);

        --big-sub-title: clamp(1.3rem, 0.9593rem + 1.7036vw, 1.777rem);
        --medium-sub-title: clamp(0.9rem, 0.5907rem + 1.5464vw, 1.333rem);
        --small-sub-title: 1.000rem;
        
        --regular-text: 1.000rem;

        --primary-font-family: 'Roboto Condensed', sans-serif;
        --secondary-font-family: 'Roboto', sans-serif;

        --default-padding: clamp(0.8rem, -2.8571rem + 18.2857vw, 2rem);
    }
    html {
        height: 100%;
    }
    body {
        font-family: var(--primary-font-family);
        font-size: var(--regular-text);
        color: ${({ theme }) => theme.colors.black};
    }
    `
