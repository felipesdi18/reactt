import styled from 'styled-components';

export const Container = styled.div`

font-family: poppins;

height: 100vh;
width: 100vw;

display: flex;
justify-content: center;
align-items: center;

div {
    background: rgba(255, 255, 255, 0.56);
    border: 1px solid #C6C6C6;
    box-sizing: border-box;
    backdrop-filter: blur(4px);
    border-radius: 18px;
    width: 600px;

    padding: 77px 99px;
}

form {
    width: 100%;

    & > * {
        border: solid 0;
        width: 100%;
        border-radius: 18px;
        outline: none;
    }

    input + button {
        margin-top: 45px;
    }

    button {
        background-color: #4891FF;
        border-radius: 18px;
        font-weight: 700;
        color: white;
        padding: 17px 174px;
        font-family: poppins;
        font-size: 16px;

        &:hover {
            background: rgba(72,145,255, 0.7)
        }
    }

    label + input {
        margin-top: 8px;
    }

    input {
        margin-bottom: 24px;
        padding: 10px 15px;
    }
}

`;