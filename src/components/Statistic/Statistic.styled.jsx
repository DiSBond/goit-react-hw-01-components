import styled from "@emotion/styled"

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
`;

function randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

export const StatisticItem = styled.li`
    background-color: #${randomColor};
`; 

export const List = styled.ul`
    display: flex;
    list-style: none; 
    margin: 0;
    justify-content: center;
    padding: 0;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const SecondTaskBox = styled.div`
    margin-top: 50px;  
    margin-bottom: 50px;
    text-align: center;
`;