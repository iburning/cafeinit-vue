<template>
  <div class="page-list">
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
  name: 'page-list'
}
</script>
