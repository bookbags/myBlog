<template>
    <div class="Login">
        <video
            :src="videoUrl"
            autoplay="autoplay"
            muted="muted"
            loop="loop"></video>
        <form>
            <label for="userName">用户<input type="text" id="userName" v-model="logInfo.userName" @change="inspectUserName(logInfo.userName)"/></label>
            <span v-if="userNameError">{{userNameError}}</span>
            <label for="password">密码<input type="password" id="password" v-model="logInfo.password" @change="inspectPassword(logInfo.password)"/></label>
            <span v-if="passwordError">{{passwordError}}</span>
            <button type="button" @click="submit">登录</button>
        </form>
    </div>
</template>

<script>
    import videoUrl from "@/assets/backVideo.mp4";
    import {login, regist} from "@/api/login.js";
    export default {
        data(){
            return{
                userNameError: "",
                passwordError: "",
                videoUrl,
                logInfo:{
                    userName: "",
                    password: ""
                },
            }
        },
        computed:{
            isCurrect(){
                return !this.userNameError && !this.passwordError;
            }
        },
        methods:{
            inspectUserName(value){
                console.log("执行");
                const test = /^(?=.*[a-zA-Z])/;//包含字母
                if(value.length < 2 || value.length > 6){
                    this.userNameError = "用户名长度为2~6"
                }else if(!test.test(value)){
                    this.userNameError = "用户名必须包含字母"
                }
            },
            inspectPassword(value){
                const test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*(_|\$|\.|@))/;//包含数字，大小写字符，和特殊字符
                if(value.length < 3 || value.length > 10){
                    this.passwordError = "密码长度为3~10"
                }else if(!test.test(value)){
                    this.passwordError = "必须包含数字，小写字母，大写字母，或者_.@$";
                }
            },
            async submit(){
                if(this.isCurrect){
                    const result = await login(this.logInfo);
                    console.log(result);
                    if(result.code === 200){
                        this.$router.push("/game");
                    }else{
                        alert(result.msg);
                    }
                }else{
                    alert("注意格式");
                }
            }
        }
    };
</script>

<style scoped="scoped" lang="less">
    .Login {
        position: relative;
        user-select: none;
        color: rgba(255, 255, 255, 0.568);
        font-size: 1.5em;
        text-shadow: 2px 2px 1px black;
        form {
            display: flex;
            flex-wrap: wrap;
            width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            label {
                width: 100%;
                &:nth-of-type(2){
                    margin-top: 1em;
                }
                input {
                    color: white;
                    text-shadow: 2px 3px 3px black;
                    font-size: 1.2em;
                    height: 1.5em;
                    margin-left: 1em;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid white;
                    box-shadow: 0 3px 0 0 black;
                    outline: none;
                }
            }
            span{
                font-weight: bold;
                font-size: .8em;
                text-align: center;
                width: 100%;
                display: block;
                color: rgb(0, 0, 0);
                text-shadow: none;
            }
            button{
                margin: 1em auto;
                padding: .2em 2em;
                font-size: 1.2em;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                &:hover{
                    background-color: rgb(255, 125, 255);
                    color: rgb(253, 255, 158);
                }
            }
        }
    }
</style>