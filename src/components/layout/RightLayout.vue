<template>
  <div>
    <!-- 오른쪽 메뉴 : S -->
    <div class="smart-side smart-sta">
      <div class="side-logo">
        <img
          src="https://image.smartscore.kr/psn3/3.5/logo_ss_land_color.svg"
          alt=""
        />
      </div>

      <!-- 오른쪽 메뉴 상단영역 : S -->
      <div class="side-nav sta-search">
        <div class="form-field">
          <div class="field-button-box">
            <i class="icon ico-search"></i>
          </div>
          <input
            type="search"
            class="field-input"
            placeholder="예약자, 내장객, 락카번호"
            value="[마우스]"
          />
          <span class="field-line"></span>
        </div>
        <div class="container pt-30 ta-c">
          <button class="button-rect-flat">팀 추가</button>
        </div>
      </div>
      <!-- 오른쪽 메뉴 상단영역 : E -->

      <!-- 오른쪽 메뉴 스크롤영역 : S -->
      <div class="side-body sta-cont content-scroll">
        <!-- 메모 - 등록 전 : S -->
        <div class="sta-memo">
          <div class="memo-cont">
            <textarea placeholder="메모를 등록해주세요."></textarea>
          </div>
          <div class="memo-foot">
            <div class="container pt-20">
              <button class="button-memo">
                <i class="icon ico-check"></i>등록
              </button>
            </div>
          </div>
        </div>
        <!-- 메모 - 등록 전 : E -->

        <!-- 메모 - 등록 완료 : S -->
        <div class="sta-memo">
          <div class="memo-cont">
            <textarea placeholder="메모를 등록해주세요." readonly>
오늘 단체팀 건 확인 1. 가나다라마바사아 2. 가나다라마바사아</textarea
            >
          </div>
          <div class="memo-foot">
            <p class="lh-15px fs-13 fw-300 fc-medium-grey">
              최종수정시각 03.01&nbsp;•&nbsp;17:30
            </p>
            <div class="container pt-20">
              <button class="button-memo">
                <i class="icon ico-pen"></i>수정
              </button>
              <button class="button-memo">
                <i class="icon ico-delete"></i>삭제
              </button>
            </div>
          </div>
        </div>
        <!-- 메모 - 등록 완료 : E -->

        <!-- 메모 - 수정 : S -->
        <div class="sta-memo">
          <div class="memo-cont">
            <textarea placeholder="메모를 등록해주세요.">
오늘 단체팀 건 확인 1. 가나다라마바사아 2. 가나다라마바사아</textarea
            >
          </div>
          <div class="memo-foot">
            <div class="container pt-20">
              <button class="button-memo">
                <i class="icon ico-check"></i>등록
              </button>
              <button class="button-memo">
                <i class="icon ico-close-black"></i>취소
              </button>
            </div>
          </div>
        </div>
        <!-- 메모 - 수정 : E -->
      </div>
      <!-- 오른쪽 메뉴 스크롤영역 : E -->

      <!-- 오른쪽 메뉴 하단영역 : S -->
      <div class="side-footer sta-footer">
        <div class="sta-footer-cont">
          <button class="cont-item">
            <i class="icon ico-weather"></i>날씨
          </button>
          <button class="cont-item">
            <i class="icon ico-home"></i>홈페이지
          </button>
          <button class="cont-item">
            <i class="icon ico-settings"></i>설정
          </button>
        </div>
      </div>
      <!-- 오른쪽 메뉴 하단영역 : E -->

      <!-- 메시지 : S -->
      <!-- 메시지창 활성화 시 sta-message에 클래스 active 추가 -->
      <div class="sta-message">
        <p class="mt-60 lh-17px fs-15 fc-white ta-c">2020.03.01 (일)</p>
        <p class="mt-15 lh-35px fs-30 fc-white ta-c">06:00 마운틴</p>
        <div class="message-cont">
          <div class="cont-title">
            <p class="fs-15">메시지</p>
            <select class="select" name="" id="">
              <option value="">전체</option>
              <option value="">프로샵</option>
            </select>
          </div>
          <div class="cont-section content-scroll">
            <ul class="message-list">
              <li class="list-item">
                <p class="list-title">
                  [전체] 2019.03.12&nbsp;•&nbsp;08:25
                  <i class="icon ico-new wd-20 hp-20 ml-10"></i>
                </p>
                <p class="list-cont">이길동 1/N 결제 완료하셨습니다.</p>
              </li>
              <li class="list-item">
                <p class="list-title">
                  [식음] 2019.03.12&nbsp;•&nbsp;08:25
                  <i class="icon ico-new wd-20 hp-20 ml-10"></i>
                </p>
                <p class="list-cont">이길동 1/N 결제 추가결제하셨습니다.</p>
              </li>
              <li class="list-item">
                <p class="list-title">[프로샵] 2019.03.12&nbsp;•&nbsp;08:25</p>
                <p class="list-cont">
                  박길동님 장갑 구매.<br />체크아웃시 결제
                </p>
              </li>
            </ul>
          </div>
          <div class="cont-foot">
            <!-- 작성 전 : S -->
            <div class="foot-cont">
              <textarea
                placeholder="전체에게 전송할 메시지를입력해주세요."
              ></textarea>
              <button class="icon ico-mag-send-disabled wd-36 hp-36"></button>
            </div>
            <!-- 작성 전 : E -->
            <!-- 작성 후 : S -->
            <div class="foot-cont">
              <textarea placeholder="전체에게 전송할 메시지를입력해주세요.">
이길동 1/N 결제 완료하셨습니다.</textarea
              >
              <button class="icon ico-mag-send wd-36 hp-36"></button>
            </div>
            <!-- 작성 후 : E -->
          </div>
        </div>
      </div>
      <!-- 메시지 : E -->
    </div>
    <!-- 오른쪽 메뉴 : E -->
  </div>
</template>

<script>
export default {
  name: "RightLayout"
};
</script>

<style scoped></style>
