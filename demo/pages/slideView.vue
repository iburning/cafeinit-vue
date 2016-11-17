<template>
  <div class="page-slide-view">
    <div class="box">
      <ci-slide-view ref="my-slide-view"
        v-bind:isAutoplay="false"
        v-bind:index="2"
        v-bind:item-width="itemWidth"
        v-bind:item-height="itemHeight">
        <ci-slide-view-item class="box-item">A</ci-slide-view-item>
        <ci-slide-view-item class="box-item">B</ci-slide-view-item>
        <ci-slide-view-item class="box-item">C</ci-slide-view-item>
        <ci-slide-view-item class="box-item">D</ci-slide-view-item>
        <ci-slide-view-item class="box-item">E</ci-slide-view-item>
        <ci-slide-view-item class="box-item">F</ci-slide-view-item>
      </ci-slide-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-slide-view',

  data() {
    return {
      itemWidth: 300,
      itemHeight: 100
    }
  },

  mounted() {
    // const mySlideView = this.$refs['my-slide-view']
    // // mySlideView.move(-3)
    // // mySlideView.moveTo(11)
  }
}
</script>

<style lang="less">
.box {
  width: 300px + 10px;
  margin: 50px auto;
  border: 5px solid #ddd;

  .box-item {
    width: 200px;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    line-height: 100px;
  }
}

@item-color: #52b888;
.ci-slide-view {
  position: relative;
}

.ci-slide-view-content {
  background-color: @item-color;
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
