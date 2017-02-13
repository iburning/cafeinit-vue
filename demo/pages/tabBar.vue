<template>
  <div class="page-tab-bar">
    <ci-tab-bar ref="myTabBar"
      v-bind:items="tabBarItems"
      v-bind:index="1"
      v-on:click-item="onClickItem">
    </ci-tab-bar>

    <ci-tab-bar class="ci-fixed-bottom">
      <li class="ci-tab-bar-item">
        <a href="javascript:;">AAA</a>
      </li>
      <li class="ci-tab-bar-item">
        <a href="javascript:;">BBB</a>
      </li>
    </ci-tab-bar>
  </div>
</template>

<script>
export default {
  name: 'page-tab-bar',

  data() {
    return {
      tabBarItems: [
        { className: 'btn-shares', text: 'Shares', to: '/shares' },
        { className: 'btn-items', text: 'Items' },
        { className: 'btn-friends', text: 'Friends' }
      ]
    }
  },

  methods: {
    onClickItem(index, item) {
      console.log('onClickItem', index, item)
    }
  }
}
</script>
