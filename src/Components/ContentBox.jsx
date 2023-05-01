import React from 'react';
const ContentBox = ({title, children, className, classTitle}) => {
    return (
        <div className={`frame lg:text-2xl text-xl ${className} dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900`}>
            <h2 className={`title lg:text-4xl text-3xl  ${classTitle}`}>{title? title : 'Title'}</h2>
            {children}
        </div>
    );
};

export default ContentBox;