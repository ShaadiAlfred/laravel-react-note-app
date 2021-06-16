<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" @click="showNav" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <transition
            name="navbar"
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
        >
            <div id="navbar" v-if="isNavVisible" class="navbar-menu is-active">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/">
                        Home
                    </router-link>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <router-link to="/login" class="button is-light">
                                Log in
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: "NavBar",
    data() {
        return {
            isNavVisible: false
        }
    },
    methods: {
        showNav() {
            this.isNavVisible = ! this.isNavVisible;
        }
    },
});
</script>
