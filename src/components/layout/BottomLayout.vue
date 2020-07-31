<template>
    <div class="container100 mt-50">
        <!-- 푸터 시작 -->
        <div class="home-footer">
            <div class="container100 pv-15 ta-c">
                <!--<button>공지사항</button>-->

                <router-link to="/Notice" tag="button">공지사항 <img src="//image.smartscore.kr/psn3/3.5/ic_new.svg" class="hp-15 va-t mt-01" v-if="isLogin && isNewNotice"></router-link>
                <span>l</span>
                <!--<button>문의요청</button>-->
                <router-link to="/Terms" tag="button">약관 및 정책</router-link>
                <span>l</span>
                <!--<button>이용약관</button>-->
                <router-link to="/Inquiry" tag="button">문의요청 <img src="//image.smartscore.kr/psn3/3.5/ic_new.svg" class="hp-15 va-t mt-01" v-if="isLogin && isNewInquiry"></router-link>
                <span>l</span>
                <!--<button>개인정보취급방침</button>-->
                <router-link to="/ServiceInfo" tag="button">서비스소개</router-link>
                <!--            <button @click="$serviceInfo()">서비스소개</button>-->
            </div>
            <div class="container100 pb-15 ta-c fc-be fs-11">Copyright SMARTSCORE.All right Reserved.</div>

        </div>
        <!-- 푸터 끝 -->
    </div>
</template>

<script>
    export default {
        name: "BottomLayout"
    }
</script>

<style scoped>

</style>
