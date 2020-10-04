<template>
    <div class="content">
        <div class="box c-column h-center">
            <form class="c-column">
                <font-awesome-icon icon="sign-in-alt" />

                <label class="c-column">
                    <span>Nombre de usuario</span>
                    <input type="text" />
                </label>

                <label class="c-column">
                    <span>Correo electronico</span>
                    <input type="email" />
                </label>

                <label class="c-column">
                    <span>Contraseña</span>
                    <input type="password" />
                </label>

                <button class="btn" type="submit">Iniciar sesión</button>
            </form>

            <a href="#">Crear una cuenta</a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class IndexTemplate extends Vue {
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