import cars from '../assets/img/Cars.jpg'
import words from '../assets/img/English.jpg'
import pizza from '../assets/img/Pizza.jpg'
import conditioners  from '../assets/img/holodec.jpg'




export const projects = [
    {
        name: {
            eng: 'Cars-market',
            ua: 'Авторинок'
        },
        img: cars,
        description: {
            eng: 'In this site you can select a car using the filters, You can compare some selected cars, sent message to owner of the car, sell your car. You also can read a news using tag and find string. In your own office you can change your avatar, see the history of viewers. You also can evaluate every car',
            ua: 'На цьому сайті Ви можете обрати авто за Вашими побажаннями використовуючи фільтри, порівняти характеристики обраних автомобілів, написати повідомлення продавцю, виставити свій автомобіль на продаж. Подивитись новини про автомобілі за вашими побажаннями. У власному кабінеті Ви можете змінити аватар, подивитися історію Ваших переглядів. Також ви можете залишити вподобання до кожного автомобіля'
        },
        technologies: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'SASS'],
        link: 'http://185.252.24.27:5050/'
    },
    {
        name: {
            eng: 'Foreign Words',
            ua: 'Iноземні слова'
        },
        img: words,
        description: {
            eng: 'In this app you can add new words to learning them. The words you can know bed you can notice as wrong and learning them separately',
            ua: 'В цьому додатку Ви можете додавати нові слова та перебирати їх для вивчення, Слова які Ви погано знаєте можна відкладати для окремого опрацювання'
        },
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://nalydrey.github.io/English_learn/'
    },
    {
        name: {
            eng: 'Conditioner-Market',
            ua: 'Магазин кондиціонерів'
        },
        img: conditioners,
        description: {
            eng: 'There is you can buy new conditioner, and order service to install, write comment, add product to favorite. Admin can control all users and comments and also add new product',
            ua: 'Тут Ви можете придбати кондиціонер, замовити послугу монтажу, залишити відгук до кожного товару та сервісу, додати товар до улюблених, залишити оцінку. Адміністратор сайту може додавати новий товар, керувати користувачами та відкугами'
        },
        technologies: ['React', 'Redux','Node', 'MongoDB','Mui', 'SASS'],
        link: 'http://185.252.24.27'
    },
    {
        name: {
            eng: 'Pizza-Market',
            ua: 'Піцерія'
        },
        img: pizza,
        description: {
            eng: 'There is you can order some pizza in this site',
            ua: 'На цьому сайті ви можете замовити піцу'
        },
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        link: 'https://nalydrey.github.io/Pizza/'
    },
]