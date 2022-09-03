import getGlobalApi from "@/api/getGlobal.js";
export default {
    namespaced: true,
    state:{
        gData:{},
        isLoad: false,//是否加载完成，false 无， loading：正在加载， true加载完成
    },
    mutations:{
        changeGData(state, newData){
            state.gData = newData;
        },
        changeIsLoad(state, newLoad){
            state.isLoad = newLoad;
        }  
    },
    actions:{
        async getGlobalSet(store){
            store.commit("changeIsLoad", "loading");
            const gData = await getGlobalApi();
            store.commit("changeGData", gData.data);
            store.commit("changeIsLoad", true);
        }
    }
}