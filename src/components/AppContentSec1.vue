<script>
import Store from '../data/store.js';

export default {

    data() {
        return {
            Store,

        }
    },
    methods: {

    },
    mounted() {

    }


}
</script>


<template>
    <h1 class="round-font fw-6 fs-1">Latest Courses</h1>
    <!-- cards -->
    <div class="card-container row">

        <div v-for="element in Store.latestCourses" class="col-lg-3 col-md-6 col-sm-12 p-3">
            <div class="card">
                <div class="img-container">
                    <img :src=element.img alt="">
                </div>
                <h5 class="round-font">{{ element.name }}</h5>
                <div class="my-lightgrey">
                    <i class="fa-regular fa-user"></i>
                    Teacher:
                    <span class="bold">{{ element.teacher }}</span>
                </div>
                <div class="my-lightgrey">
                    <i class="fa-regular fa-money-bill-1"></i>
                    Price:
                    <span class="bold">{{ element.price }}</span>
                </div>
                <button class="my-bg-red round-font">
                    <i class="fa-regular fa-eye"></i>
                    View Course
                </button>
            </div>
        </div>


    </div>
</template>


<style scoped>
.bold {
    font-weight: 700;
}

.card {
    height: 300px;
    text-align: center;
    text-wrap: wrap;
    padding: 1rem;
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 0 10px 2px rgba(146, 145, 145, 0.329);
    border: none;
    position: relative;

}

button {
    position: absolute;
    bottom: -22px;
    left: 50%;
    transform: translate(-50%);
    color: white;
    padding: 0.7rem 2rem;
    text-wrap: nowrap;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
}

.img-container {
    width: 80px;
    height: 80px;
    margin: auto;
    margin-top: 2rem;
}

img {
    width: 100%;
}


.card-container {
    display: flex;
    justify-content: space-between;
}
</style>
