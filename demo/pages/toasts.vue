<template>
  <div id="page-toasts">
    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="showToast('success', 'Hello CafeInit', 0)">Show Success Toast</ci-button>
      <ci-button style="primary" block="block" v-on:click="showToast('error', 'Some error message...')">Show Error Toast</ci-button>
      <ci-button style="primary" block="block" v-on:click="showToast('warn', 'Stop!')">Show Warn Toast</ci-button>
      <ci-button style="primary" block="block" v-on:click="showToast('waiting', '', 10000)">Show Waiting Toast</ci-button>
      <ci-button style="primary" block="block" v-on:click="showToast('', 'Message only, long long long... long long long...')">Show Text Toast</ci-button>
    </div>

    <ci-toast v-if="isShowToast"
      v-bind:type="toastType" v-bind:text="toastText" v-bind:duration="toastDuration"
      v-on:close="isShowToast = false"></ci-toast>
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

      if (parseInt(duration) >= 0) {
        this.toastDuration = parseInt(duration)
      }
      else {
        this.toastDuration = 2000
      }

      this.isShowToast = true
    }
  }
}
</script>
