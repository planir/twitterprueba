<template>
    <div class="content">
        <!-- User information -->
        <div class="box c-column h-center u-info">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png" alt="">
            <h2>John Travolta</h2>
            <h4 class="job">Diseñador Grafico</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, illo doloremque qui molestiae nisi fugit eligendi</span>
        </div>

        <!-- Publish tweet box -->
        <div class="box publish c-row v-center">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-64.png" alt="">
            <textarea resize="false" placeholder="Hola Fauce, ¿Qué estás pensando?"></textarea>
            <div class="btn green">Publicar</div>
        </div>

        <!-- Caja que contiene todos los tweets publicados. -->
        <div class="tweets-container c-column">
            <tweet />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import tweet from "./components/tweet.vue";

    @Component({
        components: {tweet}
    })
    export default class IndexTemplate extends Vue {
    }
</script>

<style lang="scss" scoped>
    .content {
        > .box {
            margin-bottom: 12px;
            padding-bottom: 12px;

            &.u-info {
                > h2 {
                    font-weight: 700;
                    margin: 8px 0 0 0;
                    color: $color-700;
                }

                > h4 {
                    margin: 0px;
                    font-weight: 400;
                    color: $color-500;
                    margin-bottom: 6px;
                }

                > span {
                    font-weight: 400;
                    text-align: center;
                    color: $color-900;
                    padding: 12px;
                }
            }

            &.publish {
                > img {
                    margin-right: 10px;
                }

                > textarea {
                    flex: 1;
                    height: 60px;
                    color: $color-700;
                    resize: none;
                    font-weight: 400;
                    border: 0;
                    font-size: 20px;
                    outline: 0;
                }

                > .btn {
                    margin-left: 10px;
                }
            }
        }
    }
</style>