<template>
  <div id="modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert = true">Show Alert</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowConfirm = true">Show Confirm</ci-link-button>

    </div>


    <ci-modal v-bind:is-show="isShowModal" v-on:close="isShowModal = false">
      <div>customer content</div>
      <div slot="body">Modal Content</div>
    </ci-modal>

    <ci-alert v-bind:is-show="isShowAlert" v-on:close="onCloseAlert">Alert Content</ci-alert>

    <ci-confirm v-bind:is-show="isShowConfirm"
      v-on:ok="onConfirmOK" v-on:cancel="onConfirmCancel">Are you happy?</ci-confirm>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isShowModal: false,
      isShowAlert: false,
      isShowConfirm: false
    }
  },

  methods: {
    onCloseAlert(sender) {
      console.log('alertOnClose', sender)
      this.isShowAlert = false
    },

    onConfirmOK() {
      console.log('onConfirmOK')
      this.isShowConfirm = false
    },

    onConfirmCancel() {
      console.log('onConfirmCancel')
      this.isShowConfirm = false
    }
  }
}
</script>
