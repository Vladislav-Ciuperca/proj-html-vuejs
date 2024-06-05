<script>
import store from '../data/StoreVladi.js'

export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
        }
    },
    methods: {
        dragging(value) {
            if (!this.isClicked) return;
            console.log('dragging...')
            document.getElementById('carousel').scrollLeft -= value.movementX
        },
        mouseRelease() {
            this.isClicked = false;
            this.isSmooth = true;
        },

        Right() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollabile = carousel.scrollWidth - carousel.clientWidth;
            const distanzaScrollata = carousel.scrollLeft
            if (distanzaScrollata >= distanzaScrollabile) {
                carousel.scrollLeft = 0;
                console.log("Tornato all'inizio");
            } else {
                carousel.scrollLeft += 440;
                console.log("scrollDX");
            }

        },

        Left() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollata = carousel.scrollLeft

            if (distanzaScrollata <= 0) {
                carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
                console.log("Tornato alla fine");
            } else {
                carousel.scrollLeft -= 440;
                console.log("scrollSX");
            }

        },


    },
    created() {

    },
    mounted() {

    }
}
</script>


<template>


    <div class="title">
        <h1 class="round-font">Management</h1>
        <p>A team of expert teachers that are leading our university! Meet our staff and become a student at EduPrime this year!</p>
    </div>

    <div class="container">

        <button @click="Left()">next</button>

        <!-- la documentazione su questi "@events" è in fondo alla pagina -->
        <div @mousemove="dragging" @mousedown="isClicked = !isClicked, isSmooth = !isSmooth" @mouseup="mouseRelease()"
            id="carousel" :class="{ smooth: isSmooth, slow: isSmooth }">

            <div id="element-container">
                <div class="elemento">
                    <img src="../assets/img/personaggi-naruto-kakashi-hatake.jpg" alt="">
                </div>
                <div class="elemento">
                    <img src="../assets/img/personaggi-naruto-gaara.jpg" alt="">
                </div>
                <div class="elemento">foto 3</div>
                <div class="elemento">foto 4</div>
                <div class="elemento">foto 5</div>
            </div>
        </div>

        <button @click="Right()">next</button>

    </div>

</template>


<style scoped>
img{
    width: 100%;
}
.container, .title {
    border: 2px dashed purple;
    text-align: center;
}

h1 {
    padding: 3rem 0;
    font-size: 3rem;
}

p {
    width: 45%;
    margin: auto;
}

.container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#carousel {
    width: 1100px;
    height: 330px;
    border: 2px dashed green;
    /* background: rgba(172, 255, 47, 0.329); */
    display: flex;
    align-items: center;
    overflow-x: hidden;
}

.smooth {
    scroll-behavior: smooth;
    transition: 5s;
}

.slow {}

#element-container {
    transition: 8s;
    display: flex;
    width: 1750px;
}

button {
    border: 2px dashed fuchsia;
    background: rgba(255, 0, 255, 0.199);
    margin: 2rem;
    width: 80px;
    height: 80px;
    cursor: pointer;
}

.elemento {
    border: 2px dashed #F87102;
    background: rgb(255, 212, 132);
    width: 216px;
    height: 216px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}
</style>
