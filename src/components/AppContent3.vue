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
    <main class="container-lg p-5">
      <AppContentSec1 />
      <AppContentSec2 />
      <AppContentSec3 />
    </main>
  </div>
</template>


<style scoped>
main {
  /* width: 1200px; */
  border: 2px dashed red;
  margin: auto;
  padding: 1rem;
}
</style>
