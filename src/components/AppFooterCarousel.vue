<script>
import store from '../data/StoreVladi.js'


export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
            valore1: "",
            valore2: "",
            valore3: "",
            valore4: "",
            bambi: 'a',
            isAtLeft: true,
            isAtRight: false,
        }
    },
    methods: {
        dragging(value) {
            if (!this.isClicked) return;
            console.log('dragging...')
            document.getElementById('footerCarosell').scrollLeft -= value.movementX

            let halfWay = (footerCarosell.scrollWidth - footerCarosell.clientWidth) / 2

            if (footerCarosell.scrollLeft <= halfWay) {
                this.isAtRight = false
                this.isAtLeft = true
                console.log("right is", this.isAtRight)
                console.log("Left is", this.isAtLeft)
            }
            else if (footerCarosell.scrollLeft >= halfWay) {
                this.isAtRight = true
                this.isAtLeft = false
                console.log("right is", this.isAtRight)
                console.log("Left is", this.isAtLeft)

            }
        },
        mouseRelease() {
            this.isClicked = false;
            this.isSmooth = true;
        },

        Right() {
            const footerCarosell = document.getElementById('footerCarosell');

            footerCarosell.scrollLeft += 1500;

            this.isAtRight = true
            this.isAtLeft = false

        },

        Left() {
            const footerCarosell = document.getElementById('footerCarosell');

            footerCarosell.scrollLeft -= 1500;

            let halfWay = (footerCarosell.scrollWidth - footerCarosell.clientWidth) / 2


            this.isAtRight = false
            this.isAtLeft = true


        },


    },
    created() {
        setInterval(() => {
            const footerCarosell = document.getElementById('footerCarosell');

            this.valore1 = footerCarosell.scrollWidth
            this.valore2 = footerCarosell.clientWidth;
            this.valore3 = footerCarosell.scrollWidth - footerCarosell.clientWidth
            this.valore4 = footerCarosell.scrollLeft



        }, 20)
    },

    mounted() {

    }
}
</script>


<template>

    <div class="container">

        <div class="title">
            <h1 class="round-font">Thoughts from our students</h1>
        </div>

        <div id="footerCarosell" @mousemove="dragging" @mousedown="isClicked = !isClicked, isSmooth = !isSmooth"
            @mouseup="mouseRelease()" :class="{ smooth: isSmooth, slow: isSmooth }">

            <div id="element-container"><!--width 1750px(va in overflow)-->
                <div class="elemento">
                    <div class="carta">
                        <div class="d-flex top">
                            <div class="faculty img-container">
                              img
                            </div>
                            <h2 class="round-font my-red">FACULTY OF BLABLABLA SOMETHING</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet quia modi quod libero
                            assumenda ut commodi, est in doloremque quisquam laborum voluptate quidem veritatis nes</p>
                        <div class="d-flex">
                            <div class="student img-container">
                                img
                            </div>
                            <div class="info">
                                <h2 class="round-font">Nome di persona non di cosa</h2>
                                <p>sono un figo bla bla </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elemento">foto 2</div>
                <div class="elemento">foto 3</div>
                <div class="elemento">foto 4</div>
            </div>

        </div>

        <div class=" dots">
            <button :class="{ red: isAtLeft }" id="sx"><i @click="Left()" class="fa-solid fa-circle"></i></button>
            <button :class="{ red: isAtRight }" id="dx"><i @click="Right()" class="fa-solid fa-circle"></i></button>
        </div>


    </div>

</template>



<style scoped>
.debug{
    border: 2px dashed red;
}
/* stile del titolo */
h1 {
    font-size: 3rem;
}

.title {
    text-align: center;
    padding: 3rem;
}

.container {
    justify-content: center;
    height: 69vh;
}

#footerCarosell {
    background: rgba(172, 255, 47, 0.329);
    margin: auto;
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    transition: 2s ease;
    caret-color: transparent;
}

.smooth {
    scroll-behavior: smooth;
}

#element-container {
    display: flex;
    width: 200%;
    height: 100%;
}


.elemento {
    border: 2px dashed #F87102;
    background: rgb(255, 212, 132);
    width: 50%;
    padding: 1rem;
}
/* stile della carta */

.carta{
    border: 2px dashed purple;
    border-radius: 15px;
    height: 100% ;
    padding: 2rem 3rem;
}
.top h2{
    width: 80%;
    font-size: 1.75rem;
    letter-spacing: 3px;
    line-height: 45px;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info h2{
    font-size: 1.7rem;
    line-height: 20px;
}

.img-container{
    border: 2px dashed #E56768 ;
    background: rgba(172, 255, 47, 0.418);
    width: 80px;
    height: 80px;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.dots {
    justify-content: center;
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    caret-color: transparent;
}

button {
    background: none;
    border: none;
    color: #8888883d;
}

button:hover {
    color: #88888879;
}

.red {
    color: #E56768 !important;
}
</style>
