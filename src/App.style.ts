import styled from "styled-components";

export const StyledLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const StyledDateHeader = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
`;

export const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    background-color: #121212;
    color: white;
    padding: 10px;
    width: 450px;
    font-size: 16px;
`;
