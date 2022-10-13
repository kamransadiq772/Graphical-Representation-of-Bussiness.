import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,BarChart,Legend,Bar,ResponsiveContainer } from "recharts";

const BarCharts = ({data}) => {


    return (
        <ResponsiveContainer>
              <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" animationBegin={400}/>
            <Bar dataKey="uv" fill="#82ca9d" animationBegin={400}/>
        </BarChart>
        </ResponsiveContainer>
       
    )
}

export default BarCharts