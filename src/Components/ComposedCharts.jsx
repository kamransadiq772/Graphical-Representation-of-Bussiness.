import React from 'react'
import { ComposedChart } from 'recharts'
import { AreaChart,Line, Area, XAxis, YAxis, CartesianGrid, Tooltip,BarChart,Legend,Bar,ResponsiveContainer } from "recharts";


const ComposedCharts = ({data}) => {
    return (
        <ResponsiveContainer>
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default ComposedCharts