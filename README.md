# 🌺 향수 쇼핑 웹 사이트 프로젝트 [시향하다]

<div align="center">
 <img src="https://user-images.githubusercontent.com/33623123/181521649-f5a9f730-369e-4414-ab81-97f340eef1d3.png">
 
</div>

<br/>

### 👉[시향하다 바로가기](http://i02b208.p.ssafy.io/)

### 👉[팀 노션 바로가기](https://www.notion.so/e89e794cf439444994ab31f82d06f37a) 

<br/>

### 목차

<hr>

[0. 팀 소개](#0.-팀-소개)

[1. 서비스 소개](#1.-서비스-소개)

[2. 기술스택](#2.-기술-스택)

[3. 기능](#3.-기능)

[4. 아키텍처 상세](#4.-아키텍처-상세)

[5. 개인평가](#5.-개인-평가)


<hr/>

## 0. 팀 소개

* 팀장 강병현 : 프론트엔드 / PM 
* 팀원 이초은 : 프론트엔드
* 팀원 정유진 : 프론트엔드
* 팀원 최수빈 : 프론트엔드 / 디자인
* 팀원 김태현 : 백엔드
* 팀원 노채은 : 백엔드

<hr />

## 1. 서비스 소개
메인 페이지에서 시각적으로 향을 확인하여 고객이 원하는 향의 향수를 쉽게 찾고, 구매할 수 있도록 도움을 주는 웹 서비스입니다.

![메인페이지](https://user-images.githubusercontent.com/33623123/181493020-0f368e7b-0a31-4d86-bab1-b42770d7fc08.png)

### 1.1. 타겟 고객군
구매를 위해 오프라인으로 매장을 찾아가기보다 온라인으로 구매하는 것을 선호하는 고객

<hr />

## 2. 기술 스택

### 2.1. 백엔드

* Javascript

* Node.js
<img src="https://user-images.githubusercontent.com/33623123/181490653-41c4ad6b-7fdc-4ab8-ae76-8de79edfc87e.svg" width="282px">
> 자바스크립트 런타임이다. 주로 서버 사이드 개발에 사용된다.

* Express.js
<img src="https://user-images.githubusercontent.com/33623123/181491197-1ea808d2-6dd6-4f54-a9bd-112a68f5d415.png" width="450px" >
> HTTP 요청에 대한 핸들러를 만들고, 서버를 구동한다.

* JWT
<img src="https://user-images.githubusercontent.com/33623123/181491499-6533b174-f72c-4201-b615-d8bc2151bfb7.jpg">
> 유저를 인증하고 식별하기 위한 토큰기반 인증 시스템이다. JWT 자체에 권한 정보 등을 담을 수 있는 것이 특징이다.

* MongoDB
<img src="https://user-images.githubusercontent.com/33623123/181491654-b11490ec-7af1-4efd-a19e-77c209f85b55.png">
> 대표적인 NoSQL 기반 데이터베이스다.

### 2.2. 프론트엔드

* React.js
<img src="https://user-images.githubusercontent.com/33623123/181491907-be5449d3-3416-44c5-9976-6708683264fd.png" width="350">

> Facebook에서 주도하여 개발한 웹 어플리케이션의 UI를 효과적으로 구축하기 위해 사용하는 Javascript 기반 라이브러리이다. UI 수정과 재사용성이 좋으며, 코드 가독성을 높일 수 있다.


### 2.3. 배포

* Oracle Cloud Instance
* Nginx
> 요청을 분산시켜주는 역할을 하는 WS이다.

### 2.4. 프로젝트 관리

* Git
* Notion

<hr />

## 3. 기능

### 3.1. 사용자

> 사용자 관련 정보를 기반으로 로그인, 수정, 찾기, 마이페이지 등의 기능을 사용할 수 있다.

#### 3.1.1 로그인
![로그인](https://user-images.githubusercontent.com/33623123/181507126-3eedc271-fc46-41a5-b19c-e8cc99bf3ef9.gif)
- 사용자의 이메일과 비밀번호를 입력하면 로그인 할 수 있도록 하는 기능이다.

#### 3.1.2 회원가입
![회원가입](https://user-images.githubusercontent.com/33623123/181494076-0847825f-c90e-4e6e-ac83-1cb0a7a9e1ae.png)
- 사용자의 이메일, 비밀번호, 이름, 연락처, 생년월일을 입력하고 약관의 모두 동의시 회원가입을 할 수 있도록 하는 기능이다.

#### 3.1.3 아이디 찾기
![아이디찾기](https://user-images.githubusercontent.com/33623123/181494306-e6f7886f-4b86-4527-a804-1a96a0ab8dce.gif)
- 사용자가 회원가입 당시 입력했던 연락처를 입력하면 해당 이메일을 alert하는 기능이다.

#### 3.1.4 비밀번호 찾기 및 비밀번호 재설정
![비밀번호찾기1](https://user-images.githubusercontent.com/33623123/181494600-18ecaebc-9d41-4137-9cd2-440ca529ea66.png)
- 사용자의 이메일과 연락처를 입력하면 해당 연락처로 인증번호를 전송한다.

![비밀번호찾기2](https://user-images.githubusercontent.com/33623123/181494609-23d63706-c529-45f0-a405-7372deabb8dc.png)
- 해당 인증번호를 입력하여 일치 여부를 확인 후 일치할 경우 비밀번호 재설정 페이지로 이동한다.

![비밀번호찾기3](https://user-images.githubusercontent.com/33623123/181494606-78084d5c-d42c-4258-b52f-dfc5ae66ee66.png)
- 재설정할 비밀번호를 입력한 후 재설정 완료 시 메인페이지로 이동한다. 

#### 3.1.5 마이페이지(장바구니, 회원정보수정, 회원탈퇴)
**1. 마이페이지**

![마이페이지](https://user-images.githubusercontent.com/33623123/181507604-86a7d1c2-6b46-453b-901c-5dcb885549b6.png)
- 사용자의 기본정보, 장바구니를 확인할 수 있다.
- 회원을 탈퇴할 수 있다.

**2. 회원정보 수정**

![회원정보수정](https://user-images.githubusercontent.com/33623123/181507900-d152761f-c2bb-4622-af6f-3090a17e8154.png)
- 사용자의 회원정보인 아이디, 비밀번호, 연락처를 수정할 수 있다.

### 3.2 관리자
> 관리자로 로그인 했을 경우 상품을 등록하고 조회, 삭제 할 수 있다.

#### 3.2.1 상품관리(조회, 삭제)
![상품관리](https://user-images.githubusercontent.com/33623123/181495343-757e1247-5a6c-46b0-996e-234f1b5fc8ab.png)
- 관리자가 등록했던 상품을 조회할 수 있다.
- 등록했던 상품을 수정, 삭제 할 수 있다.
- 새로운 상품을 등록 할 수 있다.

#### 3.2.2 상품등록
![상품등록](https://user-images.githubusercontent.com/33623123/181495710-2728f377-2e70-45e4-a0f5-3fc807e5e2d7.png)
- 상품의 이름, 가격, 정보를 작성하고 해당 상품의 이미지를 추가하여 새로운 상품들 등록 할 수 있다.

#### 3.2.3 상품수정
![상품수정](https://user-images.githubusercontent.com/33623123/181497153-6fc54f14-2e54-42da-a8d5-4b52c26bf5e8.png)
- 수정 상품의 정보를 불러오고 관련 정보를 수정 할 수 있다.

### 3.3 상품
> 관리자가 등록한 상품의 상세정보를 확인할 수 있고 사용자는 해당 상품에 대한 리뷰 작성 및 장바구니 담기, 구매를 할 수 있다.

#### 3.3.1 상품 상세페이지
![상품상세페이지](https://user-images.githubusercontent.com/33623123/181497976-cd876e53-1604-46e5-b899-2bfc73e886c3.png)
- 상품에 대한 정보(성분, 향료, 정보, 리뷰)를 확인할 수 있다.

#### 3.3.2 상품리뷰
![리뷰](https://user-images.githubusercontent.com/33623123/181498421-bca3f641-1be0-4b1e-8b1e-b103a8f1bf63.png)
- 사용자는 상품에 대한 리뷰를 조회하고 작성할 수 있다.

#### 3.3.3 장바구니 담기

#### 3.3.4 상품구매
**1. 회원 구매**

![상품구매](https://user-images.githubusercontent.com/33623123/181506684-fc64f9de-33fd-4b71-8d5c-216d15d866bd.gif)
- 로그인 상태일 경우 배송관련 정보를 입력받는다.
- 결제에 대한 약관에 모두 동의 시 결제시스템(import)을 실행한다.

**2. 비회원 구매**

![비회원상품구매](https://user-images.githubusercontent.com/33623123/181506393-a2a8e8c6-4e5a-4b22-8e38-2613bd1edb62.gif)
- 로그인 상태일 경우 비회원으로 주문할 수 있다.
- 비회원 주문 시 사용자의 기본 정보와 배송정보를 입력 받는다.
- 결제에 대한 약관에 모두 동의 시 결제시스템(import)을 실행한다.



## 4. 아키텍처 상세

![소프트웨어아키텍처](https://user-images.githubusercontent.com/33623123/181488092-67d11e0e-d63a-4641-a280-c0ff820b5dea.jpg)

<hr />

## 5. 개인 평가
### 5.1 문제 해결
* **강병현 [프론트엔드]**
> Import 결제모듈 시스템을 처음 도입해봤다. React와 Import 결제모듈 시스템을 호출하는 방법에 관한 자료가 적어서 힘들었지만 jquery를 이용하여 쉽게 호출할 수 있었다.

* **이초은 [프론트엔드]**
> 통신 구현할 때 데이터를 보내는 부분에서 계속 오류가 났었는데, 검색을 하기도 하고 팀원분들께 질문을 드리면서 함께 해결해나갔습니다!
* **정유진 [프론트엔드]**
> 백엔드로부터 상품 정보를 받아 메인페이지와 상품페이지를 구성했고, 상품별 리뷰 작성 기능을 구현하였습니다.

* **최수빈 [프론트엔드]**
> *학기 중 웹 프론트와 백엔드를 따로 배웠기 때문에 프론트와 백엔드를 연결하여 통신하는 부분에서 가장 어려움을 느꼈는데, 이번 기회에 팀원들에게 물어보면서 서버와의 연결을 제대로 배울 수 있었다.
또, github를 협업하면서 써본 적이 없어서 git push 외에는 자세히 알지 못했는데 git pull, git stash와 merge시 충돌이 났을 때 해결하는 법까지 알아갈 수 있었다.*

* **노채은 [백엔드]**
> *로그인, ID/PW 찾기 등의 유저 관련 서비스 기능을 구현하고 유저 및 상품 데이터를 관리하여 DB를 구축하고 프로젝트와 연동하였다.*

### 5.2 느낀 점
* **강병현 [프론트엔드]**
> *지식의 원천은 경험이라는 것을 이번 프로젝트를 통해 크게 느꼈다.
처음에는 부담감이 엄청 컸다. 프로젝트에서 한 번도 해보지 못한 팀장 역할과 현저히 낮은 리액트 지식을 가지고 프로젝트를 만들어 본 경험은 처음이기 때문이다.
하지만 처음 경험해 보는 역할을 수행하면서 완성해나가는 프로젝트를 보면서 그런 부담감을 떨쳐 낼 수 있었다.
아임 포트 가상 결제 API 호출해서 결제 시스템을 도입하고 react-router-dom을 이용한 페이지 라우팅 처리, opengraph, 백엔드와의 서버 요청/응답, build까지 진행해 보면서 React에 대한 기본 지식 활용법과 코드 작성의 흐름을 파악할 수 있었다.
아쉬운 점은 부족한 시간으로 인해 프로젝트의 최적화, 아직 활용해 보지 못한 useReducer, 상태 관리 라이브러리에 신경쓰지 못했다는 것이다. 하지만 이처럼 해결하지 못한 경험도 나중엔 큰 동기부여가 될 것이라고 생각된다.*

* **이초은 [프론트엔드]**
> *회원가입 페이지와 회원정보 수정 페이지 웹 페이지 프로젝트는 처음이라 새롭게 접한 부분이 많았다. 깃허브를 다루는 법에 대해서도 많이 배웠다.
팀원분들께 어려운 부분에 관해 질문을 드리면, 함께 해결하려고 노력해주셔서 감사했고 그만큼 협업이 중요하다는 것도 깨달았다.
다만 웹에 대해서 많은 걸 알지 못한 상태로 프로젝트를 시작하게 되어 아쉬움이 남는다.
다음에 또 프로젝트를 진행하게 된다면, 그 전에 개인 공부를 통한 준비를 철저히 해야겠다는 생각이 들었다.*

* **정유진 [프론트엔드]**
> *이번 프로젝트를 통해 많은 것을 배우고 경험할 수 있었다. 
우선 리액트를 전혀 모르던 내가 리액트를 어느정도 이해하고 사용할 수 있게 되었고, 처음으로 API를 통해 백엔드와 연동해보았으며, github를 활용한 협업이 실제로 어떻게 이루어지는지 알 수 있었다.
혼자였다면 많이 어려웠겠지만, 팀원들의 코드도 많이 참고해보고 어려운 부분이 있다면 물어볼 수 있는 존재가 있다는 게 큰 힘이 되었던 것 같다.
아쉬운 점은 계획한 부분을 오류없이 구현하는 데만 초점을 맞춰서 성능적인 부분은 고려하지 못한 것 같아 아쉬움이 남는다.*

* **최수빈 [프론트엔드]**
> *html, css, js만 접해봐서 react에 관해 배울 기회가 없었는데 이번에 react를 팀원들과 함께 학습하고 그걸 사용하여 프로젝트를 수행했다는 것만으로도 큰 성취감을 얻을 수 있었다.
디자인부터 시작해서 제대로 웹페이지를 만들어본 건 처음이었는데, 생각보다 자잘하게 신경써야할 부분이 많은 작업이라는 것을 느꼈다.
이번 프로젝트를 하지 않았다면 알지 못했을 것들을 많이 배워갈 수 있어서 좋았다.*

* **노채은 [백엔드]**
> *4달간의 백엔드 개발 경험을 통해 고객의 요구사항을 이해하고 구현하는 것과 웹 시장의 기술 스택 흐름을 파악하고 인사이트를 얻는 것의 중요성을 느낄 수 있었다.
한 번도 다뤄보지 않은 언어와 프레임워크를 사용해서 하나의 프로젝트를 구현하기까지 많은 어려움이 있었지만, 협업하고 도움을 주고받으며 많은 것들을 배울 수 있어 의미 있었다.
 또한, 직군별 협업에서 conflict 발생 시 해결하는 과정과 GIT을 다루는 방법 등 실질적인 기술을 배우며 성장할 수 있었다.*
