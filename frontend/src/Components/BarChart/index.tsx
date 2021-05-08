import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {
    const[chartData, setChartData] = useState<ChartData>({labels: {categories: []}, series:[]});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/successbyseller`)
        .then(response => {
            const data = response.data as SaleSuccess[];
            const dataSuccess = data.map(x => round(((x.deals / x.visited) * 100), 1));
            const dataCategory = data.map(x => x.sellerName);
            setChartData({labels:{categories: dataCategory}, series:[{name: "% Success", data: dataSuccess}]});
        })
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,       
            }
        },
        colors: ['#03c8af']   
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels}}
            series={chartData.series}
            type='bar'
            height='240'
        />
    )
}
export default BarChart;