<template>
  <div id="modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="showAlert">Show Alert</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="showAlert2">Show Alert 2</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowConfirm = true">Show Confirm</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowActions = true">Show Actions</ci-link-button>
    </div>


    <ci-modal v-bind:is-show="isShowModal" v-on:close="isShowModal = false">
      <div>customer content</div>
      <div slot="body">Modal Content</div>
    </ci-modal>

    <ci-alert ref="my-alert" v-bind:is-show="isShowAlert" v-bind:content="alertContent" v-on:close="onCloseAlert">Alert Content</ci-alert>

    <ci-confirm v-bind:is-show="isShowConfirm"
      v-on:ok="onConfirmOK" v-on:cancel="onConfirmCancel">Are you happy?</ci-confirm>

    <ci-actions v-bind:is-show="isShowActions"
      v-bind:items="[
        { className: 'btn-home', text: 'Home', to: '/home' },
        { className: 'btn-shares', text: 'Shares' },
        { className: 'btn-items', text: 'Items' },
        { className: 'btn-friends', text: 'Friends' }
      ]"
      cancel-text="Cancel"
      v-on:click-item="actionsOnClickItem"
      v-on:cancel="actionsOnCancel"></ci-actions>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isShowModal: false,
      isShowAlert: false,
      isShowConfirm: false,
      isShowActions: false,

      alertContent: 'Hello Alert'
    }
  },

  methods: {
    showAlert() {
      this.alertContent = 'HELLO ALERT';
      this.isShowAlert = true;
    },

    showAlert2() {
      this.$refs['my-alert'].content = 'HELLO ALERT 2';
      this.isShowAlert = true;
    },

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
    },

    actionsOnClickItem(index, item) {
      console.log('actionsOnClickItem', index, item)
      this.isShowActions = false
    },

    actionsOnCancel(sender) {
      console.log('actionsOnCancel', sender)
      this.isShowActions = false
    }
  }
}
</script>
