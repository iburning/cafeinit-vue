<template>
  <div id="modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
      <ci-link-button style="primary" block="block" v-on:click="isShowAlert = true">{{isShowAlert}}</ci-link-button>
    </div>


    <ci-modal v-bind:is-show="isShowModal" v-on:close="isShowModal = false">
      <div>customer content</div>
      <div slot="body">Modal Content</div>
    </ci-modal>

    <!-- <div class="am-modal am-modal-no-btn am-modal-active" tabindex="-1" style="display: block;">
      <div class="am-modal-dialog">
        <div class="am-modal-hd">Modal 标题</div>
        <div class="am-modal-bd">
          Modal 内容。本 Modal 无法通过遮罩层关闭
        </div>
      </div>
    </div> -->

    <ci-alert v-bind:is-show="isShowAlert" v-on:close="onCloseAlert">Alert Content</ci-alert>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isShowModal: false,
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
