import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
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

    @Action({commit: "loadTweets"})
    async getTweets() {
        let {data} = await axios.get("/tweets");

        return data.data;
    }
}