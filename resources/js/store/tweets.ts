import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from "./";
import axios from "axios";

@Module({
    namespaced: true
})

export default class Tweets extends VuexModule {
    
    data: any[] = [];
    
    @Mutation
    loadTweets(data: any) {
        this.data = data;
    }

    @Mutation
    addTweet(data: {id: number, content: string}) {
        this.data.unshift({id: data.id, content: data.content, user: {id: (<any> store.state).user.id, username: (<any> store.state).user.username}})
    }

    @Mutation
    removeTweet(id: number) {
        this.data = this.data.filter(t => t.id != id);
    }

    @Action({commit: "loadTweets"})
    async getTweets() {
        let {data} = await axios.get("/tweets");

        return data.data;
    }
}