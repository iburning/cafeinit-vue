<template>
  <div class="{{ns}}form-group">
    <label class="{{ns}}control-label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <div class="{{ns}}input-group">
      <input type="text" class="{{ns}}form-control" name="{{name}}" />
      <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    model: {
      type: String,
      twoWay: true,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    }
  },

  ready() {
    let options = {
      useCurrent: false,
      showClear: true,
      showClose: false,
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-dot-circle-o',
        clear: 'fa fa-trash',
        close: 'fa fa-times'
      }
    }
  }
}
</script>
