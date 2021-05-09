import axios from "axios";
import { useState, useEffect } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
    const [tableData, setTableData] = useState<SalePage>();

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => setTableData(response.data))
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.content?.map(x => (
                        <tr key={x.id}>
                            <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                            <td>{x.seller.name}</td>
                            <td>{x.visited}</td>
                            <td>{x.deals}</td>
                            <td>{x.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default DataTable;