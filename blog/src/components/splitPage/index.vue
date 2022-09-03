<template>
  <ul class="SplitPage" v-if="maxIndex > 1">
    <li @click="changeCurrent(1)">&lt;&lt;</li>
    <li @click="changeCurrent(currentIndex - 1)" :class="{disable:currentIndex === 1}">&lt;</li>
    <li v-for="index in indexList" :key="index" @click="changeCurrent(index)" :class="{select:index===currentIndex}">{{index}}</li>
    <li @click="changeCurrent(currentIndex + 1)" :class="{disable:currentIndex === maxIndex}">&gt;</li>
    <li @click="changeCurrent(maxIndex)">&gt;&gt;</li>
  </ul>
</template>

<script>
export default {
    props:{
        allDataVolume:{
            type: Number,
            required: true
        },
        pageShowVolume:{
            type:Number,
            default: 10
        },
        currentIndex:{
            type: Number,
            default: 1
        },
        showIndexVolume:{
            type:Number,
            default: 10
        }
    },
    computed:{
        maxIndex(){
            return Math.ceil(this.allDataVolume / this.pageShowVolume);
        },
        indexList(){
            let minIndex = this.currentIndex - this.showIndexVolume / 2;
            const result = [];//保存序列
            if(minIndex <= 0){
                minIndex = 1;
            }
            for(let i = 0; i <= this.showIndexVolume; i ++){
                if(minIndex + i <= this.maxIndex){
                    result.push(minIndex + i);
                }else{
                    return result;
                }
            }
            return result;
        }
    },
    methods:{
        changeCurrent(newCurrent){
            if(newCurrent <= 0 || newCurrent > this.maxIndex){
                return;
            }else{
                this.$emit("click", newCurrent);
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/style/color.less";
    .SplitPage{
        display: flex;
        justify-content: center;
        li{
            list-style: none;
            font-size: 1.5em;
            padding: 0 .5em;
            background-color: fadeout(@gray, 60%);
            border-radius: 2px;
            user-select: none;
            &:not(:first-of-type){
                margin-left: .5em;
            }
            &:hover{
                cursor: pointer;
            }
            &.disable{
                cursor: not-allowed;
                color:red;
            }
            &.select{
                background: @gray;
            }
        }
    }
</style>