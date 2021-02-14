import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
text-align:center;
position: absolute;
top: 0;
line-height: 40px;

a {
    text-decoration:none; 
    color: white;
    padding: 0px 10px;
    font-family: 'Poppins', sans-serif;
    transition: 200ms;
    
    &:hover{
        color: rgba(255,255,255,0.3);
    }
}

`;