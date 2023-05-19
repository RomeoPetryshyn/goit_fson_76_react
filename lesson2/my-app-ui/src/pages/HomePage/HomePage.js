import styled, { css } from 'styled-components';

function HomePage() {
    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 1em;
        padding: 0.25em 1em;

        ${props => props.$primary && css`
            background: palevioletred;
            color: white;
  `}
    `;

    return (
        <>
            <div>I am Home page and I am here!!!</div>

            <Button>I am button</Button>


            <style jsx>{`
                div {
                    color: red;
                    font-size: 50px;
                }
            `}</style>
        </>
        
    )
}

export default HomePage;