import React, {useState} from 'react';
import Technology from "./Technology";
import {hardSkills} from "../data/hardSkills";

const ProjectItem = ({img, name, description, technology, link, buttonName}) => {

    const [open, setOpen] = useState(false)

    return (
        <div className={`relative w-[350px] h-[350px] ${open ? 'z-10': ''}`}>

        <div className={`item-wrap  group ${open ? 'rounded-3xl': ''} bg-gradient-to-br from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-700`}
             onClick={()=>setOpen(!open)}
        >
            <div className={`item-foto ${open ? 'rounded-3xl -translate-y-2/4 top-0':''} `}>
                <img className='w-full h-full object-cover' src={img} alt=""/>
            </div>
            <div className={`duration-1000  pt-32 overflow-hidden max-h-0   ${open ? 'max-h-[1000px]':''}`}>
                <h2 className='text-4xl text-center font-bold text-sky-700 mb-2 dark:text-sky-500'>{name}</h2>
                <p className='text-green-700 text-xl max-h-[200px] overflow-auto dark:text-green-500'>{description}</p>
                <ul className='mt-5 grid grid-cols-2 gap-2'>
                    {hardSkills.filter(({name}) => technology.includes(name)).map(elem => <li key={elem.name} className='dark:text-gray-200' ><Technology icon={elem.icon} name={elem.name}/></li> )}

                </ul>
                <div className='text-center pt-5'>
                    <a href={link} target='_blank'><button className='py-2 px-10 border-4 border-sky-700 dark:border-sky-500 dark:text-sky-300 rounded-xl'>{buttonName}</button></a>
                </div>
            </div>
        </div>

        </div>

    );
};

export default ProjectItem;