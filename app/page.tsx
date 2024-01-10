'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowUp, Share, BarChart2, Settings } from 'lucide-react';
import Graph from './Graph';

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const SQUARE_WIDTH = 40;
  const PADDING = 10;

  return (
    <section className="h-screen flex flex-col items-center justify-center mx-auto py-10" >
      <h2 className='text-sm text-neutral-400 my-10'>click on <b>widget</b> to toggle expanded view</h2>
      <motion.div 
        animate={{height:expanded?'308px':`${PADDING*2 + SQUARE_WIDTH}px`}}
        style={{height:`${PADDING*2 + SQUARE_WIDTH}px`}}
        onClick={() => setExpanded(prev => !prev)}
        className="bg-neutral-900 w-[310px] border border-neutral-700 rounded-lg overflow-hidden"
      >
        <div style={{padding: `${PADDING}px`}} className={`flex gap-2 ${expanded?'flex-row-reverse':''}`}>
          <motion.div 
            layout
            style={{height: `${SQUARE_WIDTH}px`, width: `${SQUARE_WIDTH}px`}}
            className="bg-red-500 p-1 rounded-lg flex flex-col justify-between h-full"
          >
            <div className='flex items-center justify-between'>
              <div className='h-2 w-2 bg-neutral-100 rounded-full'></div>
              <small className='text-[0.4rem] text-green-500 font-bold'>+4.57</small>
            </div>
            <span className='text-[0.6rem] font-bold'>$11.03</span>
          </motion.div>
          <motion.div layout className='relative flex-1'>
            <motion.div animate={{opacity:expanded?0:1}} className=' flex justify-between items-center'>
              <div className='flex flex-col'>
                <div className='flex gap-2'>
                  <h1>$8,993.46</h1>
                  <small className='flex items-center text-[0.5rem] text-green-300 gap-1'>
                    <span><ArrowUp size={11}/></span>
                    <span>$4,496.50</span> 
                  </small>
                </div>
                <small className='text-neutral-500'>Avax/Usdt</small>
              </div>
              <div className='flex gap-2 text-neutral-500'>
                <BarChart2 size={17}/>
                <Settings size={17}/>
              </div>
            </motion.div>
            <motion.div  initial={{opacity:0}} animate={{opacity:expanded?1:0}} className='absolute flex flex-col items-start justify-between top-0 left-0 h-full'>
              <small className='inline-flex border border-neutral-600 text-[0.45rem] rounded-sm leading-none p-[.2rem]'>12X</small>
              <div className='flex items-center'>
                <span className='inline-flex items-center justify-center h-3 w-3 rounded-full bg-red-500 text-[0.5rem] font-bold'>A</span>
                <span className='inline-flex items-center justify-center h-3 w-3 rounded-full bg-cyan-500 text-[0.5rem] font-bold -translate-x-1'>T</span>
                <span className='text-[0.55rem]'>AVAX/USDT</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          animate={{opacity:expanded?1:0}}
          className=''
        >
          <div className='px-3 mb-3'>
            <h2 className='text-neutral-400'>Unrealized PNL</h2>
            <h2 className='text-neutral-100 font-bold'>8933.46 USDT</h2>
            
            <div className='flex justify-between text-xs my-3'>
              <small className='flex items-center text-green-300 gap-1'>
                <span><ArrowUp size={12}/></span>
                <span>$4,496.50</span> 
                <span className='ml-3'>54.83%</span>
              </small>
              <small className='text-neutral-400'>RISK: 2.64%</small>
            </div>

            <div className='flex gap-2'>
              <button className='font-bold flex items-center gap-2 px-3 py-1 rounded-full text-neutral-800 bg-neutral-100 text-xs'>
                <span><X size={15}/></span>
                <span>
                  Close position
                </span>
              </button>
              <button className='flex items-center gap-2 px-3 py-1 rounded-full text-neutral-400 bg-neutral-800 text-xs'>
                <span>Profit/Loss</span>
              </button>
              <button className='flex items-center gap-2 px-2 p-1 rounded-full text-neutral-400 bg-neutral-800 text-xs'>
                <span><Share size={13}/></span>
              </button>
            </div>
          </div>
          <Graph expanded={expanded}/>
        </motion.div>
      </motion.div>
    </section>
  );
}