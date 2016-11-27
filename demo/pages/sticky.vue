<template>
  <div id="page-sticky">
    <div style="height: 300px;"></div>

    <ci-sticky>
      <div class="test">STICKY</div>
    </ci-sticky>

    <div style="height: 1200px;"></div>
  </div>
</template>

<script>
import CISticky from '../components/CISticky'

export default {
  name: 'page-sticky',

  components: {
    'ci-sticky': CISticky
  }
}
</script>

<style>
.test {
  background-color: #ddd;
  width: 300px;
  height: 50px;
  margin: 0 auto;
}
</style>
