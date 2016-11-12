<template>
  <div id="page-images">
    <ci-image v-bind:src="imageSrc" width="300" height="300" radius='25'></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200" radius='20'></ci-image>

    <ci-image v-bind:src="imageSrc" width="200" height="300" radius='10'></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200" mode="aspect-fit"></ci-image>

    <ci-image v-bind:src="imageSrc" width="200" height="300" mode="aspect-fit"></ci-image>
  </div>
</template>

<script>
export default {
  name: 'page-images',

  data() {
    return {
      imageSrc: 'https://img30.360buyimg.com/popWaterMark/jfs/t3034/278/2345638110/141275/166e9a8f/57d67b45N2991179b.jpg'
    }
  }
}
</script>

<style scoped>
.ci-image {
  margin: 30px auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
