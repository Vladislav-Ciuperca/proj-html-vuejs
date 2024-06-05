<script>
import AppContentSec1 from './AppContentSec1.vue';
import AppContentSec2 from './AppContentSec2.vue';
import AppContentSec3 from './AppContentSec3.vue';


export default {
  components: {
    AppContentSec1,
    AppContentSec2,
    AppContentSec3,
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
        <AppContentSec1 />
        <AppContentSec2 />
        <AppContentSec3 class="pt-5" />
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
