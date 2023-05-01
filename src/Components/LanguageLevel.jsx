import React from 'react';

const LanguageLevel = ({level, language}) => {
    return (
        <div className='flex flex-col items-center gap-2 lg:text-2xl text-2xl'>
            <h4>{language}</h4>
            <ul className='flex gap-2'>
                {[1,1,1,1,1].map((_ , i) => {
                    return  <li key={i} className={`border-4 border-black dark:border-indigo-400 lg:w-5 lg:h-5 h-4 w-4 rounded-full ${ level > i ? 'bg-green-500 ': '' }`}></li>
                })}
            </ul>
        </div>
    );
};

export default LanguageLevel;