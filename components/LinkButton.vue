<script setup>
const props = defineProps({ to: String})
</script>


<template>
<button @click="$refs.link.$el.click()" class="button transitions">
    <nuxt-link :to="props.to" ref="link"></nuxt-link>
    <slot></slot>
</button>
</template>