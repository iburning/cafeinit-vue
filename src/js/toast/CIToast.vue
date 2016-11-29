<template>
  <transition name="ci" v-on:after-enter="onAfterEnter">
    <div v-bind:class="ns + 'toast'">
      <div v-bind:class="ns + 'toast-content'">
        <i v-if="type" v-bind:class="[
            ns + 'toast-icon',
            faClassName,
            (type == 'waiting') ? 'ci-icon-spin' : ''
          ]"></i>
        <p v-if="text">{{text}}</p>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
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
    }
  },

  data() {
    return {
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

  methods: {
    onAfterEnter() {
      const that = this

      if (this.duration > 0) {
        this.timer = window.setTimeout(function () {
          that.close()
        }, this.duration)
      }
    },

    close() {
      this.$emit('close')

      if (this.timer) {
        window.clearTimeout(this.timer)
      }
    }
  }
}
</script>
