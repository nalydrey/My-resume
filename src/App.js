import './App.css';
import {hardSkills} from "./data/hardSkills";
import {softSkills} from "./data/softSkills";
import {certificates} from "./data/certificates";
import {my} from "./data/aboutMe";
import Technology from "./Components/Technology";
import React, {useEffect, useState} from "react";
import Rings from "./Components/Rings";
import ContactString from "./Components/ContactString";
import ContactIcon from "./Components/ContactIcon";
import {ReactComponent as Complete} from "./assets/icons/completed.svg";
import {ReactComponent as Ua} from "./assets/icons/ua2.svg";
import {ReactComponent as Uk} from "./assets/icons/uk2.svg";
import {ReactComponent as Dark} from "./assets/icons/dark.svg";
import {ReactComponent as Light} from "./assets/icons/light.svg";
import DropDown from "./Components/DropDown";
import ContentBox from "./Components/ContentBox";
import LanguageLevel from "./Components/LanguageLevel";
import Switch from "./Components/Switch";
import ProjectItem from "./Components/ProjectItem";
import {projects} from './data/projects'

function App() {
    const [lang, setLang] = useState('eng')
    const [image, setImage] = useState(null)

   const [dark, setDark] = useState( false)

    useEffect(()=>{
        const html = document.querySelector('html')
        if(localStorage.getItem('theme') === 'dark'){
            setDark(false)
            html.classList.add('dark')
        }
        else{
            setDark(true)
            html.classList.remove('dark')
        }

    },[])

   const darkControl = (val) => {
       setDark(val)
       const html = document.querySelector('html')
       if(dark){
           html.classList.add('dark')
           localStorage.setItem('theme', 'dark')
       }
       else{
           html.classList.remove('dark')
           localStorage.setItem('theme', 'light')
       }
   }



    return (
        <>
            <div
                className="shadow-deep bg-gradient-to-br from-gray-200 to-gray-300 py-7 border-4 border-sky-700 max-w-7xl w-full mx-auto min-h-full my-7 rounded-2xl sm:p-5 p-3
                dark:bg-gradient-to-br dark:from-gray-400 dark:to-gray-900"

            >
                <div className='border-4 border-blue-500 rounded-2xl flex gap-10 justify-end p-2 mb-3 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800'>
                    <Switch val={lang}
                            sw1='ua'
                            sw2='eng'
                            labelSw1={<Uk className='w-9 h-9'/>}
                            labelSw2={<Ua className='w-8 h-8'/>}
                            change={(val) => setLang(val)}
                    />
                    <Switch val={dark}
                            sw1={false}
                            sw2={true}
                            labelSw1={<Light className='w-9 h-9 dark:stroke-green-500'/>}
                            labelSw2={<Dark className='w-8 h-8 dark:stroke-green-500'/>}
                            change={darkControl}
                    />
                </div>


                <div
                    className="mob:flex-row z-10 flex-col tablet:gap-10 relative overflow-hidden border-4 border-blue-500 shadow-medium rounded-l-3xl rounded-r-3xl flex gap-3 items-center ">
                    <div className='-z-[1] absolute bg-klava bg-cover w-full h-full opacity-30 dark:opacity-50 dark:brightness-50'></div>
                    <div className='relative'>
                        <div className='p-7'>
                            <div className="tablet:w-56 tablet:h-56 w-44 h-44 rounded-full overflow-hidden">
                                <img src={my.foto} alt=""/>
                            </div>
                        </div>
                        <Rings/>
                    </div>
                    <div className="p-2 text-sky-900 dark:text-gray-300">
                        <h2 className="tablet:text-5xl laptop:text-7xl  text-4xl font-bold tablet:mb-4 mb-2 text-center">
                            <span>{my.lastName[lang]} </span>{my.firstName[lang]}</h2>
                        <h3 className="laptop:text-3xl text-2xl font-bold text-center">{my.title[lang]}</h3>
                        <div className=" rounded-3xl w-28 mx-auto my-3 h-1.5 bg-blue-500 shadow-light"></div>
                        <div>
                            <ContactString icon={my.location.icon}
                                           string={`${my.location.country[lang]}, ${my.location.city[lang]}`}/>
                            <ul className='flex gap-3 my-5'>
                                {Object.values(my.contacts).map(contact => <li key={contact.address}>
                                    <ContactIcon {...contact}/></li>)}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="tablet:flex-row flex-col flex mt-5 gap-5">
                    <div className="lg:min-w-[290px] min-w-[230px] ">
                        <ContentBox className='border-l-red-700 mb-5 dark:border-l-red-500'
                                    classTitle='text-sky-700 dark:text-sky-500'
                                    title={my.hard[lang]}
                        >
                            <ul className='tablet:grid-cols-1 sm:grid-cols-3 small:grid-cols-2 grid grid-cols-1 gap-3 text-green-800 dark:text-green-500'>
                                {hardSkills.map(({icon, name}) => <li key={name}><Technology icon={icon} name={name}/>
                                </li>)}
                            </ul>
                        </ContentBox>
                        <ContentBox className='border-l-yellow-400 mb-5'
                                    classTitle='text-yellow-700 dark:text-yellow-400'
                                    title={my.soft[lang]}
                        >
                            <ul className='tablet:grid-cols-1 sm:grid-cols-3 small:grid-cols-2 grid grid-cols-1 gap-3 text-green-800 font-medium dark:text-green-500'>
                                {softSkills.map(skill =>
                                    <li key={skill.eng} className='flex gap-3'>
                                        <Complete className='w-8 h-8 fill-green-800'/>
                                        {skill[lang]}
                                    </li>)}
                            </ul>
                        </ContentBox>

                        <ContentBox className='border-l-indigo-500 dark:border-l-blue-300'
                                    classTitle='text-indigo-700 dark:text-indigo-200 '
                                    title={my.lang[lang]}
                        >
                            <ul className='tablet:grid-cols-1 sm:grid-cols-3 small:grid-cols-2 grid grid-cols-1 gap-3 dark:text-green-500'>
                                {Object.values(my.languages).map(language => <li key={language.title[lang]}><LanguageLevel
                                    language={language.title[lang]} level={language.level}/></li>)}
                            </ul>
                        </ContentBox>

                    </div>


                    <div className="flex-col gap-5 flex">
                        <ContentBox className='border-l-green-800 dark:border-l-green-500 '
                                    classTitle='text-green-800 dark:text-green-500'
                                    title={my.about.title[lang]}
                        >
                            <p className="text-green-800 dark:text-green-500">{my.about.discription[lang]}</p>
                        </ContentBox>

                        <ContentBox className='border-l-sky-800'
                                    classTitle='text-sky-800 dark:text-sky-300'
                                    title={my.education.title[lang]}
                        >
                            <div className='border-l-8 border-l-gray-400 pl-5 text-gray-500'>
                                <h3 className="lg:text-3xl text-2xl text-sky-700 mb-2 dark:text-sky-300">{my.education.higher.title[lang]}:</h3>
                                <p className="text-green-800 dark:text-green-500 mb-2">{my.education.higher.school[lang]}</p>
                                <p className="flex flex-col sm:flex-row mb-3 gap-3 dark:text-gray-200">
                                    <span
                                        className="lg:min-w-[240px] min-w-[190px] w-1/4">{my.education.higher.depart.title[lang]}:</span>
                                    <span>{my.education.higher.depart.name[lang]}</span>
                                </p>
                                <p className="flex flex-col sm:flex-row mb-3 gap-3 dark:text-gray-200">
                                    <span className="lg:min-w-[240px] min-w-[190px] lg:w-1/4">{my.spec[lang]}:</span>
                                    <span>{my.education.higher.spec[lang]}</span>
                                </p>
                                <p className="lg:text-2xl text-xl flex flex-col sm:flex-row gap-3 dark:text-gray-200">
                                    <span className="lg:min-w-[240px] min-w-[190px] w-1/4">{my.duration[lang]}:</span>
                                    <span>09.2006 ­ 01.2012 (5 {my.year[lang]} 4 {my.month[lang]})</span>
                                </p>
                            </div>
                            <div className="border-l-8 border-l-gray-400 pl-5 text-gray-500 mt-5">
                                <h3 className="lg:text-3xl  text-2xl text-sky-700 dark:text-sky-300 mb-2">{my.education.course.title[lang]}:</h3>
                                <p className="text-green-800 dark:text-green-500  mb-2">{my.education.course.school}</p>
                                <p className="flex flex-col sm:flex-row  mb-3 gap-3 dark:text-gray-200"><span
                                    className="lg:min-w-[240px] min-w-[190px] w-1/4">speciality:</span>
                                    <span>{my.education.course.spec[lang]}</span></p>
                                <p className="flex flex-col sm:flex-row gap-3 dark:text-gray-200"><span
                                    className="lg:min-w-[240px] min-w-[190px] w-1/4 ">{my.duration[lang]}:</span> <span>08.2022 ­ 02.2023 (6 {my.month[lang]})</span>
                                </p>
                            </div>
                        </ContentBox>
                        <DropDown title={my.cert[lang]}>
                            <ul className="flex flex-col gap-5 p-5 items-start px-5 border-4 border-blue-400 rounded-xl">
                                {certificates.map(({img, name}) => {
                                        return (
                                            <li key={name}
                                                className='flex items-center cursor-pointer'
                                                onClick={() => setImage(img)}
                                            >
                                                <div className="w-20 h-15 rounded-xl overflow-hidden shadow-light">
                                                    <img className="object-cover w-full h-full" src={img} alt=""/>
                                                </div>
                                                <p className="shadow-light text-xl bg-white bg-gray-200 px-5 py-1 border-l-0 rounded-r-xl">{name}</p>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </DropDown>
                        <ContentBox
                            className='border-l-red-800'
                            classTitle='text-red-800'
                            title={my.projects[lang]}>
                            <div className='grid grid-cols-1 justify-items-center gap-10 laptop:grid-cols-2'>
                                {projects.map((project, index) => <ProjectItem img={project.img}
                                                                      key={project.name[lang]}
                                                                      name={project.name[lang]}
                                                                      description={project.description[lang]}
                                                                      technology={project.technologies}
                                                                      link={project.link}
                                                                      buttonName={my.button[lang]}
                                                                      index ={index}
                                />)}
                            </div>
                        </ContentBox>
                    </div>
                </div>

            </div>
            {
                image &&
                <div
                    className='fixed top-0 bg-black/70 w-full h-screen flex items-center justify-center border border-black'
                    onClick={(e) => {
                        e.stopPropagation();
                        setImage(null)
                    }}
                >
                    <img src={image} alt=""/>
                </div>
            }


        </>

    );
}

export default App;
