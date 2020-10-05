<template>

    <!-- Tweet box -->
    <div class="tweet box c-column">
        <!-- Datos del usuario -->
        <div class="header c-row">
            <img v-once :src="'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/'+ (Math.floor(Math.random() * 5) + 1) + '_avatar-64.png'" alt="">
            
            <div class="c-column">
                <span class="name">{{data.user.username}}</span>
                <span class="job">Trabajador freelance</span>
            </div>
        </div>
                
        <!-- Tweet content -->
        <span v-text="content" v-if="!editMode"/>

        <!-- Editor del tweet -->
        <textarea v-model="content" rows="6" v-else></textarea>

        <!-- Tweet actions -->
        <div class="actions c-row" v-if="data.user.id === $store.state.user.id">
            <!-- Botones si el tweet está siendo editado -->
            <template v-if="editMode">
                <a style="cursor:pointer">
                    <font-awesome-icon icon="save" @click="updateText"/>
                </a>

                <a style="cursor:pointer" @click="editModeC(false)">
                    <font-awesome-icon icon="times" />
                </a>
            </template>
            <!-- Botones para modificar o eliminar el tweet -->
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

        /** Verificar si el tweet está siendo editado. */
        editMode : boolean = false
        /** Contenido del tweet */
        content  : string = ""
        /** Contenido previo del tweet antes de ser editado */
        previousContent: string = ""
        /** Verificar si el tweet está siendo modificado */
        updating: boolean = false

        @Prop({default: {}}) readonly data: any

        created() {
            // Cargar contenido del tweet en la propiedad "content"
            this.content = this.data.content;
        }

        /**
         * Petición para remover el tweet de la base de datos.
         */
        removeTweet() {

            this.axios.delete("/tweets/" + this.data.id).then(() => {
                this.$store.commit("tweets/removeTweet", this.data.id)
            });
        }

        /**
         * Cambiar el estado de edición del tweet.
         */
        editModeC(mode: boolean) {

            if(mode)
                this.previousContent = this.content;
            else {
                this.content = this.previousContent;
                this.previousContent = "";
            }

            this.editMode = mode;
        }

        /**
         * Petición para actualizar los datos del tweet.
         */
        async updateText() {
            if(this.updating) return;

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