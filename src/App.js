import logo from './logo.svg';
import './App.css';
import { useState, useCallback, useEffect } from 'react';
import AreaChat from './Components/AreaChat'
import PieCharts from './Components/PieCharts'
import BarCharts from './Components/BarChart';
import LineCharts from './Components/LineCharts'
import ComposedCharts from './Components/ComposedCharts';
import RadarCharts from './Components/RadarCharts';
import RadialCharts from './Components/RadialCharts';

function App() {

  const Interval = 3000

  const [currentViewIndex, setCurrentViewIndex] = useState(-1);
  const [data, setdata] = useState([
    { name: 'a', pv: 12, uv: 22 },
    { name: 'b', pv: 13, uv: 23 },
    { name: 'c', pv: 14, uv: 24 },
    { name: 'd', pv: 15, uv: 25 },
    { name: 'e', pv: 14, uv: 26 },
    { name: 'f', pv: 12, uv: 22 },
    { name: 'g', pv: 18, uv: 21 },
    { name: 'h', pv: 8, uv: 22 },
    { name: 'i', pv: 9, uv: 27 },
    { name: 'j', pv: 22, uv: 24 },
    { name: 'k', pv: 11, uv: 22 },
    { name: 'l', pv: 13, uv: 21 },
  ]);

  const [current, setcurrent] = useState(0);

  const view = {
    layouts: [
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'gl',
        grid_x: 8,
        grid_y: 5,
      },
      {
        type: 'gp',
        grid_x: 4,
        grid_y: 5,
      },
      {
        type: 'gb',
        grid_x: 12,
        grid_y: 5,

      }
    ],
    layouts1: [
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'gb',
        grid_x: 12,
        grid_y: 10,
      },
    ],
    layouts2: [
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 8,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'gb',
        grid_x: 12,
        grid_y: 8,
      },
    ],
    layouts3: [
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'card',
        grid_x: 4,
        grid_y: 2,
      },
      {
        type: 'gl',
        grid_x: 12,
        grid_y: 10,
      },
    ],
  }

  const view1 = [
    {
      title: 'view1',
      layouts: [
        {
          title: '1',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '2',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '3',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          type: 'gl',
          grid_x: 8,
          grid_y: 5,
        },
        {
          type: 'gp',
          grid_x: 4,
          grid_y: 5,
        },
        {
          type: 'gb',
          grid_x: 12,
          grid_y: 5,

        }
      ]
    }, 
    {
      title: 'view2',
      layouts: [
        {
          title: '4',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '5',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '6',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          type: 'gb',
          grid_x: 12,
          grid_y: 10,
        },
      ],
    }, 
    {
      title: 'view3',
      layouts: [
        {
          title: '7',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '8',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '9',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '10',
          type: 'card',
          grid_x: 8,
          grid_y: 2,
        },
        {
          title: '11',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          type: 'gb',
          grid_x: 12,
          grid_y: 8,
        },
      ],
    }, 
    {
      title: 'view4',
      layouts: [
        {
          title: '12',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '13',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '14',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          type: 'gl',
          grid_x: 12,
          grid_y: 10,
        },
      ],
    },
    {
      title: 'view5',
      layouts: [
        {
          title: '15',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '16',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          title: '17',
          type: 'card',
          grid_x: 4,
          grid_y: 2,
        },
        {
          type: 'grc',
          grid_x: 8,
          grid_y: 5,
        },
        {
          type: 'gr',
          grid_x: 4,
          grid_y: 5,
        },
        {
          type: 'gc',
          grid_x: 12,
          grid_y: 5,

        }
      ]
    },
  ]


  useEffect(() => {
    const interval = view1.length && setInterval((length = view1.length) => {
      setcurrent(ps =>
        ps + 1 === length ? 0 : ps + 1
      )
      // console.log(view1[current])
      // console.log(current)
    }, Interval)
    return () => {
      clearInterval(interval)
    };
  });
  return (
    <div className="App">
      <div className=' container-fluid d-flex flex-column h-100' style={{ gap: 10 }}>
        <div className='bg-secondary rounded' style={{ height: '65px', width: '100%' }} >{view1[current] && view1[current].title}</div>
        <div className='d-flex flex-wrap' style={{ maxHeight: '100%', height: '100%', gap: 5, justifyContent: 'center', alignItems: 'center' }} >
          {view1 && view1[current] &&
            view1[current].layouts.map((item, index) => (
              <div key={index} className='rounded d-flex justify-content-center align-Item-center' style={{ display: 'inline-flex', backgroundColor: 'rgb(230, 229, 229)', width: `${item.grid_x * (100 / 12.1)}%`, height: `${item.grid_y * (100 / 12.3)}%` }}>
                {
                  //Switch Case // inline ifElse shortcut
                  item.type === 'card' ? <span className='bg-secondary w-100 h-100 rounded'>{item.title && item.title}</span>
                    : item.type === 'gl' ? <LineCharts data={data} />
                    : item.type === 'gp' ? <PieCharts data={data} />
                    : item.type === 'gb' ? <BarCharts data={data} /> 
                    : item.type === 'ga' ? <AreaChat data={data} /> 
                    : item.type === 'gc' ? <ComposedCharts data={data} /> 
                    : item.type === 'gr' ? <RadarCharts data={data} /> 
                    : item.type === 'grc' ? <RadialCharts data={data} /> 
                    : <></>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
