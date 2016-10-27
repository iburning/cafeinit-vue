<template>
  <div class="page-alert-tips">
    <ci-alert-tip style="success" v-bind:is-show.sync="true">success</ci-alert-tip>
    <ci-alert-tip style="info" v-bind:is-show.sync="true">success</ci-alert-tip>
    <ci-alert-tip style="warning" v-bind:is-show.sync="true">warning</ci-alert-tip>
    <ci-alert-tip style="danger" v-bind:is-show.sync="true">danger</ci-alert-tip>

    <ci-alert-tip style="info" v-ref:my-alert-tip>
      This tip will be hiden after 2 seconds.
    </ci-alert-tip>

    <ci-link-button style="primary" block="block" v-on:click="showTip()">Show alert tip</ci-link-button>
  </div>
</template>

<script>
export default {
  name: 'page-alert-tips',

  methods: {
    showTip() {
      this.$refs.myAlertTip.show()
    }
  }
}
</script>
