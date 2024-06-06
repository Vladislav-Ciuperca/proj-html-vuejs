<script>

export default {

    data() {
        return {
            shorten: false
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
    <div class="bg-red ">
        <div class="container-lg d-flex align-items-center p-5 m-auto row">
            <span class="col-6 round-font">Subscrive Now to Our Newsletter !</span>
            <div class="col-6 mail-input">
                <input :class="{ shrink: shorten }" type="mail" placeholder="Email Adress...">
                <button @mouseover="isHover()" @mouseleave="isNotHover()">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
span {
    color: white;
    font-size: 2.3rem;
}

.mail-input {
    position: relative;
}

input {
    width: 80%;
    margin-left: 1rem;
    border-radius: 50px;
    padding: 1rem 2.5rem;
    border: none;
    height: 60px;
    transition: 0.3s;
    outline: none;
    margin-left: 4rem;
}

.shrink {
    width: 70%;
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247),
        0px 0px 10px 4px rgba(0, 0, 0, 0.089) inset;
}

button {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: none;
    position: absolute;
    right: 9.1%;
    transition: 0.4s;
    color: #E56768;
    background: white;
    border-radius: 50%;
    position: absolute;
}

button:hover {
    color: white;
    background: #E56768;
    transform: rotate(360deg);
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
}
</style>
