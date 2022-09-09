<template>
  <div class="relative bg-body">
    <LogoLoader v-if="show" />
    <Home v-else />
  </div>
</template>

<script setup>
  import LogoLoader from "@/components/LoaderLogoComponent.vue"
  import Home from "@/views/HomeView.vue"
  import { onMounted, ref } from 'vue'

  const show = ref(true)

  onMounted(() => {
    showLoader()
  })

  function showLoader(){
    setTimeout(() => {
      show.value = false
    }, 3000)
  }

</script>

<style scoped>
body {
  background-color: #242A37;
}
</style>
