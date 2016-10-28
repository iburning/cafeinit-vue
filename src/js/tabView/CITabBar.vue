<template>
  <div class="ci-tab-bar">
    <ul class="ci-tab-bar-items">
      <li class="ci-tab-bar-item" v-for="(item, index) in items"
        v-bind:class="[item.className, {'ci-selected': selectedIndex === index}]"
        v-on:click="clickItem(index, item)">
        <router-link v-if="item.to" v-bind:to="item.to">{{item.text}}</router-link>
        <span v-else>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ci-tab-bar',

  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },

    index: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      selectedIndex: this.index
    }
  },

  methods: {
    clickItem(index, item) {
      this.selectedIndex = index
      this.$emit('click-item', index, item)
    }
  }
}
</script>
