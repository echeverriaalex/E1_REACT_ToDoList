import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #d8d8d8;
`;

const Wrapper = ({ children }) => {
    return(
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper;