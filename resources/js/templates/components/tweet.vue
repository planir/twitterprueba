<template>
    <!-- Tweet box -->
    <div class="tweet box c-column">

        <div class="header c-row">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-64.png" alt="">
            <div class="c-column">
                <span class="name">John Travolta</span>
                <span class="job">Diseñador Grafico</span>
            </div>
        </div>
                
        <!-- Tweet content -->
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio earum eum culpa totam sed blanditiis, fugit provident molestias ut, ex et dicta iste, debitis dolorum nisi! Quibusdam asperiores exercitationem enim.</span>
    </div>
</template>

<script lang="ts">  
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class TweetComponent extends Vue {
        
    }
</script>

<style lang="scss" scoped>
    .tweet {
        margin-bottom: 14px;
        >.header {
            margin-bottom: 7px;

            > img {
                margin-right: 6px;
            }

            > .c-column {
                justify-content: center;

                > span {
                    font-weight: 600;

                    &.name {
                        font-size: 18px;
                        color: $color-800;
                    }
                    &.job {
                        font-size: 12px;
                        color: $color-600;
                    }
                }
            }
        }

        > span {
            font-size: 24px;
            font-weight: 400;
            color: $color-900;
        }
    }
</style>