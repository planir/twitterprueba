import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from "axios";

@Module({
    namespaced: true
})

export default class User extends VuexModule {
    
    id: number       = (<any> window).user.id;
    username: string = (<any> window).user.username;

    get logged(): boolean {
        return this.id !== 0 && this.username !== "";
    }
    
    @Mutation
    loadUser(data: any) {
        this.id = data.id;
        this.username = data.username;
    }

    @Action({commit: 'loadUser'})
    async getUserData() {
        /**
         * Obtener datos del usuario.
         * 
         * @var {Object} data
         */
        let {data} = await axios.get("/auth/user");  

        return data;
    }
}