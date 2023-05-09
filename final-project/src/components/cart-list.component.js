
import { Table, Form } from 'react-bootstrap';

const CartList = () => {
    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Products List</h4>

                <ul className="list-group">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Khan giay</td>
                                <td>10000 USD</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Khan giay</td>
                                <td>10000 USD</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Khan giay</td>
                                <td>10000 USD</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Khan giay</td>
                                <td>10000 USD</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Khan giay</td>
                                <td>10000 USD</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Sum of Amount</td>
                                <td>50000 USD</td>
                            </tr>
                        </tbody>
                    </Table>
                </ul>
                <div className="payment-type">
                    <Form>
                        <div key={`inline-1`} className="mb-3">
                            <Form.Check
                                label="Thanh Toán bằng tiền mặt"
                                name="group1"
                                type="1"
                                id={`inline-1`}
                            />
                            <Form.Check
                                label="Thanh Toán bằng thẻ"
                                name="group1"
                                type="2"
                                id={`inline-2`}
                            />
                            <Form.Check
                                label="Thanh toán qua ví shopee"
                                name="group1"
                                type="3"
                                id={`inline-3`}
                            />
                        </div>
                    </Form>

                </div>
                <button type="button" className="btn btn-primary" >
                    Payment
                </button >

            </div>
        </div>
    )
}


export default CartList;