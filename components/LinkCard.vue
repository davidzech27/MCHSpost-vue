<script setup>
const props = defineProps({ to: String, 'on-card': Boolean })
</script>


<template>
<div @click="$refs.link.$el.click()" class="transitions hover:bg-hover cursor-pointer" :class="onCard ? 'on-card' : 'card'">
    <nuxt-link :to="props.to" ref="link"></nuxt-link>
    <slot></slot>
</div>
</template>