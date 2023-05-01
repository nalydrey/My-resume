import React from 'react';

const Switch = ({val, sw1, sw2, change, labelSw1, labelSw2}) => {
    const toggle = () => {
        val === sw1 ? change(sw2) : change(sw1)
    }

    return (
        <div className="flex items-center">
            <span className='text-xl font-bold'>{labelSw1}</span>
            <div className='shadow-light mx-5 cursor-pointer relative w-10 h-2 rounded-full  bg-gray-400'
                 onClick={toggle}
            >
                <div className={`shadow-light transition-all duration-300 absolute w-8 h-8 rounded-full bg-gray-500 -translate-y-2/4 top-2/4  -translate-x-2/4 ${val===sw1 ? 'left-full':'left-0'}`}></div>
            </div>
            <span className='text-xl font-bold'>{labelSw2}</span>
        </div>
    );
};

export default Switch;