import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    :root {
        --big-title: clamp(2rem, 2.0117rem + 2.4414vw, 4.209rem);
        --medium-title: 3.157rem;
        --small-title: 2.369rem;

        --big-sub-title: 1.777rem;
        --medium-sub-title: 1.333rem;
        --small-sub-title: 1.000rem;
        
        --regular-text: 1.000rem;

        --primary-font-family: 'Roboto Condensed', sans-serif;
        --secondary-font-family: 'Roboto', sans-serif;

        --default-padding: clamp(0.8rem, -2.8571rem + 18.2857vw, 2rem);
    }
    body {
        font-family: var(--primary-font-family);
    }
    `
