import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from "axios";

@Module({
    namespaced: true
})

export default class User extends VuexModule {
    
    id: number       = (<any> window).user.id || 0;
    username: string = (<any> window).user.username || "";

    /**
     * Getter que verifica si el usuario tiene una sesión iniciada.
     * 
     * @return boolean
     */
    get logged(): boolean {
        return this.id !== 0 && this.username !== "";
    }
    
    @Mutation
    /**
     * Cargar datos del usuario en el modulo.
     */
    loadUser(data: any) {
        this.id = data.id;
        this.username = data.username;
    }
}