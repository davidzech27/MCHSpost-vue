<script setup>
const props = defineProps({ post: Object })

const { post } = toRefs(props)
</script>



<template>
<link-card :to="'/post/' + post._id" on-card class="hover:bg-opacity-50">
    <div class="flex items-center w-min" @click.stop="$refs.userLink.$el.click()">
        <img :src="post.poster.photo" class="rounded-xl h-13 w-13 mr-4 transitions hover:opacity-85"/><!--80 or 85 hover opacity-->
        <div class="flex flex-col">
            <span class="hover:(underline-text underline)">{{ post.poster.name }}</span>
            <span class="text-subtext">{{ post.poster.email }}</span>
        </div>
        <nuxt-link :to="'/users/' + post.poster.email" ref="userLink"></nuxt-link>
    </div>
    <br>
    <div>
        <pre class="font-sans">{{ post.text }}</pre>
        <br>
        <span class="text-subtext flex justify-end mr-6">{{ new Date(post.postedOn).toDateString() }}</span>
    </div>
</link-card>
</template>