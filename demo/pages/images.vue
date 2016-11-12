<template>
  <div id="page-images">
    <ci-image v-bind:src="imageSrc" width="300" height="300"></ci-image>

    <ci-image v-bind:src="imageSrc" width="200" height="300"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:src="imageSrc" width="200" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200" mode="aspect-fit"></ci-image>
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
