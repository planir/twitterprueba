import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from "./";
import axios from "axios";

@Module({
    namespaced: true
})

export default class Tweets extends VuexModule {
    
    data: any[] = [];
    
    @Mutation
    /**
     * Cargar los tweets en los datos del modulo.
     */
    loadTweets(data: any) {
        for(let tweet of data.data) {
            this.data.push(tweet);
        }
    }

    @Mutation
    /**
     * Añadir un tweet a los datos del modulo.
     */
    addTweet(data: {id: number, content: string}) {
        this.data.unshift({id: data.id, content: data.content, user: {id: (<any> store.state).user.id, username: (<any> store.state).user.username}})
    }

    @Mutation
    /**
     * Remover un tweet del modulo.
     */
    removeTweet(id: number) {
        this.data = this.data.filter(t => t.id != id);
    }

    @Action({commit: "loadTweets"})

    /**
     * Petición para obtener tweets.
     * 
     * @return any
     */
    async getTweets(page: number = 0) {
        let {data} = await axios.get("/tweets?page=" + page);

        return data;
    }
}