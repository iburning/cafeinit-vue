<template>
  <div class="ci-image-picker" v-bind:style="{
      width: width + 'px',
      height: height + 'px'
    }">
    <slot><i class="fa fa-plus ci-icon-plus"></i></slot>
    <div class="ci-image-picker-preview" v-if="isPreview"
      v-bind:style="{
        'background-image': 'url(' + previewSrc + ')'
      }"></div>
    <input type="file" class="picker" accept="image/jpeg,image/x-png"
      v-on:click="onClick"
      v-on:change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'ci-image-picker',

  props: {
    src: String,

    index: {
      type: Number,
      default: 0
    },

    maxCount: {
      type: [Number, String],
      default: 1
    },

    maxSize: {
      type: [Number, String],
      default: 2
    },

    width: {
      type: [Number, String],
      default: 100
    },

    height: {
      type: [Number, String],
      default: 100
    },

    isPreview: {
      type: Boolean,
      default: true
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      files: [],
      previewSrc: this.src
    }
  },

  computed: {
    maxSizeBit() {
      return this.maxSize * 1024 * 1024
    }
  },

  watch: {
    src(val, oldVal) {
      if (val != oldVal) {
        this.previewSrc = val
      }
    }
  },

  methods: {
    onClick(evt) {
      if (this.disabled) {
        evt.preventDefault()
      }
      this.$emit('click', this.files, this.index)
    },

    onChange(evt) {
      var files = evt.target.files

      if (files.length) {
        this.files = files
        this.checkFiles((err) => {
          if (err) {
            this.$emit('error', err, this.index)
          }
          else {
            if (this.isPreview) {
              this.readImage(files[0], (data) => {
                this.previewSrc = data;
              })
            }

            this.$emit('change', files, this.index)
          }
        })
      }
    },

    checkFiles(done) {
      var errors = [];

      if (this.files.length > this.maxCount) {
        errors.push({
          code: 100,
          tip: '最多只能选择' + this.maxCount + '张图片'
        })
      }

      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        if (file.size > this.maxSizeBit) {
          var tip = '图片超过了' + this.maxSize + 'MB'
          if (i > 0) {
            tip = '第' + (i + 1) + '张' + tip
          }
          errors.push({
            code: 101,
            tip: tip
          })
          continue
        }
      }

      if (errors.length) {
        done(errors[0])
      }
      else {
        done()
      }
    },

    readImage(file, done) {
      var reader = new FileReader()

      reader.onload = (evt) => {
        // console.log('onload', evt)
        var data = evt.target.result
        if (data.indexOf('data:;') === 0) {
          data = data.replace('data:;', 'data:image/jpeg;')
        }
        done(data);
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>
