<template>
    <div class="login">
        <div class="login-box">
            <div class="hp-60 wd-60">
                <img src="https://image.smartscore.kr/psn3/3.5/logo_ss_port_color.svg" alt="">
            </div>
            <div class="mt-70 wd-200">
                <img src="https://image.smartscore.kr/psn3/3.5/logo_smartmanager.svg" alt="">
            </div>
            <div class="mt-70">
                <label class="lh-15px fs-13 fw-300">아이디</label>
                <div class="form-field mt-10">
                <input type="text" class="field-input" v-model="userId" placeholder="입력"/>
                <span class="field-line"></span>
                </div>
            </div>
            <div class="mt-30">
                <label class="lh-15px fs-13 fw-300">비밀번호</label>
                <div class="form-field mt-10">
                <input type="password" class="field-input" v-model="password" placeholder="입력"/>
                <span class="field-line"></span>
                </div>
            </div>
            <div class="mt-60 ta-c">
                <button class="button-rect-flat"
                        @click="login({
                                userId,
                                password})"
                >로그인</button>

                 <button class="button-rect-flat"
                        @click="getTest()"
                >getTest</button>

                  <button class="button-rect-flat"
                        @click="postTest()"
                >post test</button>
            </div>

            <p>{{ getDateAndTime(createdAt) }}</p>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex"
import axios from "axios"
import { dateFormat } from "../../mixins/dateFormat"

export default {
    data: () => ({
        userId: null,
        password: null,
        createdAt: null,
    }),
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"]),

        getTest(){
            axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                // handle success
                console.log(res);
            })
            .catch(error=> {
                // handle error
                console.log(error);
            })
            .then(() =>  {
                console.log("test");
                // always executed
            });
        },

        postTest() {
            axios.post('https://reqres.in/api/register', {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    mixins:[dateFormat],
    created() {
        this.createdAt = new Date()
    }
}
</script>


<style>
.login{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @include bg-img(bg-smartmanager-login,png);
  background-size: cover;
  .login-box{
    width: 440px;
    padding:50px;
    margin-left: 150px;
    background-color: rgba($color-white,0.9);
  }
}
</style>
