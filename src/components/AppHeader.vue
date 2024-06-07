<!-- COMPONENTE SINGOLO -->
<script>
// SCRIPT
export default {
  data() {
    return {
      hoveredIndex: null,
      logo: 'img/theme_eduprime_logo.png',
      bgHeader: 'img/hero.png',
      jumboDesc: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.',
      wave: '/img/Wave-1.png',
      links: [
        { name: 'Home', actions: ['Driving School', 'High School', 'Kinder Garden', 'Header Video'] },
        { name: 'Courses', actions: ['Our Courses', 'Single Course', 'Instructor Profile','Become A Teacher'] },
        { name: 'About Us', actions: null },
        { name: 'News', actions: ['EduPrime Blog', 'Single Post', 'Category Posts',] },
        { name: 'Pages', actions: ['How it works', 'Single Event', 'Single Product', 'Contact',] },
        { name: 'Contact', actions: null },
        { name: 'Purchase', actions: null },
      ]
    }
  },
  methods: {
    hovered(index) {
      this.hoveredIndex = index;
    },
    unHovered() {
      this.hoveredIndex = null;
    }
  },
  mounted() {

  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <div class="container-header bg-red position-relative">
    <!-- SEZIONE HEADER -->


    <header class="d-flex justify-content-between align-items-center round-font">
      <div>
        <img class="logo" :src="logo" alt="">
      </div>
      <div class="dx d-flex justify-content-end align-items-center">
        <div @mouseover="hovered(index)" @mouseleave="unHovered" v-for="(element, index) in links" :key="index" class="element">
          <p >{{ element.name }} </p>
          <i v-if="element.actions != null" class="fa-solid fa-caret-down"></i>
          <div class="dropdown" :class="{ active: hoveredIndex === index }" v-if="element.actions">
            <p v-for="contenuto in element.actions" :key="contenuto">{{ contenuto }}</p>
          </div>
        </div>
        <button class="button ms-3">VIEW COURSES</button>
      </div>
    </header>


    <!-- FINE NAVBAR -->
    <div class="container">
      <!-- INIZIO JUMBOTRON -->
      <div class="jumbo d-flex flex-columns align-items-center ">
        <h1 class="round-font pb-5 pt-5">Showcase your courses</h1>
        <p>{{ jumboDesc }}</p>
        <div>
          <button class="button round-font"><i class="fa-solid fa-magnifying-glass"></i> Search courses</button>
          <button class="button-white round-font ms-4">Apply for university</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-red">
    <img class="wave" :src="wave" alt="">
  </div>

</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */

i {
  padding-left: 0.4rem;
  font-size: 0.6rem;
}

.dx {
  width: 100%;
  display: flex;
}

header {
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  padding: 3rem;
}

.element {
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 1rem;
}
.element:hover{
  color: #e9d758;
  cursor: pointer;

}

.dropdown {
  position: absolute;
  padding: 1.5rem;
  width: 220px;
  top: 160px;
  transition: 0.4s;
  background: rgba(255, 255, 255, 0.849);
  color: #292f50ab;
  border: 2px dashed transparent;
  text-wrap: nowrap;
  border-radius: 7%;
  opacity: 0;
  visibility: hidden;
}

.active {
  top: 60px;
  opacity: 1;
  visibility: visible;
}

.dropdown p {
  padding: 0;
  font-size: 1.1rem;
}

.dropdown p:hover{
  color: #d15e5e;
}

p {
  padding-left: 1rem;
  padding-top: 0.9rem;
}

.container {
  width: 1200px;
}

* {
  font-size: 1.2rem;
}

.gradient-header {
  height: 12rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 78%, rgba(209, 94, 94, 1) 98%);
}

.container-header {
  height: 40rem;
  background-image: url(../../img/hero.png);
  background-size: cover;
  background-position: bottom;
}

.logo {
  height: 4rem;
}

button {
  font-size: 1.2rem !important;
  color: white;
}

button:hover {
  color: #e9d758;
}

a:hover {
  color: #e9d758;
}

.dropdown a {
  color: black;
}


/* MODIFICA DI BOOTSTRAP  ALL HOVER APPARE IL DROPDOWN COME NEL SITO ORIGINALE*/
.dropdown-menu {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

/* DROPDOWN TRANSITION NON FUNZIONANTE */
.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
}


h1 {
  font-size: 4rem;
}

.bg-red {
  background-color: #d15e5e;
}

.button {
  padding: 16px 43px !important;
  background-color: #e9d758;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: 0.3s ease;
  height: 60px;
}

.button-white {
  padding: 16px 43px !important;
  background-color: transparent;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
  transition: 0.3s ease;
}

.button-white:hover {
  padding: 16px 43px !important;
  background-color: #e9d758;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
}

.button:hover {
  padding: 16px 43px !important;
  background-color: transparent;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
}

.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
}

.btn {
  background-color: rgba(0, 0, 0, 0);
  border: transparent;
}

.wave {
  object-fit: cover;
  width: 100%;
  height: 3rem;
  opacity: 1;
}

.jumbo {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.flex-columns {
  flex-direction: column;
}
</style>