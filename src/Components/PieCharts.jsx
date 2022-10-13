import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";


const PieCharts = ({ data }) => {




    return (
        <ResponsiveContainer>
            <PieChart width={730} height={250} >
                <Tooltip />
                <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieCharts