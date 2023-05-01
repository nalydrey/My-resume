import React, {useEffect, useState} from 'react';
import {ReactComponent as Chevron} from "../assets/icons/chevron.svg";


const DropDown = ({children, title}) => {

    const [open, setOpen] = useState(false)

    useEffect(()=>{
        document.addEventListener("click", close)
        return () => {
            document.removeEventListener('click', close)
        }
    },[])


    const toggle = (e) => {
        e.stopPropagation()
        setOpen(!open)
    }

    const close = () => {
        setOpen(false)
    }

    return (
        <div className='relative'>
            <div className='frame border-l-orange-600 flex justify-between rounded-r-2xl py-1 cursor-pointer dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900'
                 onClick={toggle}
            >
                <h3 className="text-2xl font-medium text-orange-700 dark:text-orange-400"
                >{title}</h3>
                <Chevron className={`w-8 h-8 stroke-2 dark:stroke-orange-400 stroke-orange-700 ${open ? 'rotate-180':''} duration-300`}/>
            </div>
            <div className={`${open ? 'max-h-[500px]':'max-h-[0px]'}  top-[130%] w-full rounded-xl z-20 absolute overflow-hidden transition-all duration-700 bg-gradient-to-r from-gray-100 to-gray-200 shadow-light shadow-medium dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-700`}
                 onClick={(e)=>e.stopPropagation()}
            >
                    {children}
            </div>
        </div>
    );
};

export default DropDown;