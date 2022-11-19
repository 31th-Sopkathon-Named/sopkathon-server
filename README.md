# sopkathon-server

## 서비스 이름과 간단한 소개

---

- 서비스명 : 2h
- 서비스 한 줄 소개 : 2사람의 마음의 변화는 2시간 2병으로 결정된다

<br/><br/>

---

## 각자 개발 담당 부분

---

- 가희 : 내 정보 입력, 평가 입력 API , 설계
- 서우 : 상대방과 매치, 결과 보기 API, db설계 


<br/><br/>

## 코딩 컨벤션
---
Link : https://eunbigombi.notion.site/Code-Convention-60a98e719ca14ba480111149e76bb828


<br/><br/>


## 브랜치 전략

---
<aside>
`main branch` : 배포 단위 branch

`develop branch` : 주요 개발 branch, main merge 전 거치는 branch

`feature branch`:  기능별 branch

- 할 일 issue 등록 후 issue 번호로 branch 생성 후 작업
    - ex) feature/#`issue num`
- 해당 branch 작업 완료 후 PR 보내기
    - reviewer에 서로 tag후 code-review
    - comment 전 merge 불가!
</aside>

<br/><br/>

## 프로젝트 폴더링

---
<pre>
<code>
📦 constants
 ┗ 📜 index.ts
 ┗ 📜 response.ts
 ┗ 📜 responseMessage.ts
 ┗ 📜 statusCode.ts

📦 controllers               // service에서 처리된 로직들을 전달 받아 response해줌
 ┣ 📜 index.ts
 ┗ 📜 UserController.ts
 ┗ 📜 EvaluationController.ts
 ┗ 📜 ResultController.ts


📦 interfaces                // type interface 정의
 ┗ 📂 user
 ┃ ┗ 📜 .ts
 ┗ 📂 evaluation
   ┗ 📜 .ts
 ┗ 📂 result
   ┗ 📜 .ts


📦 routers                    // endpoint 정의
 ┣ 📜 index.ts
 ┣ 📜 UserRouter.ts
 ┣ 📜 EvaluationRouter.ts
 ┣ 📜 ResultRouter.ts


📦 services                  // 상세 구현, controller로 전달 됨
 ┣ 📜 index.ts
 ┣ 📜 UserService.ts
 ┣ 📜 EvaluationService.ts
 ┣ 📜 ResultService.ts
</code>

</pre>


<br/><br/>

## API DOCS

---

> API 명세서 링크: <https://eunbigombi.notion.site/API-5933994047ae4c10a7cdc19a6d858c67


