<template>
  <div id="page-modals">
    <div class="ci-btn-area">
      <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">Show Modal</ci-link-button>
    </div>

    <ci-modal v-if="isShowModal" v-on:close="isShowModal = false">
      <div>customer content</div>
      <div slot="body">Modal Content</div>
    </ci-modal>
  </div>
</template>

<script>
export default {
  name: 'page-modals',

  data() {
    return {
      isShowModal: false
    }
  }
}
</script>
