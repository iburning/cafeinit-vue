<template>
  <div class="page-breadcrumb">
    <ci-breadcrumb v-bind:items="[
        { title: 'Home' },
        { title: 'Items' }
      ]">
    </ci-breadcrumb>

    <ci-breadcrumb v-bind:items="[
        { title: 'Home', to: '/home' },
        { title: 'Items', to: '/Items' }
      ]">
    </ci-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'page-breadcrumb'
}
</script>
