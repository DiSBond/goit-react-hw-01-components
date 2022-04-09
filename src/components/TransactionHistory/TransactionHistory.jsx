import PropTypes from "prop-types";
import { Table } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
                
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))
                }
            </tbody>
        </Table>
    )
}

export default TransactionHistory

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}