<template>
    <div class="container">
        <notifications />

        <div class="navbar">
            <!-- Home button -->
            <router-link class="btn icon" to="/">
                <font-awesome-icon icon="home" fixed-width />
            </router-link>

            <!-- Search input -->
            <div class="search">
                <font-awesome-icon icon="search"/>
                <input type="text" placeholder="Buscador"/>
            </div>

            <!-- Log out/in button -->
            <button @click="logFunction" class="btn icon logoutin">
                <font-awesome-icon :icon="'sign-' + (logged ? 'out' : 'in') + '-alt'" fixed-width />
            </button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters("user", [
                "logged"
            ])
        }
    })
    export default class AppTemplate extends Vue {
        logged: boolean
        
        /**
         * 
         */
        async logFunction() {
            if(!this.logged) return this.$router.push("/login");

            try {
                await this.$http.post("/auth/logout");  
                this.$store.commit("user/loadUser", {id:0, username: ""});
                this.$router.push("/login"); 
                this.$notify({type: 'success', text: "Sesión cerrada"})
            } catch (error) {
                
            }
        }
    }   
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 26px;

        > .navbar {
            display: flex;
            align-items: center;
            padding: 0 14px;
            height: 60px;
            border-radius: 20px;
            background: #e3f2fd;

            > .search {
                display: flex;
                height: 40px;
                background: white;
                border-radius: 6px;
                margin-left: 16px;
                overflow: hidden;
                flex: 1;
                align-items: center;

                > svg, input {
                    color: $color-500;
                }

                > svg {
                    margin: 0 15px;
                }

                > input {
                    outline: 0;
                    flex: 1;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    font-weight: 400;
                    font-size: 16px;
                    border: 0;
                }
            }

            > .btn {
                &.logoutin {
                    margin-left: 8px;
                }
            }
        }

        > .content {
            margin-top: 20px;
            flex: 1;
        }
    }
</style>