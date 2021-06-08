<template>
    <h1>Main Layout</h1>
    <div>
        <router-view></router-view>
    </div>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "MainLayout",
});
</script>
