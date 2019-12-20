---
서비스 운영기간: 2017.03.02 - 2017.08.31(약 6개월)
개발기간: 2017.02.21 ~ 2017.03.01
개발자: 우미연, 정다혜
---

# 건국대학교 상경대학(KUCE) 세미나실 예약 페이지 : KUCEMINAR

![Ruby on Rails](https://img.shields.io/badge/rails-v5.0.1-green)
![bootstrap](https://img.shields.io/badge/bootstrap-sass-v3.3-green.svg)
![sqlLite3](https://img.shields.io/badge/sqlLite3-black.svg)

<!-- 페이지 설명, 이미지 추가 -->

## 주요기능

- 세미나실(205호, 206호, 207호) 예약
- 학생 한명 당 주 2회 최대 4시간 예약 가능
- 관리자페이지에서 공지사항 수정가능

## Gems

- [devise](https://github.com/plataformatec/devise) : 사용자 회원가입, 로그인, 로그아웃, 회원탈퇴, 권한인증 라이브러리
- [fullcalendar-rails](https://github.com/bokmann/fullcalendar-rails) : jQuery FullCalendar plugin
- [momentjs-rails](https://github.com/derekprior/momentjs-rails) :  Moment.js library in a rails 
- [validates_timeliness](https://github.com/adzap/validates_timeliness) : 날짜 시간과 관련된 validation 제공
- [tinymce-rails](https://github.com/spohlenz/tinymce-rails) : TinyMCE editor(WYSIWYG) with the Rails asset pipeline
- [figaro](https://github.com/laserlemon/figaro) : 환경 변수 관리(secret key 관리)
- [whenever](https://github.com/javan/whenever) : a clear syntax for writing and deploying cron jobs, 특정 jobs을 반복 시행할 수 있게 설정하는 gem


## 역할

- 정다혜
	- 전체적인 모델링
	- 세미나실 예약 CRUD 개발
	- 관리자 페이지 개발
	- 전체 페이지 UI/UX 개발(캘린더 제외)
- 우미연
	- 세미나실 예약정보 테이블 UI/UX 개발