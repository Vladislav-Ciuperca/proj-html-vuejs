<script>
import storeDave from '../data/storeDave.js';
export default {
  data() {
    return {
      storeDave
    }
  }
}
</script>

<template>
  <div class="svg-cont"></div>

  <div class="background pb-5">
    <div class="myCont text-center">
      <img class="mb-4 mt-4" src="/img/Clock-and-Bell.png" alt="" style="width: 60px;">
      <h1 class="round-font">University year</h1>
      <div class="row position-relative mt-5">
        <div v-for="info in storeDave.info" class="cardof first position-relative">
          <h4 class="round-font">{{ info.title }}</h4>
          <p>{{ info.paragraf }}</p>
        </div>
      </div>
      <img src="/img/Timeline-Item.png" alt="">
      <div class="row position-relative">
        <div v-for="info in storeDave.info" class="cardof therd position-relative">
          <h4 class="round-font">{{ info.title }}</h4>
          <p>{{ info.paragraf }}</p>
        </div>
      </div>
      <img class="mt-4 mb-4" src="/img/upcoming-events-calendar-icon.png" alt="" style="width: 60px;">
      <h1 class="round-font mb-5">Upcoming Events</h1>
      <div class="row justify-content-center gap-3">
        <div v-for="x in storeDave.cards" class="card col-3 p-5 mb-5">
          <h4 class="round-font">{{ x.title }}</h4>
          <p class="lighter-color"><i class="fa-regular fa-calendar-days"></i> {{ x.date }}</p>
          <p class="lighter-color">{{ x.paragraf }}</p>
          <div class="btn-cont">
            <button type="button" class="button round-font">+ Find more</button>
          </div>
        </div>
      </div>
      <button type="button" class="button-white">View all events</button>
    </div>
  </div>
  <div class="svg-cont-down"></div>
</template>

<style scoped>
.row{
  gap: 4rem;
}
.myCont {
  width: 1200px;
  margin: 0 auto;
}

.background {
  background-color: #e56768;
}

.svg-cont{
  width: 100%;
  background-image: url('/img/svg/svg-0.svg');
  height: 159px;
  background-size: cover;
  transform: translateY(1px);

}

.svg-cont-down{
  width: 100%;
  background-image: url('/img/svg/svg-1.svg');
  height: 159px;
  background-size: cover;
  transform: translateY(-1px);
}

h1 {
  font-size: 3rem;
}
.cardof {
  width: 25rem;
}
.first {
 left: 18rem;
}
.second {
  right: 4rem;
}
.therd {
  left: 4rem;
}
.forth {
  right: 18rem;
}
.lighter-color {
  opacity: 0.6;
}
.card {
  border-radius: 10px;
}

.button-white {
  padding: 16px 43px !important;
  background-color: #e9d758;
  border: transparent;
  color: #fff;
  border-radius: 32px;
  font-weight: 600;
  transition: 0.3s ease;
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.1);
}
.button-white:hover {
  padding: 16px 43px !important;
  background-color: transparent;
  color: #fff;
  border-radius: 32px;
  border: transparent;
  font-weight: 600;
}

.button {
  padding: 0.5rem 1rem !important;
  background-color: #e56768;
  color: #fff;
  border-radius: 32px;
  border: transparent;
  font-weight: 600;
  transition: 0.3s ease;
  width: fit-content;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
}

.button:hover {
  background-color: #e9d758;
}

.btn-cont {
  transform: translateY(1rem);
}
</style>
