import styled from 'styled-components';


export const Container = styled.div`

    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    main {
        font-family: poppins;
        background: rgba(255, 255, 255, 0.56);
        backdrop-filter: blur(4px);
        
        border-radius: 18px;
        max-height: 784px;
        padding: 100px 97px;
        width: 838px;

        overflow-y:auto;

        & > div + div {
            margin-top: 24px;
        }
        
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
            overflow: hidden;
            border-radius:50%;
        }

        ::-webkit-scrollbar-thumb {
            background: #999;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #777; 
        }
    }

`;

export const PlayerPanel = styled.div`
    background: rgba(255, 255, 255, 0.13);
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    border-radius: 18px;
    display:flex;
    padding: 22px 27px;
    align-items: center;

    img {
        border-radius:50%;
        height:75px;
        width:75px;
    }


    div {
        display: flex;
        flex-direction: column;
        flex:1;
        margin: 0px 16px;
    }

    svg{
        color: #448EFE;
        size: 34px;
        transition: 500ms;

        &:hover {
            color: white;
        }
    }
`;