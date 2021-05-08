import axios from 'axios';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    axios.get(`${BASE_URL}/sales/amountbyseller`)
        .then((response) => {
            const data = response.data as SaleSum[];
            var dataLabels = data.map(x => x.sellerName);
            var dataSeries = data.map(x => x.sum);

            setChartData({ labels: dataLabels, series: dataSeries })
        });



    /*const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: chart
    }
    */

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels}} series={chartData.series} type='donut' height='240'
        />
    )
}
export default DonutChart;