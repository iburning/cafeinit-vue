<template>
  <div id="index">
    <ci-list-header>布局</ci-list-header>
    <ci-list>
      <ci-list-cell accessory="link" to="/block">
        <strong class="title">Block</strong>
        <span class="sub-title">区块</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/gallery">
        <strong class="title">Gallery</strong>
        <span class="sub-title">阵列</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/grid">
        <strong class="title">Grid</strong>
        <span class="sub-title">网格</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/list">
        <strong class="title">List</strong>
        <span class="sub-title">列表</span>
      </ci-list-cell>

      <!-- <ci-list-cell accessory="link" to="/scroll-list">
        <strong class="title">Scroll List</strong>
        <span class="sub-title">滚动列表</span>
      </ci-list-cell> -->

      <!-- <ci-list-cell accessory="link" to="/tables">
        <strong class="title">Tables</strong>
        <span class="sub-title">表格</span>
      </ci-list-cell> -->
    </ci-list>

    <ci-list-header>按钮/表单</ci-list-header>
    <ci-list>
      <ci-list-cell accessory="link" to="/buttons">
        <strong class="title">Buttons</strong>
        <span class="sub-title">按钮</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/form">
        <strong class="title">Form</strong>
        <span class="sub-title">表单</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/form-list">
        <strong class="title">Form List</strong>
        <span class="sub-title">表单列表</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/image-picker">
        <strong class="title">Image Picker</strong>
        <span class="sub-title">图片选择器</span>
      </ci-list-cell>
    </ci-list>

    <ci-list-header>浮层/模态窗</ci-list-header>
    <ci-list>
      <ci-list-cell accessory="link" to="/alert-tip">
        <strong class="title">Alert Tip</strong>
        <span class="sub-title">警告提示</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/modals">
        <strong class="title">Modals</strong>
        <span class="sub-title">模态窗</span>
      </ci-list-cell>
    </ci-list>

    <ci-list-header>导航</ci-list-header>
    <ci-list>
      <ci-list-cell accessory="link" to="/breadcrumb">
        <strong class="title">Breadcrumb</strong>
        <span class="sub-title">面包屑</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/navigation">
        <strong class="title">Navigation</strong>
        <span class="sub-title">导航</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/pagination">
        <strong class="title">Pagination</strong>
        <span class="sub-title">翻页导航</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/tab-bar">
        <strong class="title">TabBar</strong>
        <span class="sub-title">标签导航</span>
      </ci-list-cell>

      <!-- <ci-list-cell accessory="link" to="/tree-nav">
        <strong class="title">TreeNav</strong>
        <span class="sub-title">树形导航</span>
      </ci-list-cell> -->
    </ci-list>

    <ci-list-header>其他</ci-list-header>
    <ci-list>
      <ci-list-cell accessory="link" to="/images">
        <strong class="title">Images</strong>
        <span class="sub-title">图片</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/loading">
        <strong class="title">Loading</strong>
        <span class="sub-title">等待</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" to="/page-demo">
        <strong class="title">Page Demo</strong>
        <span class="sub-title">页面实例</span>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
