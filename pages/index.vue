<script setup>
const { $router } = useNuxtApp()

onMounted(() => {
    $router.push("/home")
})
</script>

<template>
<div class="bg-gradient-to-r from-green to-yellow
            h-screen flex justify-center pt-72
            text-9xl text-text font-black">
    <span class="animate-pulse">MCHSpost</span>
</div>
</template>

<script>
export default {
    layout: "none"
}
</script>