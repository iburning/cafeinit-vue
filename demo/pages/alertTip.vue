<template>
  <div id="alert-tips">
    <ci-alert-tip style="success" v-bind:is-show="true">success</ci-alert-tip>
    <ci-alert-tip style="info" v-bind:is-show="true">success</ci-alert-tip>
    <ci-alert-tip style="warning" v-bind:is-show="true">warning</ci-alert-tip>
    <ci-alert-tip style="danger" v-bind:is-show="true">danger</ci-alert-tip>

    <ci-alert-tip style="info" ref="my-alert-tip">
      This tip will be hiden after 2 seconds.
    </ci-alert-tip>

    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="showTip">Show alert tip</ci-link-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-tips',

  methods: {
    showTip() {
      this.$refs['my-alert-tip'].show()
    }
  }
}
</script>
