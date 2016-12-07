<template>
  <div id="page-number">
    <ci-form>
      <ci-list>
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
    </ci-from>
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
