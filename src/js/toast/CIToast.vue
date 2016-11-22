<template>
  <div tabindex="-1"
    v-show="isActive"
    v-bind:class="[
      ns + 'toast',
      isActive ? (ns + 'toast-active') : ''
    ]">
    <div v-bind:class="ns + 'toast-content'">
      <i v-if="type" v-bind:class="[
          ns + 'toast-icon',
          faClassName,
          (type == 'waiting') ? 'ci-icon-spin' : ''
        ]"></i>
      <p v-if="text">{{text}}</p>
    </div>

    <div v-if="isShowDimmer" v-bind:class="[
        ns + 'dimmer',
        isActive ? (ns + 'active') : ''
      ]"></div>
  </div>
</template>

<script>
export default {
  name: 'ci-toast',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    value: {
      type: Boolean,
      default: false
    },

    type: String,
    text: [String, Number],

    duration: {
      type: Number,
      default: 2000
    },

    isShowDimmer: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: this.value,
      timer: null
    }
  },

  computed: {
    faClassName() {
      const names = {
        success: 'check',
        error: 'close',
        warn: 'exclamation',
        waiting: 'circle-o-notch'
      }

      let name = names[this.type];
      return name ? ('fa fa-' + name) : ''
    }
  },

  watch: {
    value(val) {
      if (val) {
        this.show()
      }
      else {
        this.hide()
      }
    }
  },

  methods: {
    show() {
      const that = this
      this.isActive = true
      this.$emit('input', this.isActive)
      this.$emit('show', this)

      if (this.duration > 0) {
        this.timer = window.setTimeout(function () {
          that.hide()
        }, this.duration)
      }
    },

    hide() {
      this.isActive = false
      this.$emit('input', this.isActive)
      this.$emit('hide', this)

      if (this.timer) {
        window.clearTimeout(this.timer)
      }
    }
  }
}
</script>
