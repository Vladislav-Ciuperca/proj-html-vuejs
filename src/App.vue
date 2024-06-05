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

  <AppContent3 />
  <NewsLetterBanner class="mt-5" />
  <AppContentCarousel />
  <AppFooterCarousel />

</template>


<style scoped></style>
