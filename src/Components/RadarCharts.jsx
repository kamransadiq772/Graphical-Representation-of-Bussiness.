import React from 'react'

import { RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts'

const RadarCharts = ({ data }) => {
    return (
        <ResponsiveContainer>
            <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name="uv" dataKey="pv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} animationBegin={400} />
                <Radar name="pv" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} animationBegin={400} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarCharts