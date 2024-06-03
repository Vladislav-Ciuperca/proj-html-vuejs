import { reactive } from 'vue'

const informazioni = {

    latestCourses: [
        {
            name: "Make Better Decisions",
            teacher: "James Collins",
            price: "$21.00",
            img: "/src/assets/img/Decisions-icon.png"
        },
        {
            name: "How to be a speaker",
            teacher: "Luigi Vuittone",
            price: "Free",
            img: "/src/assets/img/Speaker-icon.png"
        },
        {
            name: "Network Introductions",
            teacher: "Laurenzio Maestri",
            price: "Free",
            img: "/src/assets/img/Network-icon.png"
        },
        {
            name: "Brand Management",
            teacher: "Ajeje Brazorf",
            price: "Free",
            img: "/src/assets/img/Brand-icon.png"
        },
    ]

}



const iMieiDati = reactive(informazioni);





export default iMieiDati 