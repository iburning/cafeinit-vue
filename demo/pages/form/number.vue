<template>
  <div id="page-number">
    <ci-list>
      <ci-list-cell>
        <ci-form-number v-model="x" title="数量"></ci-form-number>
      </ci-list-cell>

      <ci-list-cell>
        <ci-number ref="my-number" v-model="x"></ci-number>
      </ci-list-cell>

      <ci-list-cell>
        <ci-text type="text" v-model="x"></ci-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-button v-on:click="showValue">Show Value</ci-button>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-number',

  data() {
    return {
      x: 50
    }
  },

  methods: {
    showValue() {
      console.log(this.x, this.$refs['my-number'].value)
    }
  }
}
</script>
