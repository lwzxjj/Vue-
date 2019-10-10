<template>
  <div>
    <header />
    <div class="w1200">
      <!-- Main Content -->
      <router-view></router-view>
    </div>
    <footer />
  </div>
</template>

<script>
import header from '../components/Header'
import footer from '../components/Footer'
export default {
  data () {
    return {}
  },
  components: {
    'header': header,
    'footer': footer
  }
}
</script>
