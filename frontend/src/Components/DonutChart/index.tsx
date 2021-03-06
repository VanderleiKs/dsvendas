import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() =>{
    axios.get(`${BASE_URL}/sales/amountbyseller`)
        .then((response) => {
            const data = response.data as SaleSum[];
            var dataLabels = data.map(x => x.sellerName);
            var dataSeries = data.map(x => x.sum);

            setChartData({ labels: dataLabels, series: dataSeries })
        });
    },[]);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels}} 
            series={chartData.series} type='donut' height='240'
        />
    )
}
export default DonutChart;