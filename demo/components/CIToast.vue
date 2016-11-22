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

    <div v-bind:class="[
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

<style lang="less">
.ci-dimmer {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}


.ci-toast-content {
  z-index: 1100;
  position: fixed;
  top: 30%;
  left: 50%;
  min-width: 120px;
  max-width: 80%;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #fff;

  p {
    margin: 0;
  }
}

.ci-toast-icon {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  font-weight: lighter;
  font-size: 48px;
  line-height: 48px;
}

</style>
