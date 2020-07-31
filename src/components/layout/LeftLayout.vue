<template>
  <div>
    <!-- 왼쪽 메뉴 ( 1. 체크인용 ) : S -->
    <div class="smart-side smart-gnb dp-">
      <!-- 왼쪽 메뉴 상단영역 : S -->
      <div class="side-logo">
        <img src="https://image.smartscore.kr/psn3/3.5/club_logo.png" alt="" />
      </div>

      <div class="side-nav gnb-nav">
        <div class="nav-list">
          <a href="#" class="list-item active">체크인</a>
          <a href="#" class="list-item">체크아웃</a>
          <button class="list-item">락카현황</button>
        </div>
      </div>
      <p class="gnb-body-title">오늘의 체크인 현황</p>
      <!-- 왼쪽 메뉴 상단영역 : E -->

      <!-- 왼쪽 메뉴 스크롤영역 : S -->
      <div class="side-body gnb-body content-scroll">
        <!-- 예약율 : S -->
        <div
          class="dp-f align-items-center justify-between ph-20 hp-82 mb-10 bg-white"
        >
          <div>
            <p class="lh-17px fs-15 mb-10">예약율</p>
            <p class="lh-15px fs-13 fw-300">180팀 / 200팀</p>
          </div>
          <div class="fs-30">90<span class="fs-18 fw-300">%</span></div>
        </div>
        <!-- 예약율 : E -->

        <!-- 내장율 : S -->
        <div
          class="dp-f align-items-center justify-between ph-20 hp-82 bg-white"
        >
          <div>
            <p class="lh-17px fs-15 mb-10">내장율</p>
            <p class="lh-15px fs-13 fw-300">180팀 / 200팀</p>
          </div>
          <div class="fs-30">90<span class="fs-18 fw-300">%</span></div>
        </div>
        <div class="ph-20 pb-20 mb-10 bg-white">
          <div class="pt-20 lh-17px fs-15 bd-t01">
            내장인원 성비 <span class="fw-300">(총 640명)</span>
          </div>
          <div class="gnb-body-list">
            <div class="list-item bg-blue">
              <p class="fs-13">남</p>
              <p class="hp-35 lh-35px fs-30">60<span class="fs-18">%</span></p>
              <p class="fs-13 fw-300">(384명)</p>
            </div>
            <div class="list-item bg-orange">
              <p class="fs-13">여</p>
              <p class="hp-35 lh-35px fs-30">40<span class="fs-18">%</span></p>
              <p class="fs-13 fw-300">(216명)</p>
            </div>
          </div>
        </div>
        <!-- 내장율 : E -->

        <!-- 단체비율 : S -->
        <div
          class="dp-f align-items-center justify-between ph-20 hp-82 mb-10 bg-white"
        >
          <div>
            <p class="lh-17px fs-15 mb-10">단체비율</p>
            <p class="lh-15px fs-13 fw-300">180팀 / 200팀</p>
          </div>
          <div class="fs-30">90<span class="fs-18 fw-300">%</span></div>
        </div>
        <!-- 단체비율 : E -->
      </div>
      <!-- 왼쪽 메뉴 스크롤영역 : E -->

      <!-- 왼쪽 메뉴 하단영역 : S -->
      <div class="side-footer">
        <div
          class="pv-10 lh-17px fs-15 bg-white fw-300 fc-medium-grey ta-c bdr-18"
        >
          {{ getDateAndTime(createdAt) }}
        </div>
        <div class="dp-f justify-between pt-15 ph-15 fs-13 fc-medium-grey">
          <button class="lh-24px">{{ userInfo.name }}님</button>
          <button class="lh-24px" @click="$store.dispatch('logout')">
            <i class="wd-24 hp-24 icon ico-logout"></i>로그아웃
          </button>
        </div>
      </div>
      <!-- 왼쪽 메뉴 하단영역 : E -->
    </div>
    <!-- 왼쪽 메뉴 ( 1. 체크인용 ) : E -->

    <!-- 왼쪽 메뉴 ( 2. 체크아웃용 ) : S -->
    <div class="smart-side smart-gnb dp-n">
      <!-- 왼쪽 메뉴 상단영역 : S -->
      <div class="side-logo">
        <img src="https://image.smartscore.kr/psn3/3.5/club_logo.png" alt="" />
      </div>

      <div class="side-nav gnb-nav">
        <div class="nav-list">
          <a href="#" class="list-item">체크인</a>
          <a href="#" class="list-item active">체크아웃</a>
          <button class="list-item">락카현황</button>
        </div>
      </div>
      <p class="gnb-body-title">오늘의 체크아웃 현황</p>
      <!-- 왼쪽 메뉴 상단영역 : E -->

      <!-- 왼쪽 메뉴 스크롤영역 : S -->
      <div class="side-body gnb-body content-scroll">
        <!-- 총 내장팀수 : S -->
        <div
          class="dp-f align-items-center justify-between ph-20 hp-60 mb-10 bg-white"
        >
          <div>
            <p class="fs-15">총 내장팀수</p>
          </div>
          <div class="fs-30">90<span class="fs-18 fw-300">팀</span></div>
        </div>
        <!-- 총 내장팀수 : E -->

        <!-- 정산완료팀수 : S -->
        <div
          class="dp-f align-items-center justify-between ph-20 hp-60 bg-white"
        >
          <div>
            <p class="fs-15">정산완료팀수</p>
          </div>
          <div class="fs-30">90<span class="fs-18 fw-300">팀</span></div>
        </div>
        <div class="ph-20 pb-20 mb-10 bg-white">
          <div class="gnb-body-list bd-t01">
            <div class="list-item bg-blue">
              <p class="fs-13">정산완료</p>
              <p class="lh-35px fs-30">600</p>
              <p class="fs-13 fw-300">명</p>
            </div>
            <div class="list-item fc-medium-grey bd-grey">
              <p class="fs-13">미정산</p>
              <p class="hp-35 lh-35px fs-30">200</p>
              <p class="fs-13 fw-300">명</p>
            </div>
          </div>
        </div>
        <!-- 정산완료팀수 : E -->

        <!-- 매출 리스트 : S -->
        <div class="ph-20 pt-20 pb-5">
          <p class="lh-15px fs-13 fw-300">총 매출액</p>
          <p class="mt-10 lh-20px fs-18">450,000,000원</p>
        </div>
        <div class="ph-20 pt-20 pb-5">
          <p class="lh-15px fs-13 fw-300">정산완료 매출액</p>
          <p class="mt-10 lh-20px fs-18">250,000,000원</p>
        </div>
        <div class="ph-20 pt-20 pb-5">
          <p class="lh-15px fs-13 fw-300">신용카드 매출</p>
          <p class="mt-10 lh-20px fs-18">250,000,000원</p>
        </div>
        <div class="ph-20 pt-20 pb-5">
          <p class="lh-15px fs-13 fw-300">현금 매출</p>
          <p class="mt-10 lh-20px fs-18">250,000,000원</p>
        </div>
        <!-- 매출 리스트 : E -->
      </div>
      <!-- 왼쪽 메뉴 스크롤영역 : E -->
    </div>
    <!-- 왼쪽 메뉴 ( 2. 체크아웃용 ) : E -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { dateFormat } from "../../mixins/dateFormat";

export default {
  name: "leftLayout",
  data: () => ({
    createdAt: null
  }),
  computed: {
    ...mapState(["userInfo"])
  },
  mixins: [dateFormat],
  created() {
    this.createdAt = new Date();
  }
};
</script>

<style scoped></style>
