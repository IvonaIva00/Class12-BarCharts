import {useState, useEffect} from "react";
import styles from './BarChart.module.css'
import Head from "next/head";

import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
) 

export default function BarChart () {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState ({})
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: "Sales $",
                    data: [15235, 12553, 21635, 13214, 19245, 16524, 14295],
                    borderColor: 'rgb(65, 150, 240)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend:{
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
     return(
        <>
         <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
         </div>
        </>
     )
}