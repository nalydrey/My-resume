import foto from '../assets/img/foto3.jpg'
import {ReactComponent as Location} from "../assets/icons/location.svg";
import {ReactComponent as Phone} from "../assets/icons/phone.svg";
import {ReactComponent as GitHub} from "../assets/icons/github.svg";
import {ReactComponent as Linkedin} from "../assets/icons/linkedin10.svg";
import {ReactComponent as Envelop} from "../assets/icons/email.svg";






export const my = {
    foto,
    title: {
        eng: 'Frontend Developer',
        ua: 'Фронтенд розробник'
    },
    firstName: {
        eng: 'Oleksiy',
        ua: 'Олексій'
    },
    lastName: {
        eng: 'Nikolayenko',
        ua: 'Ніколаєнко'
    },
    about: {
        title: {
            eng: 'About me',
            ua: 'Про мене'
        },
        discription: {
            eng: 'I successfully completed courses of frontend developer. I learned HTML5&CSS3, JavaScript, SASS, Git, React, Redux and applie these technologes in my projects. I always want to get new knowlage and ready to work hardly for it. I am good at tech. I have technical education. I improve my knowlage and skills every day. My slogan: Get started and you will difinitely succeed.',
            ua: 'Я успішно закінчив курси фронтенд розробника. Вивчив такі технології як HTML5&CSS3, JavaScript, SASS, Git, React, Redux і успішно використовую їх в своїх проектах. Я завжди бажаю отримувати нові знання, готовий тяжко працювати для цього. Я добре розуміюсь на техніці. Маю технічну вищу освіту. Кожен день я покращую свої знання та навички. Мій девіз: "Почни, і в тебе обов\'язково все вийде!'
        }
    },
    location: {
        country: {
            eng: 'Ukraine',
            ua: 'Україна'
        },
        city:{
          eng:'Kharkiv',
          ua:'Харків'
        },
        icon: Location,
    },
    education:{
        title: {
            eng: 'Education',
            ua: 'Освіта'
        },
        higher:{
            title:{
                eng: 'Higher Education',
                ua: 'Вища освіта'
            },
            school:{
                eng: 'National Technical University "Kharkiv Polytechnical Institute"',
                ua: 'Національний Технічний Університет "Харківський Політехнічний Інститут"'
            },
            depart:{
                title: {
                    eng: 'departament',
                    ua: 'факультет'
                },
                name:{
                    eng: 'Cars and automotive industry',
                    ua: 'Автомобілі та автомобільне господарство'
                }
            },
            spec:{
                    eng: 'mechanical engineer',
                    ua: 'інженер-механік'
                }
        },
        course:{
            title:{
                eng: 'Course',
                ua: 'Курси'
            },
            school:'CyberBionic Systematics Education',
            spec:{
                eng:'Frontend developer',
                ua: 'Фронтенд розробник'
            }

        }
    },
    contacts:{
        tel:{
            address: '+380988232188',
            tooltip: true,
            icon: Phone,
            to: 'tel',
            pad: 2,
            blank: false
        },
        email:{
            address: 'alexnikjs@gmail.com',
            tooltip: true,
            icon: Envelop,
            to: 'mailto',
            pad: 2,
            blank: false
        },
        linkedin:{
            address: '//www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%BD%D1%96%D0%BA%D0%BE%D0%BB%D0%B0%D1%94%D0%BD%D0%BA%D0%BE-17472825b/',
            tooltip: false,
            icon: Linkedin,
            to: 'https',
            pad: 2,
            blank: true
        },
        git:{
            address: '//github.com/nalydrey',
            tooltip: false,
            icon: GitHub,
            to: 'https',
            pad: 0,
            blank: true
        },
    },
    languages:{
      english: {
          title:{
              eng:'English',
              ua: 'Англійська'
          },
          level: 2
      },
      ukrainian:{
          title:{
              eng:'Ukrainian',
              ua: 'Українська'
          },
          level: 5
      }
    },
    lang:{
      eng: 'Languages',
      ua: 'Мови'
    },
    spec:{
        eng: 'speciality',
        ua: 'спеціальність'
    },
    cert: {
        eng:'Certificates',
        ua: 'Cертифікати'
    },
    duration:{
        eng: 'duration of study',
        ua: 'Тривалість навчання'
    },
    year:{
        eng: 'years',
        ua: 'років'
    },
    month:{
        eng: 'months',
        ua: 'місяців'
    },
    soft:{
      eng: 'Soft Skils',
      ua: 'Риси характеру'
    },
    hard:{
        eng: 'Hard Skils',
        ua: 'Стек технологій'
    },
    button:{
        eng: 'Go to site',
        ua: 'Перейти на сайт'
    },
    projects:{
        eng: 'Projects',
        ua: 'Проекти'
    }
}