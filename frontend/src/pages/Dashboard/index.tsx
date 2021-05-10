import BarChart from "Components/BarChart";
import DataTable from "Components/DataTable";
import DonutChart from "Components/DonutChart";

const Dashboard = () => {

    return (
        <div className="container">
            <h1 className="text-primary py-3">Dashboard de Vendas</h1>
            <div className="row px-3">
                <div className="col-sm-6">
                    <h5 className="text-center text-secundary">Taxa de sucesso(x)</h5>
                    <BarChart />
                </div>
                <div className="col-sm-6">
                    <h5 className="text-center text-secundary">Participação nas vendas</h5>
                    <DonutChart />
                </div>
            </div>
            <div className="py-3">
                <h2 className="text-primary">Todas Vendas</h2>
            </div>
            <DataTable />
        </div>
    )
}
export default Dashboard;