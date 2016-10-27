<template>
  <div class="app">
    <ci-list>
      <ci-list-cell accessory="link" vv-link="{path: '/grid'}">
        <strong class="title">Grid</strong>
        <span class="sub-title">网格</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/block'}">
        <strong class="title">Block</strong>
        <span class="sub-title">区块</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/gallery'}">
        <strong class="title">Gallery</strong>
        <span class="sub-title">阵列</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/list'}">
        <strong class="title">List</strong>
        <span class="sub-title">列表</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/scroll-list'}">
        <strong class="title">Scroll List</strong>
        <span class="sub-title">滚动列表</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/breadcrumb'}">
        <strong class="title">Breadcrumb</strong>
        <span class="sub-title">面包屑</span>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell accessory="link" vv-link="{path: '/modals'}">
        <strong class="title">Modals</strong>
        <span class="sub-title">模态窗</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/alert-tip'}">
        <strong class="title">Alert Tip</strong>
        <span class="sub-title">警告提示</span>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell accessory="link" vv-link="{path: '/buttons'}">
        <strong class="title">Buttons</strong>
        <span class="sub-title">按钮</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/tables'}">
        <strong class="title">Tables</strong>
        <span class="sub-title">表格</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/form'}">
        <strong class="title">Form</strong>
        <span class="sub-title">表单</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/datetime-picker'}">
        <strong class="title">Datetime Picker</strong>
        <span class="sub-title">时间日期选择器</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/form-list'}">
        <strong class="title">Form List</strong>
        <span class="sub-title">表单列表</span>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell accessory="link" vv-link="{path: '/tab-bar'}">
        <strong class="title">TabBar</strong>
        <span class="sub-title">标签导航</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/tree-nav'}">
        <strong class="title">TreeNav</strong>
        <span class="sub-title">树形导航</span>
      </ci-list-cell>

      <ci-list-cell accessory="link" vv-link="{path: '/pagination'}">
        <strong class="title">Pagination</strong>
        <span class="sub-title">翻页导航</span>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  data() {
    return {
      message: 'hello vue'
    }
  }
  // components: {
  //   Hello
  // }
}
</script>
