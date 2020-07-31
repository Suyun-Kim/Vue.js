<template>
  <div>
    <!-- 중앙 메뉴 : S -->
    <div class="smart-container">
      <!-- 중앙 메뉴 상단영역 : S -->
      <div class="container-head">
        <div class="head-date">
          <button class="date-left">
            <span class="blind">이전 요일</span>
          </button>
          <div class="fs-18">2020.03.01 (일)</div>
          <button class="date-select">
            <span class="blind">달력</span>
          </button>
          <button class="date-right">
            <span class="blind">다음 요일</span>
          </button>
        </div>
      </div>
      <!-- 중앙 메뉴 상단영역 : E -->

      <!-- 중앙 메뉴 중단영역 : S -->
      <div class="container-body">
        <!-- 리스트 타이틀 : S -->
        <div class="cont-title">
          <!-- 1. 체크인용 : S -->
          <div class="bordered-tb title dp-">
            <div class="item-col1">
              <div class="item-col1">
                <button class="button-round-outline" @click="get()">GET</button>
                <button class="button-round-outline" @click="post()">
                  POST
                </button>
                <button class="button-round-outline" @click="patch()">
                  PATCH
                </button>
                <button class="button-round-outline" @click="remove()">
                  DELETE
                </button>
              </div>
              <!-- 버튼 클릭 시 클래스 list-active 추가 -->
              <button class="button-round-outline list-active">6시대</button>
              <!-- 필터 선택 (2줄용) : E -->
            </div>
            <div class="item-col1">
              <button class="button-round-outline">코스</button>
            </div>
            <div class="item-col1">
              <!-- 버튼 클릭 시 클래스 list-active 추가 -->
              <button class="button-round-outline list-active">홀수</button>
              <!-- 필터 선택 (1줄용) : S -->
              <!-- <div class="option-select">
                               <p class="select-all">전체</p>
                               <div class="select-cont">
                                 <ul class="cont-list">
                                   <li class="list-item">9x2</li>
                                   <li class="list-item">18</li>
                                   <li class="list-item">36</li>
                                 </ul>
                               </div>
                             </div>-->
              <!-- 필터 선택 (1줄용) : E -->
            </div>
            <div class="item-col1">
              <button class="button-round-outline">예약자</button>
            </div>
            <div class="item-col1">
              <button class="button-round-outline">단체명</button>
            </div>
            <div class="item-col4">내장객</div>
            <div class="item-col1">메시지</div>
          </div>
          <!-- 1. 체크인용 : E -->
        </div>
        <!-- 리스트 타이틀 : E -->

        <!-- 중앙 메뉴 스크롤영역 : S -->
        <div class="cont-section content-scroll">
          <div class="bordered-tb" v-for="post in posts" v-bind:key="post">
            <div class="item-col1">{{ post.id }}</div>
            <div class="item-col1">{{ post.first_name }}</div>
            <div class="item-col1">{{ post.last_name }}</div>
            <div class="item-col1">{{ post.email }}</div>
            <div class="item-col1">{{ post.email }}</div>

            <div class="item-col1">
              <button class="wd-20 hp-20 icon ico-new" @click="handleClickButton">
                <span class="blind">새 메시지 확인</span>
              </button>
              <memo-popup
                      title="체크인 메시지"
                      :visible.sync="visible">
                <div>
                  예약자 관련 메시지
                </div>
              </memo-popup>
            </div>
          </div>

          <div style="height: 3000px;"></div>
        </div>
        <!-- 중앙 메뉴 스크롤영역 : E -->
      </div>
      <!-- 중앙 메뉴 중단영역 : E -->

      <!-- 중앙 메뉴 팝업영역 : S -->

      <!-- 풀페이지 팝업 : S -->
      <div class="container-popup full dp-n">
        <div class="popup">
          <div class="popup-head">
            <button class="button-text mr-30 fs-15">
              <span>개별팀</span>
            </button>
            <button class="button-text mr-40 fs-15 ">
              <span class="text">단체팀</span>
            </button>
            <button class="icon ico-close-bold wd-36 hp-36">
              <span class="blind">닫기</span>
            </button>
          </div>

          <!-- 스크롤영역 : S -->
          <div class="popup-body content-scroll">
            <!-- 체크인-단체팀 조회 : S -->
            <div class="container">
              <div class="dp-f align-items-center fs-18">단체팀 정보</div>

              <div class="container pv-20 pl-40 pr-80 mt-20  bg-light-grey ">
                <div class="common-tb">
                  <div class="item">단체팀명</div>
                  <div class="form-field item-col1">
                    <input type="text" class="field-input" placeholder="입력" />
                    <!-- 기본버튼 -->
                    <div class="field-button-box">
                      <button class="icon ico-pen"></button>
                    </div>
                    <!-- 팀명 변경시 버튼 -->
                    <div class="field-button-box">
                      <button class="icon ico-sync"></button>
                    </div>
                    <div class="field-line"></div>
                  </div>
                  <div class="item">예약시각</div>
                  <div class="form-field item-col1">
                    <input
                      type="text"
                      class="field-input"
                      disabled
                      value="2020.12.12&nbsp;•&nbsp;12:12"
                    />
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">예약자명</div>
                  <div class="form-field item-col1">
                    <input
                      type="text"
                      class="field-input"
                      disabled
                      value="홍길동"
                    />
                    <span class="field-line"></span>
                  </div>
                  <div class="item">회원여부</div>
                  <div class="form-field item-col1">
                    <input
                      type="text"
                      class="field-input"
                      disabled
                      value="회원"
                    />
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">전화번호</div>
                  <div class="form-field item-col1">
                    <input
                      type="text"
                      class="field-input"
                      disabled
                      value="010-1234-5678"
                    />
                    <span class="field-line"></span>
                  </div>
                  <div class="item">예약경로</div>
                  <div class="form-field item-col1">
                    <input
                      type="text"
                      class="field-input"
                      disabled
                      value="스마트스코어"
                    />
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">비고</div>
                  <div class="form-field item-col1">
                    <input type="text" class="field-input" disabled value="-" />
                    <span class="field-line"></span>
                  </div>
                </div>
              </div>
              <div class="container mt-20">
                <div class="bordered-tb title">
                  <div class="item-col1">타임</div>
                  <div class="item-col1">코스</div>
                  <div class="item-col1">내장객</div>
                  <div class="item-col1">성별</div>
                  <div class="item-col1">회원유형</div>
                  <div class="item-col1">조변경</div>
                </div>
                <div class="bordered-tb">
                  <div class="item-col1">06:12</div>
                  <div class="item-col1">레이크</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">홍길동</span>
                    </button>
                  </div>
                  <div class="item-col1">남</div>
                  <div class="item-col1">무기명회원</div>
                  <div class="item-col1">
                    <i class="wd-24 hp-24 icon ico-list"></i>
                  </div>
                </div>
                <div class="bordered-tb unstable">
                  <div class="item-col1"></div>
                  <div class="item-col1"></div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">홍길동</span>
                    </button>
                  </div>
                  <div class="item-col1">남</div>
                  <div class="item-col1">무기명회원</div>
                  <div class="item-col1">
                    <i class="wd-24 hp-24 icon ico-list"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- 체크인-단체팀 조회 : E -->
          </div>
          <!-- 스크롤영역 : E -->
        </div>
      </div>
      <!-- 풀페이지 팝업 : E -->

      <!-- 하프페이지 팝업 : S -->
      <div class="container-popup dp-n">
        <div class="popup">
          <div class="popup-head">
            <button class="button-text mr-30 fs-15 ">
              <span class="text">개별팀</span>
            </button>
            <button class="button-text mr-40 fs-15 ">
              <span>단체팀</span>
            </button>
            <button class="icon ico-close-bold wd-36 hp-36">
              <span class="blind">닫기</span>
            </button>
          </div>

          <!-- 스크롤 영역 : S -->
          <div class="popup-body content-scroll">
            <!-- 체크아웃-팀조회/계산 : S -->
            <div class="container">
              <!-- 라운드 기본정보 -->
              <div class="dp-f lh-20px fs-18">라운드 기본정보</div>
              <div class="container mt-20 bg-light-grey">
                <div class="bordered-tb title bg-white">
                  <div class="item-col1">타임</div>
                  <div class="item-col1">코스</div>
                  <div class="item-col1">예약자명</div>
                  <div class="item-col1">단체명</div>
                  <div class="item-col1">캐디명</div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col1">06:00</div>
                  <div class="item-col1">레이크</div>
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">월요회</span>
                    </button>
                  </div>
                  <div class="item-col1">김캐디</div>
                </div>
              </div>

              <!-- 예약자 정보 -->
              <div class="dp-f lh-20px mt-40 fs-18">예약자 정보</div>
              <div class="container mt-20 bg-light-grey">
                <div class="bordered-tb title bg-white">
                  <div class="item-col1">예약시각</div>
                  <div class="item-col1">예약자명</div>
                  <div class="item-col1">회원유형</div>
                  <div class="item-col1">전화번호</div>
                  <div class="item-col1">예약경로</div>
                  <div class="item-col2">비고</div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col1">2020.01.01&nbsp;•&nbsp;14:00</div>
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">주중회원</div>
                  <div class="item-col1">010-1234-5678</div>
                  <div class="item-col1">스마트스코어</div>
                  <div class="item-col2">내용이 입력됩니다.</div>
                </div>
              </div>

              <!-- 내장객 / 요금 정보 -->
              <div class="dp-f lh-20px justify-between mt-40 fs-18">
                내장객 / 요금 정보
                <button class="button-text">
                  <span class="text">요금 세부내역</span>
                </button>
              </div>
              <div class="container mt-20 mb-15">
                <div class="striped-tb title">
                  <div class="item-col1">내장객</div>
                  <div class="item-col1">락카</div>
                  <div class="item-col1">그린피</div>
                  <div class="item-col1">카트</div>
                  <div class="item-col1">식음</div>
                  <div class="item-col1">프로샵</div>
                  <div class="item-col1">렌탈 등</div>
                  <div class="item-col1">할인</div>
                  <div class="item-col1">총비용</div>
                  <div class="item-col1">현금</div>
                  <div class="item-col1">카드</div>
                  <div class="item-col1">미정산</div>
                  <div class="item-col1">결제경로</div>
                  <div class="item-col1">결제이력</div>
                </div>
                <div class="striped-tb">
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">M011</span>
                    </button>
                  </div>
                  <div class="item-col1">100,000</div>
                  <div class="item-col1">22,500</div>
                  <div class="item-col1">
                    <span class="draggable-item active">40,000</span>
                    <!-- 마우스 우클릭 기능 : S -->
                    <div class="item-tooltip-click wd-150">
                      <div class="tooltip-cont">
                        <p>전체합산</p>
                        <p class="active">부분합산</p>
                        <p>N분의 1</p>
                        <p>요금이동</p>
                        <p>요금초기화</p>
                      </div>
                    </div>
                    <!-- 마우스 우클릭 기능 : E -->
                  </div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">0</div>
                  <div class="item-col1">162,500</div>
                  <div class="item-col1">10,000</div>
                  <div class="item-col1">152,500</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">프론트</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">조회</span>
                    </button>
                  </div>
                </div>
                <div class="striped-tb">
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">M011</span>
                    </button>
                  </div>
                  <div class="item-col1">100,000</div>
                  <div class="item-col1">22,500</div>
                  <div class="item-col1">
                    <span class="draggable-item">40,000</span>
                  </div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">0</div>
                  <div class="item-col1">162,500</div>
                  <div class="item-col1">10,000</div>
                  <div class="item-col1">152,500</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">프론트</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">조회</span>
                    </button>
                  </div>
                </div>
                <div class="striped-tb">
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">M011</span>
                    </button>
                  </div>
                  <div class="item-col1">100,000</div>
                  <div class="item-col1">22,500</div>
                  <div class="item-col1">
                    <span class="draggable-item">40,000</span>
                  </div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">0</div>
                  <div class="item-col1">162,500</div>
                  <div class="item-col1">10,000</div>
                  <div class="item-col1">152,500</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">프론트</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">조회</span>
                    </button>
                  </div>
                </div>
                <div class="striped-tb">
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">M011</span>
                    </button>
                  </div>
                  <div class="item-col1">100,000</div>
                  <div class="item-col1">22,500</div>
                  <div class="item-col1">
                    <span class="draggable-item">40,000</span>
                  </div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">0</div>
                  <div class="item-col1">162,500</div>
                  <div class="item-col1">10,000</div>
                  <div class="item-col1">152,500</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">프론트</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">조회</span>
                    </button>
                  </div>
                </div>
                <div class="striped-tb total">
                  <div class="item-col2">합계</div>
                  <div class="item-col1">100,000</div>
                  <div class="item-col1">22,500</div>
                  <div class="item-col1">40,000</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">-</div>
                  <div class="item-col1">0</div>
                  <div class="item-col1">162,500</div>
                  <div class="item-col1">10,000</div>
                  <div class="item-col1">152,500</div>
                  <div class="item-col1">367,500</div>
                  <div class="item-col1"></div>
                  <div class="item-col1"></div>
                </div>
              </div>

              <!-- 하단 버튼 : S -->
              <div class="dp-f justify-between mt-30 mb-10">
                <div class="button-box">
                  <button class="button-rect-outline" disabled>전체합산</button>
                  <button class="button-rect-outline" disabled>부분합산</button>
                  <button class="button-rect-outline" disabled>N분의 1</button>
                  <button class="button-rect-outline" disabled>요금이동</button>
                </div>
                <div class="button-box">
                  <button class="button-rect-flat" disabled>정산</button>
                  <button class="button-rect-flat">팀 결제이력</button>
                  <button class="button-rect-flat">정산서 출력</button>
                </div>
              </div>
              <div class="mt-30">
                <button class="button-text">
                  <span class="text">요금초기화</span>
                </button>
              </div>
              <!-- 하단 버튼 : E -->
            </div>
            <!-- 체크인-팀조회/계산 : E -->

            <!-- 체크인-신규팀 : S -->
            <div class="container">
              <!-- 라운드 기본정보 -->
              <div class="dp-f lh-20px fs-18">라운드 기본정보</div>
              <div class="container pv-20 pl-40 pr-140 mt-20 bg-light-grey ">
                <div class="common-tb">
                  <div class="item">단체팀명</div>
                  <div class="form-field select-box wd-200 mr-10">
                    <input
                      type="text"
                      class="field-input"
                      readonly
                      placeholder="선택"
                    />
                    <i class="icon ico-arrow-down"></i>
                    <span class="field-line"></span>
                  </div>
                  <div class="form-field select-box wd-150 mr-10">
                    <input
                      type="text"
                      class="field-input"
                      readonly
                      placeholder="선택"
                    />
                    <i class="icon ico-arrow-down"></i>
                    <span class="field-line"></span>
                  </div>
                  <div class="form-field select-box wd-150 mr-10">
                    <input
                      type="text"
                      class="field-input"
                      readonly
                      placeholder="선택"
                    />
                    <i class="icon ico-arrow-down"></i>
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">홀</div>
                  <div class="form-field select-box wd-200">
                    <input
                      type="text"
                      class="field-input"
                      readonly
                      placeholder="선택"
                    />
                    <i class="icon ico-arrow-down"></i>
                    <span class="field-line"></span>
                  </div>
                </div>
              </div>

              <!-- 예약자 정보 -->
              <div class="dp-f align-items-center mt-35 fs-18">
                예약자 정보
                <div class="checkbox-circle ml-20">
                  <input type="checkbox" id="a" />
                  <label for="a"></label>
                </div>
                <span class="ml-5 fs-13">내장객에 포함</span>
              </div>
              <div class="container pv-20 pl-40 pr-80 mt-20 bg-light-grey ">
                <div class="common-tb">
                  <div class="item">예약자명</div>
                  <div class="form-field wd-300">
                    <input type="text" class="field-input" placeholder="입력" />
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">휴대폰번호</div>
                  <div class="form-field wd-300">
                    <input type="text" class="field-input" placeholder="입력" />
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">회원유형</div>
                  <div class="form-field select-box wd-300">
                    <input
                      type="text"
                      class="field-input"
                      readonly
                      placeholder="선택"
                    />
                    <i class="icon ico-arrow-down"></i>
                    <span class="field-line"></span>
                  </div>
                </div>
                <div class="common-tb">
                  <div class="item">비고</div>
                  <div class="form-field wd-300">
                    <input type="text" class="field-input" placeholder="입력" />
                    <span class="field-line"></span>
                  </div>
                </div>
              </div>

              <!-- 내장객 정보 -->
              <div class="dp-f align-items-center mt-35 fs-18">
                내장객 정보
                <div class="checkbox-circle ml-20">
                  <input type="checkbox" id="b" />
                  <label for="b"></label>
                </div>
                <span class="ml-5 fs-13">5인 라운드</span>
              </div>
              <div class="container mt-20 pb-15 bg-light-grey">
                <div class="bordered-tb title">
                  <div class="item-col2">내장객</div>
                  <div class="item-col4">휴대폰번호</div>
                  <div class="item-col3">회원유형</div>
                  <div class="item-col3">요금유형</div>
                  <div class="item-col2">성별</div>
                  <div class="item-col2">락카</div>
                </div>
                <div class="bordered-tb non-event ph-5">
                  <div class="item-col2">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col4">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col2">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col2">-</div>
                </div>
              </div>

              <!-- 하단 버튼(중앙) : S -->
              <div class="dp-f justify-center mt-30 mb-10">
                <div class="button-box">
                  <button class="button-rect-outline wd-120">취소</button>
                  <button class="button-rect-flat wd-120">팀 추가 완료</button>
                </div>
              </div>
              <!-- 하단 버튼(중앙) : E -->
            </div>
            <!-- 체크인-신규팀 : E -->

            <!-- 체크인-내장객등록 : S -->
            <div class="container">
              <!-- 라운드 기본정보 -->
              <div class="dp-f lh-20px fs-18">라운드 기본정보</div>
              <div class="container mt-20 bg-light-grey">
                <div class="bordered-tb title bg-white">
                  <div class="item-col1">타임</div>
                  <div class="item-col1">코스</div>
                  <div class="item-col1">홀수</div>
                  <div class="item-col1">예약자명</div>
                  <div class="item-col1">단체명</div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col1">06:00</div>
                  <div class="item-col1">레이크</div>
                  <div class="item-col1">36</div>
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">
                    <button class="button-text">
                      <span class="text">월요회</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- 예약자 정보 -->
              <div class="dp-f lh-20px mt-40 fs-18">예약자 정보</div>
              <div class="container mt-20 bg-light-grey">
                <div class="bordered-tb title bg-white">
                  <div class="item-col1">예약시각</div>
                  <div class="item-col1">예약자명</div>
                  <div class="item-col1">회원유형</div>
                  <div class="item-col1">전화번호</div>
                  <div class="item-col1">예약경로</div>
                  <div class="item-col2">비고</div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col1">2020.01.01•14:00</div>
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">주중회원</div>
                  <div class="item-col1">010-1234-5678</div>
                  <div class="item-col1">스마트스코어</div>
                  <div class="item-col2">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col1">2020.01.01•14:00</div>
                  <div class="item-col1">홍길동</div>
                  <div class="item-col1">주중회원</div>
                  <div class="item-col1">010-1234-5678</div>
                  <div class="item-col1">스마트스코어</div>
                  <div class="item-col2">내용이 입력됩니다.</div>
                </div>
              </div>
              <!-- 내장객 / 요금 정보 -->
              <div class="dp-f lh-20px justify-between mt-40 fs-18">
                내장객 / 요금 정보
                <span class="fs-13 fc-orange"
                  >체크인 : 프론트 / 2020.03.01 04:00
                </span>
              </div>
              <!-- 미내장 -->
              <div class="container mt-20 pb-15 bg-light-grey">
                <div class="bordered-tb title">
                  <div class="item-col3">내장객</div>
                  <div class="item-col3">휴대폰번호</div>
                  <div class="item-col3">회원유형</div>
                  <div class="item-col3">요금유형</div>
                  <div class="item-col3">할인금액</div>
                  <div class="item-col2">성별</div>
                  <div class="item-col2">락카</div>
                  <div class="item-col2">체크인경로</div>
                </div>
                <div class="bordered-tb non-event ph-5">
                  <div class="item-col3">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col2">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col2">-</div>
                  <div class="item-col2">-</div>
                </div>
              </div>
              <!-- 내장완료 -->
              <div class="container mt-20 pb-15 bg-light-grey">
                <div class="bordered-tb title">
                  <div class="item-col2">내장객</div>
                  <div class="item-col3">휴대폰번호</div>
                  <div class="item-col3">회원유형</div>
                  <div class="item-col3">요금유형</div>
                  <div class="item-col3">할인금액</div>
                  <div class="item-col2">성별</div>
                  <div class="item-col2">락카</div>
                  <div class="item-col2">락카출력</div>
                  <div class="item-col2">체크인경로</div>
                </div>
                <div class="bordered-tb non-event">
                  <div class="item-col2">홍길동</div>
                  <div class="item-col3">010-1234-5678</div>
                  <div class="item-col3">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field select-box">
                      <input
                        type="text"
                        class="field-input"
                        readonly
                        placeholder="선택"
                      />
                      <i class="icon ico-arrow-down"></i>
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col3">
                    <div class="form-field">
                      <input
                        type="text"
                        class="field-input"
                        placeholder="입력"
                      />
                      <span class="field-line"></span>
                    </div>
                  </div>
                  <div class="item-col2">남자</div>
                  <div class="item-col2">
                    <button class="button-text">
                      <span class="text">M011</span>
                    </button>
                  </div>
                  <div class="item-col2">
                    <button class="button-text">
                      <span class="text">출력</span>
                    </button>
                  </div>
                  <div class="item-col2">모바일</div>
                </div>
              </div>

              <!-- 하단 버튼(중앙) : S -->
              <div class="dp-f justify-center mt-30 mb-10">
                <div class="button-box">
                  <button class="button-rect-outline">취소</button>
                  <button class="button-rect-flat">등록</button>
                </div>
              </div>
              <!-- 하단 버튼(중앙) : E -->
              <!-- 하단 버튼 : S -->
              <div class="dp-f justify-between mt-30 mb-10">
                <div class="button-box">
                  <button class="button-rect-outline">내장객 추가</button>
                  <button class="button-rect-outline">내장객 수정</button>
                  <button class="button-rect-outline">조변경</button>
                  <button class="button-rect-outline">팀 삭제</button>
                </div>
                <div class="button-box">
                  <button class="button-rect-flat">선결제</button>
                  <button class="button-rect-flat">락카출력</button>
                </div>
              </div>
              <!-- 하단 버튼 : E -->
            </div>
            <!-- 체크인-내장객등록 : E -->
          </div>
          <!-- 스크롤 영역 : E -->
        </div>
      </div>
      <!-- 하프페이지 팝업 : E -->

      <!-- 락카조회 팝업 : S -->
      <div class="container-popup dp-n">
        <div class="popup locker-room">
          <div class="popup-head justify-between">
            <span class="fs-18">락카현황</span>
            <button class="icon ico-close-bold wd-36 hp-36">
              <span class="blind">닫기</span>
            </button>
          </div>
          <div class="popup-body">
            <!-- 락카조회 - 검색 : S -->
            <div class="container ph-30">
              <div class="dp-f justify-between hp-50 ph-10 bg-light-grey">
                <div class="dp-f align-items-center">
                  <button class=" button-round-outline mr-10 ta-c select">
                    남자 A
                  </button>
                  <button class=" button-round-outline mr-10 ta-c">
                    남자 A
                  </button>
                  <button class=" button-round-outline mr-10 ta-c">
                    남자 A
                  </button>
                  <button class=" button-round-outline mr-10 ta-c">
                    남자 A
                  </button>
                </div>
                <!-- 락커 검색영역 : S -->
                <div class="locker-search">
                  <!-- 기본 텍스트 필드 -->
                  <!-- <div class="form-field wd-200">
                                                        <input type="text" class="field-input" placeholder="내장객, 락카번호 검색"/>
                                                        <span class="field-line"></span>
                                                      </div> -->

                  <!-- 검색어 입력시 텍스트 필드 -->
                  <!-- 1. 버튼 ico-close 클릭 시 검색창 닫힘  -->
                  <!-- 2. 해당 검색결과(내장객,락카번호) 클릭 시 검색창 닫힘 / 해당 item 에 클래스 point 추가 -->
                  <div class="form-field wd-200 active">
                    <input
                      type="text"
                      class="field-input"
                      placeholder="내장객, 락카번호 검색"
                      value="홍길동"
                    />
                    <span class="field-line"></span>
                    <div class="field-button-box">
                      <button class="icon ico-close">
                        <span class="blind">삭제</span>
                      </button>
                    </div>
                  </div>
                  <div class="search-result">
                    <p class="mb-10 lh-15px fs-13 ta-r">검색결과 2건</p>
                    <div>
                      <div class="striped-tb title">
                        <div class="item-col1">내장객</div>
                        <div class="item-col1">락카번호</div>
                        <div class="item-col1">티타임</div>
                        <div class="item-col1">코스</div>
                        <div class="item-col1">성별</div>
                        <div class="item-col1">락카위치</div>
                      </div>
                      <div class="striped-tb">
                        <div class="item-col1">
                          <button class="button-text">
                            <span class="text">홍길동</span>
                          </button>
                        </div>
                        <div class="item-col1">
                          <button class="button-text">
                            <span class="text">M017</span>
                          </button>
                        </div>
                        <div class="item-col1">12:30</div>
                        <div class="item-col1">레이크</div>
                        <div class="item-col1">남</div>
                        <div class="item-col1">남자 A</div>
                      </div>
                      <div class="striped-tb">
                        <div class="item-col1">
                          <button class="button-text">
                            <span class="text">홍길동</span>
                          </button>
                        </div>
                        <div class="item-col1">
                          <button class="button-text">
                            <span class="text">M017</span>
                          </button>
                        </div>
                        <div class="item-col1">12:30</div>
                        <div class="item-col1">레이크</div>
                        <div class="item-col1">남</div>
                        <div class="item-col1">남자 A</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 락커 검색영역 : E -->
              </div>
            </div>
            <!-- 락카조회 - 검색 : E -->
            <!-- 락카조회 - 락카위치 : S -->
            <div class="container mt-30 ph-5">
              <div class="locker-scroll">
                <div class=" locker-room-box">
                  <!-- 마우스 우클릭 기능 : S -->
                  <div class="item-tooltip-click">
                    <div class="tooltip-cont">
                      <p>선택한 락카로 변경</p>
                      <p class="active">락카정보 조회</p>
                    </div>
                  </div>
                  <!-- 마우스 우클릭 기능 : E -->
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text assign">툴팁용</span>
                      <!-- 락커 정보 : S -->
                      <!-- 어느 위치에 있던 상단은 고정 -->
                      <!-- 오른쪽 여백이 더 많을 경우 item-tooltip-info 에 클래스 right 추가  -->
                      <div class="item-tooltip-info">
                        <p class="pl-20 pb-20 fs-15">락카 정보</p>
                        <div class="tooltip-cont">
                          <p class="title">•&nbsp;락카위치</p>
                          <p>남자 A</p>
                          <p class="title">•&nbsp;락카번호</p>
                          <p>M017</p>
                          <p class="title">•&nbsp;락카상태</p>
                          <p>배정</p>
                        </div>
                        <div class="tooltip-cont">
                          <p class="title">•&nbsp;내장객</p>
                          <p>홍길동</p>
                          <p class="title">•&nbsp;휴대폰번호</p>
                          <p>010-1234-5678</p>
                          <p class="title">•&nbsp;티업시각</p>
                          <p>12:30</p>
                          <p class="title">•&nbsp;코스</p>
                          <p>레이크</p>
                          <p class="title">•&nbsp;회원여부</p>
                          <p>비회원</p>
                        </div>
                      </div>
                      <!-- 락커 정보 : E -->
                    </div>
                    <div class="item">
                      <span class="item-text recent">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text vip">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text checkout">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text break">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text unused">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text holding">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text recent point">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text vip point">A001</span>
                      <!-- 락커 정보 : S -->
                      <!-- 어느 위치에 있던 상단은 고정 -->
                      <div class="item-tooltip-info right">
                        <p class="pl-20 pb-20 fs-15">락카 정보</p>
                        <div class="tooltip-cont">
                          <p class="title">•&nbsp;락카위치</p>
                          <p>남자 A</p>
                          <p class="title">•&nbsp;락카상태</p>
                          <p>배정</p>
                        </div>
                        <div class="tooltip-cont">
                          <p class="title">•&nbsp;내장객</p>
                          <p>홍길동</p>
                          <p class="title">•&nbsp;휴대폰번호</p>
                          <p>010-1234-1234</p>
                          <p class="title">•&nbsp;티업시각</p>
                          <p>12:30</p>
                          <p class="title">•&nbsp;코스</p>
                          <p>레이크</p>
                          <p class="title">•&nbsp;회원여부</p>
                          <p>비회원</p>
                        </div>
                      </div>
                      <!-- 락커 정보 : E -->
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                  <div class="locker-col mr-60">
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                    <div class="item">
                      <span class="item-text">A001</span>
                    </div>
                  </div>
                </div>
                <div style="width: 1000px;"></div>
              </div>
            </div>
            <!-- 락카조회 - 락카위치 : E -->
            <!-- 락카조회 - 설정 : S -->
            <div class="locker-room-foot">
              <div class="foot-setting">
                <button class="icon ico-setting"></button>
                <!-- 락커셋팅 : S -->
                <!-- setting 버튼 클릭시 클래스 active 추가 -->
                <!-- list-item 선택시 클래스 active 추가 -->
                <div class="locker-setting active">
                  <ul class="setting-list">
                    <li class="list-item active">새 락카 등록</li>
                    <li class="list-item">락카 설정</li>
                    <li class="list-item">락카 이용내역</li>
                    <li class="list-item">락카 재배정</li>
                  </ul>
                </div>
                <!-- 락커셋팅 : E -->
              </div>
              <div class="foot-cont">
                <div class="dp-f mb-4">
                  <span class="cont-text">배정</span>
                  <span class="cont-box assign">150</span>
                  <span class="cont-text">미배정</span>
                  <span class="cont-box non-assign">150</span>
                  <span class="cont-text">최근 10팀</span>
                  <span class="cont-box recent">150</span>
                  <span class="cont-text">VIP</span>
                  <span class="cont-box vip">150</span>
                </div>
                <div class="dp-f">
                  <span class="cont-text">체크아웃</span>
                  <span class="cont-box checkout">150</span>
                  <span class="cont-text">고장</span>
                  <span class="cont-box break">150</span>
                  <span class="cont-text">미사용</span>
                  <span class="cont-box unused">150</span>
                  <span class="cont-text">홀딩</span>
                  <span class="cont-box holding">150</span>
                </div>
              </div>
            </div>
            <!-- 락카조회 - 설정 : E -->
          </div>
        </div>
      </div>
      <!-- 락카조회 팝업 : E -->

      <!-- 락카조회 (미설정) 팝업 : S -->
      <div class="container-popup dp-n">
        <div class="popup locker-room">
          <div class="popup-head justify-between">
            <span class="fs-18"></span>
            <button class="icon ico-close-bold wd-36 hp-36">
              <span class="blind">닫기</span>
            </button>
          </div>

          <div class="popup-body">
            <div class="container ta-c">
              <i class="icon ico-exclamation wd-40 hp-40 opacity-03"></i>
              <p class="mt-10 lh-24px fc-grey fs-15">
                설정된 락카가 없습니다.<br />하단 버튼을 눌러 락카를 설정하세요.
              </p>
              <div class="mt-30">
                <button class="button-rect-flat">락카 등록</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 락카조회 (미설정) 팝업 : E -->

      <!-- 중앙 메뉴 팝업영역 : E -->
    </div>

    <!-- 중앙 메뉴 : E -->
    <bottom-layout></bottom-layout>
  </div>
</template>

<script>
import axios from "axios";
import memoPopup from '../popup/memoPopup.vue';
import BottomLayout from './BottomLayout.vue';

export default {
  name: "MiddleLayout",
  data: function() {
    return {
      posts: [],
      visible: false
    };
  },
  components: {
    memoPopup, BottomLayout
  },
  created() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(res => {
        // handle success
        console.log(res);
        this.posts = res.data.data;
        console.log(this.posts);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  methods: {
    get() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {
          // handle success
          console.log(res);
          this.posts = res.data.data;
          console.log(this.posts);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    post() {
      axios
        .post("https://reqres.in/api/users", {
          name: "morpheus",
          job: "leader"
        })
        .then(res => {
          // handle success
          console.log(res);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    patch() {
      axios
        .patch("https://reqres.in/api/users/2", {
          name: "morpheus",
          job: "zion resident"
        })
        .then(res => {
          // handle success
          console.log(res);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    remove() {
      axios
        .delete("https://reqres.in/api/users/2")
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    handleClickButton(){
      this.visible = !this.visible
    }
  }
};
</script>

<style scoped></style>
