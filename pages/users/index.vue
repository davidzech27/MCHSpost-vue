<!--import components, defineEmits(), defineProps(), ref(), computed, methods, watchers-->
<script setup>
    const [apiGet, apiPost] = [useApiGet(), useApiPost()]


    const users = ref([])
    const usersLoaded = ref(false)

    const alerts = ref([])

    onBeforeMount(async () => {
        users.value = await apiGet("/user/all")

        usersLoaded.value = true
    })

    onBeforeMount(async () => {
        alerts.value = await apiGet("/alerts")
    })

    

</script>


<template>
<div>
    <div v-if="usersLoaded">
        <p v-for="user in users" :key="user.email">
            {{ user.name }}
            <br>
            {{ user.email }}
            <br>
            <img :src="user.photo"/>
            <br>
            <pre>{{ user.bio }}</pre>
            <br>
            {{ new Date(user.joinedOn).toDateString() }}
        </p>
    </div>


</div>
</template>