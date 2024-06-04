<script>
import AppContentSec1 from './AppContentSec1.vue';
import AppContentSec2 from './AppContentSec2.vue';
import AppContentSec3 from './AppContentSec3.vue';
import NewsLetterBanner from './NewsLetterBanner.vue';


export default {
  components: {
    AppContentSec1,
    AppContentSec2,
    AppContentSec3,
    NewsLetterBanner,

  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }


}
</script>


<template>
  <div class="my-bg-white my-black ">
    <main>
      <div class="container-lg p-5">
        <AppContentSec1 />
        <AppContentSec2 />
        <AppContentSec3 class="pt-5" />
      </div>
      <NewsLetterBanner />
    </main>
  </div>
</template>


<style scoped>
main {
  margin: auto;
}

main>* {
  margin-top: 2rem;
}
</style>
