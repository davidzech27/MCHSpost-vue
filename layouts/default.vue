<template>
<div class="dark bg-background text-text font-sans min-h-screen flex">
    <div class="basis-1/4 h-screen sticky top-0 p-8 column">
        <link-card to="/about" class="text-center text-3xl !px-0">
            <span class="text-green">MCHS</span>
            <span class="text-yellow">post</span>
        </link-card>
        <div class="card column">
            <link-button to="/home" class="hover:bg-hover">Home</link-button>
        
            <link-button v-if="userData.isAuthenticated" to="/profile" class="hover:bg-hover">Profile</link-button>
        
            <link-button to="/users" class="hover:opacity-75 bg-green text-background">Users</link-button>
        
            <link-button v-if="userData.isAuthenticated" to="/upload" class="hover:opacity-75 bg-yellow text-background">Upload</link-button>

            <link-button v-if="!userData.isAuthenticated" to="/signin" class="hover:opacity-75 bg-yellow text-background">Sign in</link-button>
        </div>
    </div>
    <div class="basis-1/2 min-h-screen col-span-2 py-8">
        <slot></slot>
    </div>
    <div class="basis-1/4 h-screen relative overflow-y-scroll top-0 p-8 column">
        <div class="sticky">
            <div v-if="userData.isAuthenticated" class="card flex"><!--will probably display profile or sign in. or sign in link should replace upload and profile buttons-->
                <img :src="profile.photo" class="rounded-2xl h-18 w-18 mr-4"/>
                <span class="animate-pulse">profile data</span>
            </div>
            <div class="card h-[32rem] animate-pulse">
                
            </div>
            <div class="card h-96 animate-pulse">
                
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
const userData = useUserData()
const { profile } = storeToRefs(userData)
</script>



<script>
import { useUserData } from "~/stores/useUserDataStore"
import { storeToRefs } from "pinia"

export default {
    head: {
        bodyAttrs: {
            class: "overscroll-none"
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=News+Cycle:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=News+Cycle:wght@700&display=swap');
</style>