<template>
  <div id="page-toasts">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="showToast('success', 'Hello CafeInit')">Show Success Toast</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="showToast('error', 'Some error message...')">Show Error Toast</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="showToast('warn', 'Stop!')">Show Warn Toast</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="showToast('waiting', '', 10000)">Show Waiting Toast</ci-link-button>
    </div>

    <ci-toast v-model="isShowToast"
      v-bind:type="toastType" v-bind:text="toastText" v-bind:duration="toastDuration"></ci-toast>
  </div>
</template>

<script>
export default {
  name: 'page-toasts',

  data() {
    return {
      isShowToast: false,
      toastType: 'warn',
      toastText: 'I\'m a toast',
      toastDuration: 2000
    }
  },

  methods: {
    showToast(type, text, duration) {
      this.toastType = type
      this.toastText = text

      if (parseInt(duration)) {
        this.toastDuration = duration
      }
      else {
        this.toastDuration = 2000
      }

      this.isShowToast = true
    }
  }
}
</script>
