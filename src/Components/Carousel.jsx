import React from 'react'
import { useState } from 'react';
import AreaChat from './AreaChat'
import PieCharts from './PieCharts'
import BarCharts from './BarChart';
import LineCharts from './LineCharts'

const Carousel = () => {

    const [data, setdata] = useState([
        { name: 'a', pv: 12,uv:22 },
        { name: 'b', pv: 13,uv:23 },
        { name: 'c', pv: 14,uv:24 },
        { name: 'd', pv: 15,uv:25 },
        { name: 'e', pv: 14,uv:26 },
        { name: 'f', pv: 12,uv:22 },
        { name: 'g', pv: 18,uv:21 },
        { name: 'h', pv: 8 ,uv:22},
        { name: 'i', pv: 9 ,uv:27},
        { name: 'j', pv: 22,uv:24 },
        { name: 'k', pv: 11,uv:22 },
        { name: 'l', pv: 13,uv:21 },
    ]);
    
    
    
      const view = {
        title: 'Section Wise Worker Efficency Report',
        layouts: [
          {
            type:'card',
            grid_x: 4,
            grid_y: 2,
          },
          {
            type:'card',
            grid_x: 4,
            grid_y: 2,
          },
          {
            type:'card',
            grid_x: 4,
            grid_y: 2,
          },
          {
            type:'gl',
            grid_x: 8,
            grid_y: 5,
          },
          {
            type:'gp',
            grid_x: 4,
            grid_y: 5,
          },
          {
            type:'gb',
            grid_x: 12,
            grid_y: 5,
    
          }
        ],
        
      }
    

  return (
    <div>
        <div className=' container-fluid d-flex flex-column h-100' style={{gap:10}}>        
        <div className='bg-secondary rounded' style={{ height: '65px',width:'100%' }} >{view.title}</div>
        <div className='d-flex flex-wrap' style={{ maxHeight: '100%', height: '100%',gap:5,justifyContent:'center',alignItems:'center' }} >
          {
            view.layouts.map((item, index) => (
              <div key={index} className='rounded d-flex justify-content-center align-Item-center' style={{ display: 'inline-flex',backgroundColor:'rgb(230, 229, 229)', width: `${item.grid_x * (100 / 12.1)}%`, height: `${item.grid_y * (100 / 12.3)}%` }}>
                {
                  //Switch Case // inline ifElse shortcut
                  item.type==='card' ? <span className='bg-secondary w-100 h-100 rounded'>card</span> 
                  : item.type === 'gl' ? <AreaChat width='100%' height='100%' data={data} lable="PieChart"/> 
                  : item.type === 'gp' ? <PieCharts style={{maxWidth:'100%',maxHeight:'100%'}} data={data} />
                  : item.type === 'gb' ? <BarCharts data={data}/> : <></>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Carousel