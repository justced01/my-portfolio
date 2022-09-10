<template>
	<header class="fixed z-10 top-0 w-full h-[100px] shadow md:flex md:flex-row md:justify-between md:items-center md:px-[50px] sm:h-[60px] sm:px-5 sm:flex sm:flex-row sm:items-center">
		<div class="sm:w-full sm:flex sm:flex-row sm:justify-between sm:items-center">
			<a href="/"><img src="@/assets/images/logo.svg" class="md:w-[50px] sm:w-[50px] cursor-pointer"></a>
			<span @click="showMenu()" class="absolute right-7 z-[999] text-3xl cursor-pointer text-primary md:hidden ">
				<ion-icon v-if="show" name="close-outline" class="duration-700 ease-in"></ion-icon>
				<ion-icon v-else name="menu-outline" class="duration-700 ease-in"></ion-icon>
			</span>
		</div>
		<nav :class="[show ? 'right-0' : 'right-[-100%]']" class="font-secondary text-[13px] md:static md:flex md:flex-row md:justify-between md:items-center sm:h-screen sm:w-9/12 sm:absolute sm:top-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-lg sm:bg-[#2E3445] duration-200 ease-in">
			<div v-for="(link, index) in links" :key="link.index" class="my-5 md:my-0">
				<a :href="link.link" class="md:flex md:px-4 hover:text-secondary transition"><span class="text-secondary">0{{index + 1}}.</span>&nbsp;{{link.name}}</a>
			</div>
			<a href="#about" class="px-4 p-2 border border-secondary rounded text-secondary transition md:ml-5 sm:my-6 sm:text-center hover:bg-secondary/10">Resume</a>
		</nav>
	</header>
</template>

<script setup>
import { ref } from "vue";
	const show = ref(false)
	const links = ref([
		{name: "About", link: "#about"},
		{name: "Experience", link: "#work"},
		{name: "Projects", link: "#project"},
		{name: "Contact", link: "#contact"},
	])

	function showMenu(){
		show.value = !show.value
	}
</script>

<style scoped>

</style>

<!-- <header class="fixed z-10 top-0 w-full h-[100px] md:flex md:flex-row md:justify-between md:items-center md:px-[50px] sm:h-screen sm:w-9/12 sm:absolute sm:top-0 sm:right-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-[#2E3445]">
    <div class="">
        <a href="/"><img src="@/assets/images/logo.svg" class="w-[50px] cursor-pointer"></a>
    </div>
    <nav class="md:flex md:flex-row md:justify-between md:items-center sm:flex sm:flex-col sm:justify-between sm: font-secondary text-[13px]">
        <a href="#about" class="md:flex sm:my-6 px-4 hover:text-secondary transition"><span class="text-secondary">01.</span> About</a>
        <a href="#work" class="md:flex sm:my-6 px-4 hover:text-secondary transition"><span class="text-secondary">02.</span> Experience</a>
        <a href="#project" class="md:flex sm:my-6 px-4 hover:text-secondary transition"><span class="text-secondary">03.</span> Projects</a>
        <a href="#contact" class="md:flex sm:my-6 px-4 hover:text-secondary transition"><span class="text-secondary">04.</span> Contact</a>
        <a href="#about" class="px-3 p-2 border border-secondary text-secondary transition sm:my-6 sm:text-center hover:bg-secondary/10">Resume</a>
    </nav>
</header> -->