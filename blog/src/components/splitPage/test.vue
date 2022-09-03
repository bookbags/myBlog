<template>
  <SplitPage :allDataVolume="100" :currentIndex="currentIndex" @click="changeCurrent"></SplitPage>
</template>

<script>
import SplitPage from "./index.vue";
export default {
    components:{
        SplitPage,
    },
    data(){
        return{
            currentIndex: 1
        }
    },
    methods:{
        changeCurrent(newCurrent){
            this.currentIndex = newCurrent;
        }
    }
}
</script>

<style>

</style>