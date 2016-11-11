<template>
  <div id="page-loading">
    <ci-loading v-if="isLoading"></ci-loading>

    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block"
        v-on:click="isLoading = !isLoading">{{status}}</ci-link-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-loading',

  data() {
    return {
      isLoading: true
    }
  },

  computed: {
    status() {
      if (this.isLoading) {
        return 'Loading'
      }
      else {
        return 'Download'
      }
    }
  }
}
</script>
