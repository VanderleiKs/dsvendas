import axios from "axios";
import Pagination from "Components/Pagination";
import { useState, useEffect } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
    const [activePage, setActivePage] = useState(0);
    const [tableData, setTableData] = useState<SalePage>({
        content:[], empty:true,last:false,number:0,numberOfElements:0,size:0,first:true,totalElements:0,totalPages:0});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}`)
            .then(response => setTableData(response.data))
    }, [activePage]);

    const activeChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
        <Pagination page={tableData} onChange={activeChange} />
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
        </>
    );
}
export default DataTable;