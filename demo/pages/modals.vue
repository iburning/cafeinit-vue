<template>
  <div id="page-modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert1 = true">Show Alert with Title</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert2 = true">Show Alert</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowConfirm = true">Show Confirm</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowActions = true">Show Actions ({{actionsIndex}})</ci-link-button>
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

    <ci-confirm v-if="isShowConfirm"
      v-on:cancel="confirmOnCancel"
      v-on:ok="confirmOnOK">
      Delete all messages?
    </ci-confirm>

    <ci-actions v-if="isShowActions"
      v-bind:items="[
        { className: 'btn-home', text: 'Home', to: '/home' },
        { className: 'btn-shares', text: 'Shares' },
        { className: 'btn-items', text: 'Items' },
        { className: 'btn-friends', text: 'Friends' }
      ]"
      cancel-text="Cancel"
      v-model="actionsIndex"
      v-on:click-item="actionsOnClickItem"
      v-on:cancel="actionsOnCancel"></ci-actions>
  </div>
</template>

<script>
export default {
  name: 'page-modals',

  data() {
    return {
      isShowModal: false,
      isShowAlert1: false,
      isShowAlert2: false,
      isShowConfirm: false,
      isShowActions: false,
      actionsIndex: 1
    }
  },

  methods: {
    confirmOnCancel() {
      console.log('confirmOnCancel')
      this.isShowConfirm = false
    },

    confirmOnOK() {
      console.log('confirmOnOK')
      this.isShowConfirm = false
    },

    actionsOnClickItem(index, item) {
      console.log('actionsItemOnClick', index, item)
      this.isShowActions = false
    },

    actionsOnCancel() {
      console.log('actionsOnCancel')
      this.isShowActions = false
    }
  }
}
</script>
