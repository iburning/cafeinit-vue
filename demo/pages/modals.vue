<template>
  <div class="ci-btn-area">
    <ci-link-button style="primary" block="block" v-on:click="isShowAlert = true">点击显示Alert</ci-link-button>
    <ci-link-button style="primary" block="block" v-on:click="isShowAlert2 = true">点击显示Alert2</ci-link-button>
    <ci-link-button style="primary" block="block" href="javascript:;" v-on:click="isShowConfirm = true">点击显示Confirm</ci-link-button>
    <ci-link-button style="primary" block="block" href="javascript:;" v-on:click="isShowActions = true">点击显示Actions</ci-link-button>
  </div>


  <ci-alert v-bind:is-show.sync="isShowAlert" v-on:close="alertOnClose">Alert Content</ci-alert>

  <ci-alert
    size="lg"
    content="<strong>Alert2 Content</strong>"
    v-bind:is-show.sync="isShowAlert2"
    v-bind:is-close-via-dimmer="false"
    v-on:close="alertOnClose"></ci-alert>

  <ci-confirm v-bind:is-show.sync="isShowConfirm" v-on:ok="confirmOnOK" v-on:cancel="confirmOnCancel">
    Do you want quit?
  </ci-confirm>

  <ci-actions v-bind:is-show.sync="isShowActions"
    v-bind:items="[
      { className: 'btn-shares', text: 'Shares' },
      { className: 'btn-items', text: 'Items' },
      { className: 'btn-friends', text: 'Friends' }
    ]"
    cancel-text="Cancel"
    v-on:click-item="actionsOnClickItem"></ci-actions>
</template>


<script>
export default {
  data() {
    return {
      isShowAlert: false,
      isShowAlert2: false,
      isShowConfirm: false,
      isShowActions: false,
      // actionsItems: [
      //   { className: 'btn-shares', text: 'Shares' },
      //   { className: 'btn-items', text: 'Items' },
      //   { className: 'btn-friends', text: 'Friends' }
      // ]
    }
  },

  ready() {
    // ...
  },

  methods: {
    alertOnClose() {
      console.log('alertOnClose')
    },

    confirmOnOK() {
      console.log('confirmOK')
    },

    confirmOnCancel() {
      console.log('confirmCancel')
    },

    actionsOnClickItem(index, item) {
      console.log('actionsOnClickItem', index, item)
    }
  }
}
</script>
