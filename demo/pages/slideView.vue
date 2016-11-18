<template>
  <div id="page-slide-view">
    <ci-slide-view class="banner" ref="my-slide-view"
      v-bind:duration="300"
      v-bind:isAutoplay="false"
      v-bind:isLoop="false"
      v-bind:index="0"
      v-bind:item-width="itemWidth"
      v-bind:item-height="itemHeight"
      v-bind:isShowButtons="true"
      v-on:did-change="mySlideViewDidChange">
      <ci-slide-view-item class="box-item" v-for="item in items">
        <ci-image v-bind:src="item.banner" v-bind:width="itemWidth" v-bind:height="itemHeight"></ci-image>
      </ci-slide-view-item>
    </ci-slide-view>

    <span>{{currentIndex}} / {{itemCount}}</span>
  </div>
</template>

<script>
export default {
  name: 'page-slide-view',

  data() {
    return {
      itemWidth: 300,
      itemHeight: 150,
      items: [
        // { banner: 'http://i3.mifile.cn/a4/ac593fe5-c5ab-4541-9526-f113b03ee213' },
        { banner: 'http://i3.mifile.cn/a4/91214487-3c8c-4fa5-b27d-1fea1e2f8773' },
        { banner: 'http://i3.mifile.cn/a4/d1e41f4a-2fb3-42cc-86be-4f4be9e046df' },
        { banner: 'http://i3.mifile.cn/a4/a8c14776-3d56-484f-8d5a-958693d3afdc' },
        { banner: 'http://i3.mifile.cn/a4/592af129-b3ea-487f-9fe3-848c588fa681' },
        { banner: 'http://i3.mifile.cn/a4/ac593fe5-c5ab-4541-9526-f113b03ee213' },
        // { banner: 'http://i3.mifile.cn/a4/91214487-3c8c-4fa5-b27d-1fea1e2f8773' }
      ],

      itemCount: 0,
      currentIndex: 0
    }
  },

  mounted() {
    this.itemWidth = window.innerWidth;
    this.itemHeight = parseInt(this.itemWidth * 0.375)

    let mySlideView = this.$refs['my-slide-view']
    this.itemCount = mySlideView.itemCount
  },

  methods: {
    mySlideViewDidChange(index, lastIndex) {
      console.log('mySlideViewDidChange', index, lastIndex)
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less">
.ci-slide-view {
  position: relative;
}

.ci-slide-view-item {
  float: left;
}

.ci-slide-view-prev,
.ci-slide-view-next {
  display: block;
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  background-color: #fff;
  text-align: center;
  line-height: 30px;
  opacity: 0.5;
}

.ci-slide-view-prev {
  left: 10px;
}

.ci-slide-view-next {
  right: 10px;
}

.ci-slide-view-page {
  display: block;
  position: absolute;
  right: 10px;
  top: 5px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  opacity: 0.5;
}
</style>
