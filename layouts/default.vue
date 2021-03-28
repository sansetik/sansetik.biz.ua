<template>
  <div class="main">
    <AppHeaderMenu />
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>

import AppHeaderMenu from '@/components/default/AppHeaderMenu'
import AppFooter from '@/components/default/AppFooter'

export default {
  components: {
    AppHeaderMenu,
    AppFooter
  }
}

</script>

<style scoped>

</style>
