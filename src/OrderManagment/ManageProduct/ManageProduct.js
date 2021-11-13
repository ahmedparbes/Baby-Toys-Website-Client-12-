import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageProduct = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://calm-shelf-61615.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, []);

    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://calm-shelf-61615.herokuapp.com/services/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        alert('Order cancel successfully')
                        const remain = datas.filter(o => o._id !== id)
                        setDatas(remain);
                    }

                })
        }
    }
    return (
        <div>
            {
                datas.map(o => <Container>
                    <div className="table">
                        <table
                            key={o._id}
                            className="font" id="customers" >
                            <tr>

                                <th>Product Name</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>{o.name}</td>
                                <td><button onClick={() => cancelOrder(o._id)}><i style={{ color: 'red' }} className="fas fa-trash-alt"> Remove Product</i></button></td>
                            </tr>

                        </table>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default ManageProduct;