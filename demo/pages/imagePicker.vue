<template>
  <div id="page-picker">
    <ci-list>
      <ci-list-cell>
        <ci-image-picker max-size="5" width="80" height="80"
          v-on:change="imagePickerOnChange"
          v-on:error="imagePickerOnError"></ci-image-picker>
      </ci-list-cell>

      <ci-list-cell>
        <ci-image-picker max-size="5" width="80" height="80"
          v-bind:disabled="imagePickerDisabled"
          v-on:click="imagePickerOnClick"
          v-on:change="imagePickerOnChange"
          v-on:error="imagePickerOnError"></ci-image-picker>
      </ci-list-cell>
    </ci-list>

    <ci-toast
      v-if="isShowToast"
      type="waiting"
      text="Upoading..."
      v-on:close="isShowToast = false"></ci-toast>

    <ci-modal class="popup-image"
      v-if="isShowPopupImage"
      v-on:close="isShowPopupImage = false">
      <ci-image width="300" height="300" v-bind:src="popupImageSrc" />
    </ci-alert>
  </div>
</template>

<script>
export default {
  name: 'page-picker',

  data() {
    return {
      isShowToast: false,
      toastText: 'Uploading...',
      isUploading: false,
      imagePickerDisabled: false,

      isShowPopupImage: false,
      popupImageSrc: ''
    }
  },

  watch: {
    isUploading(val) {
      this.isShowToast = val
    }
  },

  methods: {
    imagePickerOnChange(files, sender) {
      var that = this;
      // console.log('imagePickerOnChange', files)
      if (files.length) {
        console.log('imagePickerOnChange', typeof files[0], files[0], sender)
        this.isUploading = true

        // uploading...

        let timer = setTimeout(function () {
          that.isUploading = false
          clearTimeout(timer)
        }, 2000)
      }
    },

    imagePickerOnError(err) {
      // console.log('imagePickerOnError', err)
      this.alertContent = err.tip
      this.isShowAlert = true
    },

    upload(data, params, done) {
      var formData = this.createFormData(data, params)

      $.ajax({
        type: 'POST',
        url: this.uploadApi,
        dataType: 'text',       // 决绝跨域POST问题
        data: formData,
        timeout: 10000,
        processData: false,     // 不将 data 转换为字符串
        contentType: false,     // 默认'application/x-www-form-urlencoded', 通过设置 false 跳过设置默认值
        success: function (res) {
          if (typeof res === 'string') {
            res = JSON.parse(res);
          }
          done(null, res)
        },
        error: function (err) {
          console.log('upload error', err)
          var error = {
            status: err.status,
            tip: err.statusText
          }
          done(error)
        }
      })
    },

    createFormData(file, params) {
      if (file) {
        var formData = new FormData()
        formData.append('file', file)
        if (params) {
          for (var key in params) {
            formData.append(key, params[key])
          }
        }
        return formData
      } else {
        return null
      }
    },

    imagePickerOnClick(files) {
      var that = this;
      if (files.length) {
        console.log('imagePickerOnClick', typeof files[0], files[0])

        var reader = new FileReader()

        reader.onload = function (evt) {
          // console.log('onload', evt)
          var data = evt.target.result
          that.popupImageSrc = data
          that.isShowPopupImage = true
        }

        reader.readAsDataURL(files[0])
      }
    },

    showImage(image) {
      console.log('showImage', typeof image, image)
      // this.popupImageSrc = image
      this.popupImageSrc = 'http://test.img.jiheapp.com/customer/20161116/20161116234558372717004105.jpg'
      this.isShowPopupImage = true
    }
  }
}
</script>

<style lang="less" scoped>
.popup-image {
  background-color: #000;

  .am-modal-dialog {
    width: 300px;
  }
}

.am-modal-dialog {
  width: 300px;
}
</style>
