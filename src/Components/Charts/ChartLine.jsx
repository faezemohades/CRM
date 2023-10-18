import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import useFetchChart from '../../hooks/useFetchChart';
 import { getChartLine } from '../../store/chartLineSlice';
import Spinner from '../Spinner';

//chart 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        title: {
            display: true,
            text: 'گزارش ترافیک',
            color: "#A8A196",
            font: {
                size:16
            }
         },

    },
    scales: {
        x: {
            ticks: {
                color: "#A8A196",
                 
            },
            grid: {
                color: "rgba(100,100,100,0.2)"
            }
        },
        y: {
            ticks: {
                color: "#A8A196"

            },
            grid: {
                color: "rgba(100,100,100,0.2)"
            }
        }

    }

};

function ChartLine() {

    const { loading } =  useFetchChart(getChartLine);

    const chart = useSelector((state) => {
        return state.chartLine;
    })

    const data = {
        labels: chart?.chartLine?.map((x)=>x.date),
        datasets: [
            {
                label: 'گزارش ترافیک',
                data: chart?.chartLine?.map((x) => x.traffic),
                borderColor: 'rgb(251,157,130)',
                backgroundColor: 'rgba(251,157,130, 0.5)',
            },
        ],
    };

    return (
        <div className="box mt-3 mx-2" style={{borderRadius:"20px" }}>
            <div className="profile-box d-flex justify-content-center chart" style={{ width: "98%" }} >
                {loading ? <Spinner /> : <Line options={options} data={data} height={110} />}
              </div>
        </div>
    );
}

export default ChartLine;