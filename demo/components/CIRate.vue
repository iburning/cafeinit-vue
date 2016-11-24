<template>
  <div v-bind:class="ns + 'rate'">
    <span v-for="item in items" v-bind:class="[
        ns + 'rate-item',
        item.decimal ? ns + 'rate-item-half' : '',
        item.isOn ? ns + 'rate-item-on' : ''
      ]"
      v-bind:style="{ cursor: 'pointer' }"
      v-on:click="onClickItem(item.value)">
      <i class="fa fa-star"></i>
      <i v-if="item.decimal" class="fa fa-star"
        v-bind:style="{ width: item.decimal + '%' }"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ci-rate',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    value: {
      type: [Number, String],
      default: 0
    },

    max: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  },

  computed: {
    items() {
      let items = [];
      for (let i = 1; i <= this.max; i++) {
        let decimal = 1 - (i - this.currentValue)
        if (decimal >= 0.5 && decimal < 1) {
          // decimal *= 100
          decimal = 50
        }
        else {
          decimal = 0
        }

        items.push({
          value: i,
          decimal: decimal,
          isOn: i <= this.currentValue
        })
      }
      return items
    }
  },

  methods: {
    onClickItem(value) {
      // console.log('CIRate.onClickItem', score)
      this.currentValue = value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="less" scoped>
@width: 30px;

.ci-rate {
  clear: both;
  height: @width;
}

.ci-rate-item {
  display: block;
  position: relative;
  float: left;
  width: @width;
  height: @width;
  text-align: center;
  font-size: @width;
  line-height: @width;

  i {
    position: absolute;
    left: 0;
    top: 0;
    color: #ddd;
  }
}

.ci-rate-item-on {
  i {
    color: #ff3366;
  }
}

.ci-rate-item-half {
  i:first-child {
    color: #ddd;
  }

  i:last-child {
    overflow: hidden;
    color: #ff3366;
  }
}
</style>
