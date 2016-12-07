<template>
  <div id="page-slider">
    <ci-form>
      <ci-list>
        <ci-list-cell>
          <ci-slider ref="my-slider" v-model="x"></ci-slider>
          {{x}}
        </ci-list-cell>

        <ci-list-cell>
          <ci-text type="text" v-model="x"></ci-text>
        </ci-list-cell>

        <ci-list-cell>
          <ci-button v-on:click="showValue">Show Value</ci-button>
        </ci-list-cell>
      </ci-list>
    </ci-from>
  </div>
</template>

<script>
export default {
  name: 'page-slider',

  data() {
    return {
      x: 50,
      x1: 150
    }
  },

  methods: {
    showValue() {
      console.log(this.x, this.$refs['my-slider'].value)
    }
  }
}
</script>
