import styled from "@emotion/styled"

export const Profile = styled.div`
    align-items: center;   
    width: 200px; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    border-radius: 5px;

    text-align: center;
    

        box-shadow: 0px 8px 18px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 8px 18px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 8px 18px 0px rgba(0,0,0,0.75);
`;

export const Description = styled.div`
    width: 200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
`;

export const Avatar = styled.img`
    width: 150px;
    border-radius: 50%;
`;

export const Stats = styled.ul`
    list-style: none;  
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    margin: 0;
    background-color: #a3a3a3;
    

    li {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-right: 1px #6b6b6b solid;
        text-align: center;
        width: 33%;

    span {
        font-size: 12px;    
    }
        
        span:last-child {
            margin-top: 3px;
            font-weight: 700;
            
        }
    }

    li:last-child {
       border-right: none;
    }
`;

export const Name = styled.p`
 font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;  
`;

export const Location = styled.p`
  color: grey;  
`; 