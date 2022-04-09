import styled from "@emotion/styled"

export const List = styled.ul`
  list-style: none;
  display: flex;  
  flex-direction: column;


  li:not(:first-of-type) {
      margin-top: 10px;
  }
`;

export const Container = styled.div`
  display: flex;  
  justify-content: center;

  span {
      width: 30px;
      height: 30px;
      margin-top: 10px;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px black solid;

      background-color: ${props => {
    if (props.isOnline) {
      return "green"
    } else {
      return "red"
    }
  }};
  }
`;