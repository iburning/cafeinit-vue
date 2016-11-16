<template>
  <div id="page-picker">
    <ci-block>
      <ci-block-body>
        <ci-image-picker width="80" height="80"
          v-on:change="imagePickerOnChange"
          v-on:error="imagePickerOnError"></ci-image>
      </ci-block-body>
    </ci-block>

    <ci-alert
      v-bind:is-show="isShowAlert"
      v-bind:content="alertContent"
      v-on:close="isShowAlert = false"></ci-alert>
  </div>
</template>

<script>
export default {
  name: 'page-picker',

  data() {
    return {
      isShowAlert: false,
      alertContent: '',
      files: []
    }
  },

  methods: {
    imagePickerOnChange(files) {
      console.log('imagePickerOnChange', files)
    },

    imagePickerOnError(err) {
      console.log('imagePickerOnError', err)
      this.alertContent = err.tip
      this.isShowAlert = true
    }
  }
}
</script>

<style scoped>
</style>
