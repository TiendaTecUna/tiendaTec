import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProduct.css'; 

function SalesView() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetchSales();
    }, []);

    const fetchSales = async () => {
        try {
            const response = await axios.get('/ventas');
            setSales(response.data);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    return (
        <div className="table-container">
    <table className="sales-table">
        <div className='container'>
            <h1>Lista de Ventas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>IdVenta</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.idVenta}>
                            <td>{sale.fecha}</td>
                            <td>{sale.idVenta}</td>
                            <td>${sale.valor}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total:</td>
                        <td>${sales.reduce((total, sale) => total + sale.valor, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        
    </table>
</div>
    );
}

export default SalesView;
