<template>
    <!-- Tweet box -->
    <div class="tweet box c-column">

        <div class="header c-row">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-64.png" alt="">
            <div class="c-column">
                <span class="name">{{data.user.username}}</span>
                <span class="job">Trabajador freelance</span>
            </div>
        </div>
                
        <!-- Tweet content -->
        <span v-text="content" v-if="!editMode"/>
        <!-- -->
        <textarea v-model="content" rows="6" v-else></textarea>

        <!-- Tweet actions -->
        <div class="actions c-row" v-if="data.user.id === $store.state.user.id">

            <template v-if="editMode">
                <a style="cursor:pointer">
                    <font-awesome-icon icon="save" @click="updateText"/>
                </a>

                <a style="cursor:pointer" @click="editModeC(false)">
                    <font-awesome-icon icon="times" />
                </a>
            </template>

            <template v-else>
                <a style="cursor:pointer" @click="updateText">
                    <font-awesome-icon icon="trash" @click="removeTweet"/>
                </a>

                <a style="cursor:pointer" @click="editModeC(true)">
                    <font-awesome-icon icon="edit" />
                </a>
            </template>
        </div>
    </div>
</template>

<script lang="ts">  
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class TweetComponent extends Vue {

        editMode: boolean = false
        content: string = ""
        previousContent: string = ""
        updating: boolean = false

        @Prop({default: {}}) readonly data: any

        created() {
            this.content = this.data.content;
        }

        removeTweet() {
            this.axios.delete("/tweets/" + this.data.id).then(() => {
                this.$store.commit("tweets/removeTweet", this.data.id)
            });
        }

        editModeC(mode: boolean) {

            if(mode)
                this.previousContent = this.content;
            else {
                this.content = this.previousContent;
                this.previousContent = "";
            }

            this.editMode = mode;
        }

        async updateText() {
            this.updating = true;

            if(this.previousContent != this.content)
                await this.axios.put("/tweets/" + this.data.id, {content: this.content});

            this.updating = this.editMode = false;
        }
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

        > textarea {
            resize: none;
        }

        > span,textarea {
            font-size: 24px;
            font-weight: 400;
            color: $color-900;
        }

        > .actions {
            margin: 6px 0;

            > a {
                margin-right: 14px;
            }
        }
    }
</style>