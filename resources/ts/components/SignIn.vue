<template>
    <h1>Full name</h1>
    <h2></h2>
    <h1>Email</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "SignIn",
    created() {
        this.signIn();
    },
    methods: {
        signIn() {
            return this.$store.dispatch("login")
        }
    }
});
</script>
