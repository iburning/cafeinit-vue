<template>
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

</template>


<script>
export default {
  // ...
}
</script>
