<template>
  <div class="page-demo">
    <ci-navigation title="PAGE TITLE">
      <ci-link-button slot="right-item" style="link" size="xs">More</ci-link-button>
    </ci-navigation>

    <ci-image src="http://img14.360buyimg.com/n1/jfs/t2452/131/2370374232/57731/16c803cc/56cd1077Nb76bbf85.jpg"
      v-bind:width="screenWidth" v-bind:height="screenWidth"></ci-image>

    <ci-block class="item-info">
      <ci-block-header>
        <h1>FILA斐乐2016夏季新款女经典款大F LOGO短袖T恤衫|26623157 标准白-WT L</h1>
      </ci-block-header>
      <ci-block-body>

        <ci-list>
          <ci-list-cell accessory="link">
            <strong class="title">{{screenWidth}}</strong>
            <span class="sub-title">link</span>
          </ci-list-cell>

          <ci-list-cell accessory="detail">
            <strong class="title">标题</strong>
            <span class="sub-title">detail</span>
          </ci-list-cell>

          <ci-list-cell accessory="check">
            <strong class="title">标题</strong>
            <span class="sub-title">check</span>
          </ci-list-cell>

          <ci-list-cell>
            <strong class="title">标题</strong>
            <span class="sub-title">sub title</span>
          </ci-list-cell>
        </ci-list>

      </ci-block-body>
    </ci-block>

    <ci-tab-bar
      v-bind:items="[
        { text: '详情' },
        { text: '评价' }
      ]"></ci-tab-bar>

    <ci-list>
      <ci-list-cell accessory="link">
        <strong class="title">标题</strong>
        <span class="sub-title">link</span>
      </ci-list-cell>

      <ci-list-cell accessory="detail">
        <strong class="title">标题</strong>
        <span class="sub-title">detail</span>
      </ci-list-cell>

      <ci-list-cell accessory="check">
        <strong class="title">标题</strong>
        <span class="sub-title">check</span>
      </ci-list-cell>

      <ci-list-cell>
        <strong class="title">标题</strong>
        <span class="sub-title">sub title</span>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-demo',

  data() {
    return {
      screenWidth: screen.width
    }
  }
}
</script>

<style lang="less" scoped>
.item-info {
  .ci-block-header {
    border: none;
  }

  h1 {
    font-weight: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    font-size: 18px;
    height: 48px;
    line-height: 24px;
  }
}

.ci-tab-bar-items {
  margin-bottom: 0;
}
</style>
