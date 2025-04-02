import styled from "styled-components";

export const FormStyled = styled.form`
    /*border: 1px solid #000;*/
    width: 100%;
    padding: 10px;
`;

export const TitleStyled = styled.h2`
    text-align: center;
`;

export const ContainerStyled = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
`;

export const InputStyled = styled.input`
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid#c4c4c4;
`;

export const MessageError = styled.p`
    margin-top: 5px;
    background: red;
    color: #fff;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
`;

export const ButtonStyled = styled.button`
    border-radius: 5px;
    text-align: center;
    color: white;
    background: #3a83d6;
    padding: 8px 20px;
    border: none;
    cursor: pointer;
`;