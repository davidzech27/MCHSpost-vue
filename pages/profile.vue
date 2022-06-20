<!--import components, defineEmits(), defineProps(), ref(), computed, methods, watchers-->
<script setup>
    const userData = useUserData()
    const { profile, alerts } = storeToRefs(userData)

    onBeforeMount(() => {
        userData.getProfile()
        userData.getAlerts()
    })



    const name = ref("")
    const photo = ref("")
    const bio = ref("")

    function updateProfile() {
        userData.updateProfile({
            name: name.value,
            photo: photo.value,
            bio: bio.value
        })
        // TODO check if any field is filled, and if not, display an error
        name.value = photo.value = bio.value = null
    }
</script>



<template>
<div class="card">
    <div v-if="userData.isLoaded && userData.isAuthenticated" class="column">
        <img :src="profile.photo" class="rounded-2xl h-28 justify-self-center"/>

        <span class="text-xl justify-self-center">{{ profile.name }}</span>
        <span class="text-xl text-subtext justify-self-center">{{ profile.email }}</span>

        <pre class="text-xl font-sans mx-24">Bio: {{ profile.bio }}</pre>

        <span class="text-xl text-subtext justify-self-end mx-24"> Joined on: {{ new Date(profile.joinedOn).toDateString() }}</span>
    </div>
    <div v-else-if="!userData.isLoaded">
        Loading...
    </div>
    <div v-else-if="!userData.isAuthenticated">
        Not logged in
    </div>
    <br>
    <div class="on-card column">
        <input class="text-field" type="text" v-model="name" placeholder="Your new name"/>
        <input class="text-field" type="text" v-model="photo" placeholder="Your new profile picture"/>
        <textarea class="text-field !h-28 pt-3 resize-none" v-model="bio" placeholder="Your new bio"/>
        <button @click="updateProfile" class="button w-1/2 bg-hover bg-opacity-35 justify-self-center hover:bg-opacity-70 transitions">Submit</button>
    </div>
</div>
</template>



<script>
    import { useUserData } from "~/stores/useUserDataStore"
    import { storeToRefs } from "pinia"
</script>