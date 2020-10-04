<template>
    <div class="content">
        <div class="box c-column h-center">
            <form class="c-column" @submit.prevent="(type == 'signup' ? register : login)()">
                <font-awesome-icon icon="sign-in-alt" />

                <label class="c-column">
                    <span>Nombre de usuario</span>
                    <input type="text" v-model="user.username" maxlength="60" required/>
                </label>

                <label class="c-column" v-if="type == 'signup'">
                    <span>Correo electronico</span>
                    <input type="email" v-model="user.email" required/>
                </label>

                <label class="c-column">
                    <span>Contraseña</span>
                    <input type="password" v-model="user.password" required/>
                </label>

                <button class="btn" type="submit">Enviar</button>
            </form>

            <a style="cursor:pointer" @click="type = (type == 'login' ? 'signup': 'login')">{{type == 'signup' ? 'Iniciar sesión' : 'Registrarse'}}</a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class IndexTemplate extends Vue {
        
        user: any = {}
        type: string = "login"

        async register() {
            try {
                await this.$http.post("/auth/register", this.user);
                this.user = {username:"", email:"", password:""}
                this.type = 'login';

                (<any> this).$notify({
                    title : 'Exito',
                    text  : "Usuario registrado.",
                    type  : "success"
                });
            } catch(e) {}
        }

        async login() {
            try {
                let {data: {user}} = await this.$http.post("/auth/login", this.user);
                this.$store.commit("user/loadUser", user);
                this.$router.push("/");
            } catch (error) {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        > .box {
            > form {
                align-items: center;
                width: 400px;
                margin-bottom: 8px;

                > svg {
                    font-size: 40px;
                    margin-bottom: 18px;
                    background: $color-800;
                    padding: 20px;
                    border-radius: 50%;
                    color: white;
                }

                > label {
                    margin-bottom: 14px;
                    > span {
                        font-weight: 400;
                        color: $color-700;
                    }

                    > input {
                        background:transparent;
                        color: $color-900;
                        border: 0;
                        font-weight: 400;
                        margin-top: 8px;
                        border-bottom: 2px solid $color-900;
                        font-size: 17px;
                        outline: 0;
                    }
                }
            }
        }
    }
</style>