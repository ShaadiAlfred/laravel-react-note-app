<template>
    <NavBar />
    <section class="section">
        <div class="container">
            <h1 class="title">
                Hello World
            </h1>
            <p class="subtitle">
                My first website with <strong>Bulma</strong>!
            </p>
            <div>
                <div>
                    <router-view></router-view>
                </div>
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/login">Login</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar";

export default defineComponent({
    name: "MainLayout",
    components: {NavBar},
});
</script>
