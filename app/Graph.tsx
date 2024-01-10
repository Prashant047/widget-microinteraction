import * as d3 from 'd3';
import { motion } from 'framer-motion';

const NUM_VALUES = 100;
const data = [...Array(NUM_VALUES)].map((_, i) => [i,Math.random()*2 + i/15]);

export default function Graph ({expanded}:{expanded:boolean}){
  const HEIGHT = 80;
  const WIDTH = 270;
  const PADDING = 20;

  const xScale = d3.scaleLinear()
    .domain([0, NUM_VALUES])
    .range([0, WIDTH]);

  const yScale = d3.scaleLinear()
    .domain([0, 10])
    .range([HEIGHT, 0]);

  let lineGenerator = d3.line()
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]));
  //@ts-ignore
  let linePath = lineGenerator(data);

  return (
    <div className='bg-neutral-800/80'>
      <svg 
        className='border-t border-neutral-700' 
        height={HEIGHT + PADDING*2} 
        width={WIDTH+PADDING*2} 
        viewBox={`0 0 ${WIDTH+PADDING*2} ${HEIGHT+PADDING*2}`}
      >
        <g
          transform={`translate(${PADDING}, ${PADDING})`}
        >
          <line
            x1={xScale(0)}
            y1={yScale(5)}
            x2={xScale(200)}
            y2={yScale(5)}
            stroke='currentColor'
            className='text-neutral-500'
            fill='none'
            strokeWidth={0.4}
          ></line>
          <path
            fill='none'
            stroke='currentColor'
            className='text-neutral-600'
            strokeWidth={0.5}
            d={linePath}
          />
          <motion.path
            animate={{pathLength: expanded?1:0}}
            transition={{duration: 1.2, delay:0.2}}
            fill='none'
            stroke='currentColor'
            className='text-amber-200'
            strokeWidth={0.5}
            d={linePath}
          />
          {xScale.ticks(5).map(xVal => (
            <g key={xVal} className='text-[0.6rem] text-neutral-500' transform={`translate(0, ${HEIGHT})`}>
              <text
                x={xScale(xVal)}
                y={10}
                textAnchor='middle'
                fill="currentColor"
              >{xVal}</text>
            </g>
          ))}
          <g className='text-neutral-100'>
            <text
              x={0}
              y={0}
              className='text-[0.5rem]'
              fill='currentColor'
            >$</text>
            <text
              x={6}
              y={5}
              fill='currentColor'
            >11.03</text>
          </g>
        </g>
      </svg>
    </div>
  );

}