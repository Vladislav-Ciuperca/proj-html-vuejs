<script>
import storeDave from '../data/storeDave.js'
export default {
    data() {
        return {
            shorten: false,
            storeDave
        }
    },
    methods: {
        isHover() {
            this.shorten = true
        },
        isNotHover() {
            this.shorten = false
        }
    },
    mounted() {

    }
}
</script>

<template>
    <div class="myBgRed">
        <div class="myCont d-flex justify-content-center gap-5 py-5">
            <div class="leftCont">
                <img class="w-100 pb-3" src="/img/theme_eduprime_logo.png" alt="">
                <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities,
                    courses, secondary schools etc.</p>
                <div class="d-flex flex-row gap-4">
                    <div class="social facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="social twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="social instagram">
                        <i class="fa-brands fa-instagram"></i>

                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ storeDave.headOne }} </h4>
                </li>
                <li v-for="links in storeDave.getLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ storeDave.headTwo }} </h4>
                </li>
                <li v-for="links in storeDave.netLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <div class="rightCont d-flex flex-column gap-2">

                <div class=" search-input">
                    <input :class="{ shrink: shorten }" type="mail" placeholder="Email Adress...">
                    <button @mouseover="isHover()" @mouseleave="isNotHover()">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <h4 class="round-font my-4">Search categoris</h4>
                <div class="d-flex flex-wrap gap-2 justify-content-end">
                    <a class="btLinks" href="#">ECONOMY</a>
                    <a class="btLinks" href="#">DESIGN</a>
                    <a class="btLinks" href="#">COACHING</a>
                    <a class="btLinks" href="#">BUSINESS</a>
                    <a class="btLinks" href="#">MEDICINE</a>
                    <a class="btLinks" href="#">LAW</a>
                    <a class="btLinks" href="#">FITNESS</a>
                </div>
                <p class="finalP"> ModelTheme. All rights reserved. </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

input {
    border: transparent;
    border-radius: 30px;
    width: 100%;
    outline: transparent;
}

.search-input {
    position: relative;
}

input {
    width: 100%;
    border-radius: 50px;
    padding: 1rem 2.5rem;
    border: none;
    height: 60px;
    transition: 0.3s;
    outline: none;
}

.shrink {
    width: 80%;
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
}

button {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: none;
    position: absolute;
    right: 0%;
    transition: 0.4s;
    color: #E56768;
    background: white;
    border-radius: 50%;
    position: absolute;
}

button:hover {
    color: white;
    background: #E56768;
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
}

.myBgRed {
    background-color: #e56768;
}

.myCont {
    width: 1200px;
    margin: 0 auto;
}

ul {
    list-style: none;
    width: 13.5rem;
}

a {
    color: white;
    text-decoration: none;
    transition: 300ms ease;
}

li:hover a {
    color: #e9d758;
}

.leftCont {
    width: 25rem;
}

.rightCont {
    position: relative;
    width: 26rem;
}

.fa-magnifying-glass:hover {
    background-color: #e56768;
}

.fa-brands {
    font-size: 1.2rem;
    border: 3px solid #e9d758;
    border-radius: 50%;
    transition: 300ms ease;
}

.fa-brands:hover {
    background-color: #e9d758;
    cursor: pointer;
}

.fa-instagram {
    padding: 0.8rem 1rem 0.8rem 1rem;
}

.fa-twitter {
    padding: 0.8rem 1rem 0.8rem 1rem;
}

.fa-facebook-f {
    padding: 0.8rem 1.2rem 0.8rem 1.2rem;
}

.btLinks {
    border: 1px solid white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 30px;
    transition: 300ms ease;
    font-size: 0.8rem;
}

.btLinks:hover {
    background-color: #e9d758;
    border: 1px solid transparent
}

.finalP {
    color: #e9d758;
    text-align: end;
    margin-top: 1rem;
}
</style>