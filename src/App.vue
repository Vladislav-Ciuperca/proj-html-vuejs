<script>
import AppContent3 from './components/AppContent3.vue'
import NewsLetterBanner from './components/NewsLetterBanner.vue';
import AppContentCarousel from './components/AppContentCarousel.vue';
import AppFooterCarousel from './components/AppFooterCarousel.vue';


export default {
  components: {
    AppContent3,
    NewsLetterBanner,
    AppContentCarousel,
    AppFooterCarousel,
  },
  data() {
    return {
      appTitle: "proj-html-vuejs",
    }
  },
  methods: {
  },
  created() {

  },
  mounted() {

  }
}
</script>


<template>

  <div class="container-lg ">
    <AppContent3 />
  </div>

  <NewsLetterBanner class="mt-5" />

  <div class="container-lg">
    <AppContentCarousel />
    <AppFooterCarousel />
  </div>

</template>


<style scoped></style>
