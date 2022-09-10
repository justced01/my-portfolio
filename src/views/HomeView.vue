<template>
  <div class="">
    <NavComponent />
    <main class="md:mt-20 sm:pt-20">
      <div id="intro" class="h-screen">
        this is intro
      </div>
      <div id="about" class="h-screen">
        this is about
      </div>
      <div id="work" class="h-screen">
        this is work experience
      </div>
      <div id="project" class="h-screen">
        this is projects
      </div>
      <div id="contact" class="h-screen">
        this is contact
      </div>
    </main>
    <footer class="bg-[blue]">
      this is footer
    </footer>
  </div>
</template>

<script setup>
  import NavComponent from "@/components/NavigationComponent.vue"
</script>

<style>

</style>