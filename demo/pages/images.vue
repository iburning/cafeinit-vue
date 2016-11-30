<template>
  <div id="page-images">
    <ci-image v-bind:is-lazy="true" v-bind:src="imageSrc"
      width="300" height="300" radius='25'
      v-on:click="imageOnClick"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200" radius='20'></ci-image>

    <ci-image v-bind:src="imageSrc" width="200" height="300" radius='10'></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:src="imageSrc" width="300" height="200" mode="aspect-fit"></ci-image>

    <ci-image v-bind:is-lazy="true" v-bind:src="imageSrc" width="200" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:is-lazy="true" src="https://vuejs.org/images/logo.png"
      width="200" height="300" mode="aspect-fit" radius='10'></ci-image>

    <ci-image v-bind:is-lazy="true"
      src="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" mode="aspect-fit"></ci-image>

    <ci-image v-bind:is-lazy="true"
      src="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" radius='10'></ci-image>

  </div>
</template>

<script>
export default {
  name: 'page-images',

  data() {
    return {
      imageSrc: 'https://img30.360buyimg.com/popWaterMark/jfs/t3034/278/2345638110/141275/166e9a8f/57d67b45N2991179b.jpg'
    }
  },

  methods: {
    imageOnClick: function (evt) {
      console.log('imageOnClick', evt, this)
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
