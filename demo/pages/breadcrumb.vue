<template>
  <div class="page-breadcrumb">
    <ci-breadcrumb v-bind:items="[
        { title: 'Home' },
        { title: 'Items' }
      ]">
    </ci-breadcrumb>

    <ci-breadcrumb v-bind:items="[
        { title: 'Home', link: { path: '/home' } },
        { title: 'Items', link: { path: '/Items' } }
      ]">
    </ci-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'page-breadcrumb'
}
</script>
