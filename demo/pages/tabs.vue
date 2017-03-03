<template>
  <div class="page-tab-bar">
    <ci-tabs mode="column" class="ci-fixed-top"
      v-bind:index="0" v-on:click-item="onClickItem">
      <ci-tab class="tab-menu" icon="fa fa-bars" v-on:click="myAction"></ci-tab>
      <ci-tab v-for="item in tabs"
        v-bind:title="item.title"
        v-bind:url="item.url">
      </ci-tab>
      <ci-tab title="Extend">
        <ci-badge v-bind:value="21"></ci-badge>
      </ci-tab>
    </ci-tabs>

    <ci-tabs mode="underline" v-bind:index="0" v-on:click-item="onClickItem">
      <ci-tab v-for="item in tabs"
        v-bind:title="item.title">
      </ci-tab>
    </ci-tabs>

    <ci-tabs mode="bar" class="ci-fixed-bottom"
      v-bind:index="0" v-on:click-item="onClickItem">
      <ci-tab title="Home" icon="fa fa-home" v-on:click="myAction"></ci-tab>
      <ci-tab v-for="item in tabs"
        v-bind:title="item.title"
        v-bind:icon="item.icon"
        v-bind:url="item.url">
      </ci-tab>
    </ci-tabs>
  </div>
</template>

<script>
export default {
  name: 'page-tab-bar',

  data() {
    return {
      tabs: [
        { title: 'Photo', icon: 'fa fa-camera' },
        { title: 'Cafe', icon: 'fa fa-coffee' },
        { title: 'My', icon: 'fa fa-user' }
      ]
    }
  },

  methods: {
    onClickItem(index) {
      console.log('onClickItem', index, this.tabs[index])
    },

    myAction() {
      console.log('myAction')
    }
  }
}
</script>

<style scoped="scoped">
.tab-menu {
  flex: 0.5;
}

sup {
  position: absolute;
  top: 5px;
  right: 10%;
}
</style>
