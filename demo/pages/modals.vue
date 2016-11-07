<template>
  <div id="modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert = true">{{isShowAlert}}</ci-link-button>
    </div>

    <ci-alert v-bind:is-show="isShowAlert" v-on:close="onCloseAlert">Alert Content</ci-alert>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isShowAlert: false
    }
  },

  methods: {
    onCloseAlert(sender) {
      console.log('alertOnClose', sender)
      this.isShowAlert = false
    }
  }
}
</script>
