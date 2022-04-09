import styled from "@emotion/styled"

export const Table = styled.table`
    border: 1px solid;
    text-align: center;
    width: 800px;
    margin-left: 100px;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;

    margin-top: 30px;
    margin-bottom: 50px;

    th, td {
        border: 1px solid;
    }

    th {
        height: 50px;
    }

    tbody {
        tr {
        background: #f6f6f6;
    }

        tr:nth-of-type(odd) {
            background: #e9e9e9
        }

        td {
            height: 20px;
        }
    }

    thead {
        background-color: #7878ee;
    }
       
`;