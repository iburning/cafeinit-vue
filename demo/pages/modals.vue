<template>
  <div id="page-modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert1 = true">Show Alert with Title</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert2 = true">Show Alert</ci-link-button>
    </div>

    <ci-modal v-if="isShowModal" v-on:close="isShowModal = false">
      <div>customer content</div>
      <div slot="body">Modal Content</div>
    </ci-modal>

    <ci-alert v-if="isShowAlert1" v-on:close="isShowAlert1 = false"
      title="Alert Title">
      Alert with title
    </ci-alert>

    <ci-alert v-if="isShowAlert2" v-on:close="isShowAlert2 = false"
      v-bind:is-close-via-dimmer="false">
      My Alert Content
    </ci-alert>
  </div>
</template>

<script>
export default {
  name: 'page-modals',

  data() {
    return {
      isShowModal: false,
      isShowAlert1: false,
      isShowAlert2: false
    }
  }
}
</script>
