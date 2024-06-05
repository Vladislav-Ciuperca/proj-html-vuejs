import { reactive } from 'vue'

const informazioni = {

    latestCourses: [
        {
            name: "Make Better Decisions",
            teacher: "James Collins",
            price: "$21.00",
            img: "img/Decisions-icon.png"
        },
        {
            name: "How to be a speaker",
            teacher: "Luigi Vuittone",
            price: "Free",
            img: "img/Speaker-icon.png"
        },
        {
            name: "Network Introductions",
            teacher: "Laurenzio Maestri",
            price: "Free",
            img: "img/Network-icon.png"
        },
        {
            name: "Brand Management",
            teacher: "Ajeje Brazorf",
            price: "Free",
            img: "img/Brand-icon.png"
        },
    ],

    latestBlogs: [
        {
            title: "Winning your business",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 17, 2019 ",
            img: 'img/theme_slider1_bg-1.jpg'
        },
        {
            title: "Selling Strategies",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 16, 2019 ",
            img: 'img/theme_slider2_bg-1.jpg'
        },
        {
            title: "Winning your business",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 15, 2019 ",
            img: 'img/theme_slider3_bg-1.jpg'
        },
    ],

   carouselData:[
    {
        name: "Davide di Giacomo",
        task: "Web Developer",
        img: "img/naruto-1.jpg"
    },
    {
        name: "Edoardo Menicucci",
        task: "Web Developer",
        img: "img/naruto-2.jpg"
    },
    {
        name: "Vladislav Ciuperca",
        task: "Web Developer",
        img: "img/naruto-3.jpg"
    },
    {
        name: "Gaara Qualcosa",
        task: "Hokage della Sabbia",
        img: "img/naruto-5.jpg"
    },
    {
        name: "Sakura Qualcosa",
        task: "Ninja Curatore",
        img: "img/naruto-4.jpg"
    },

   ]

}



const iMieiDati = reactive(informazioni);





export default iMieiDati 