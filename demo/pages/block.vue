<template>
  <div class="page-block">
    <ci-block>
      <ci-block-header>
        <h3>Block Header</h3>
        <a href="#">more</a>
      </ci-block-header>
      <ci-block-body>Block Body</ci-block-body>
      <ci-block-footer>Block Footer</ci-block-footer>
    </ci-block>

    <ci-block>
      <ci-block-header>Block Header</ci-block-header>
      <ci-block-body>

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

      </ci-block-body>
    </ci-block>
  </div>
</template>

<script>
export default {
  name: 'page-block'
}
</script>
