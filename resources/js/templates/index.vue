<template>
    <div class="content">

        <!-- User information -->
        <div class="box c-column h-center u-info">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png" alt="">
            <!-- Nombre de usuario -->
            <h2 v-text="this.$store.state.user.username" />
            <!-- Ejemplo: Trabajo -->
            <h4 class="job">Diseñador Grafico</h4>
            <!-- Ejemplo: estado -->
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, illo doloremque qui molestiae nisi fugit eligendi</span>
        </div>

        <!-- Publish tweet box -->
        <div class="box publish c-row v-center">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-64.png" alt="">
            <textarea resize="false" placeholder="Hola Fauce, ¿Qué estás pensando?" v-model="content"></textarea>
            <div class="btn green" @click="publishTweet" :disabled="creating">Publicar</div>
        </div>

        <!-- Caja que contiene todos los tweets publicados. -->
        <div class="tweets-container c-column">
            <tweet v-for="tweet in tweets" :key="tweet.id" :data="tweet" />
            <h2 v-if="loading">Cargando tweets...</h2>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {mapState} from "vuex";
    import tweet from "./components/tweet.vue";

    @Component({
        components: {tweet},
        computed: {
            ...mapState("tweets", {tweets: "data"})
        }
    })
    export default class IndexTemplate extends Vue {
        /** Contenido del tweet a publicar */
        content   : string = ""
        /** Verificar si hay un tweet publicandose... */
        creating  : boolean = false
        /** Verificar si hay tweets cargando */
        loading   : boolean = true
        /** Verificar si hay una página con más tweets */
        next_page : boolean = false
        /** Número de la página actual */
        page      : number = 1

        async created() {
            // Cargar tweets y obtener datos de paginación.
            let {current_page, next_page_url} = await this.$store.dispatch("tweets/getTweets");

            this.page      = current_page;
            this.next_page = Boolean(next_page_url);

            this.loading = false;

            /**
             * Body element
             * 
             * @var HTMLBodyElement element
             */
            let element = <HTMLBodyElement> document.querySelector("body");

            // Evento para cuando se detecte que el usuario a llegar al final del body.
            element.addEventListener('scroll', event =>{
                
                // Obtener nuevamente el elemento con datos actualizados.
                element = <HTMLBodyElement> event.target;

                // Si el usuario llego al final, no hay tweets cargando y hay más páginas disponibles.
                if (element.scrollHeight - element.scrollTop === element.clientHeight && !this.loading && this.next_page) {

                    this.loading = true;
                    this.page++;

                    this.$store.dispatch("tweets/getTweets", this.page).then(data => {
                        this.loading = false
                        this.next_page = Boolean(data.next_page_url);
                    })
                }
            });
        }

        /**
         * Publicar un nuevo tweet.
         */
        async publishTweet(){
            // Si el contenido está vacío o se está creando otro.
            if(this.content.length === 0 || this.creating) return;

            this.creating = true;

            /** @var string content - Contenido del tweet */
            let {content} = this;

            try {
                /** Datos obtenidos del nuevo tweet. */
                let {data} = await this.axios.post("/tweets", {content});
                this.$store.commit("tweets/addTweet", {id: data.id , content});
            } catch (error) {
                
            }

            this.creating = false;
            this.content = "";
        }
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