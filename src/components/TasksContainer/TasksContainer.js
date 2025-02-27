import styled from "styled-components";

export const TasksContainerStyled = styled.div`
    width: 100%;
    overflow: auto;
    /*background: green;*/
    height: 300px;
`;

export const TaskContainerStyled = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    p{
        text-transform: capitalize;
    }

    border-bottom: 1px solid#c0c0c0;
`;

export const ButtonDeleteStyled = styled.button`
    border: none;
    background: red;
    color: white;
    padding: 8px 15px;
    border-radius: 8px;
    cursor: pointer;
`;


export const ButtonDeleteAllStyled = styled(ButtonDeleteStyled)`
    border: none;
    background: red;
    color: white;
    padding: 8px 15px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;

    
    position:relative;
    bottom: 0px;
`;