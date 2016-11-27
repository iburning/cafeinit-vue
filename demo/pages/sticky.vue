<template>
  <div id="page-sticky">
    <div style="height: 300px;"></div>

    <ci-sticky v-on:sticky="onSticky" v-on:unsticky="onUnsticky">
      <div class="test">STICKY</div>
    </ci-sticky>

    <div style="height: 1200px;"></div>

    <ci-sticky v-on:sticky="onSticky" v-on:unsticky="onUnsticky">
      <div class="test">STICKY 2</div>
    </ci-sticky>

    <div style="height: 1200px;"></div>

  </div>
</template>

<script>
export default {
  name: 'page-sticky',

  methods: {
    onSticky(sender) {
      console.log('onSticky', sender)
    },

    onUnsticky(sender) {
      console.log('onUnsticky', sender)
    }
  }
}
</script>

<style>
.test {
  background-color: #ddd;
  width: 300px;
  height: 50px;
  margin: 0 auto;
}
</style>
