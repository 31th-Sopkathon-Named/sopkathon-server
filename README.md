# sopkathon-server

## 서비스 이름과 간단한 소개

---

- 서비스명 : 2
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

## ERD

---
![Untitled (5)](https://user-images.githubusercontent.com/78267146/202872866-24070b8a-8e51-4df5-93f9-cc3889415b5e.png)



<br/><br/>

## schema.prisma

---
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Evaluation {
  id                           Int    @id @default(autoincrement())
  fromId                       Int
  toId                         Int
  rate                         String @db.VarChar(100)
  User_Evaluation_fromIdToUser User   @relation("Evaluation_fromIdToUser", fields: [fromId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "fromId")
  User_Evaluation_toIdToUser   User   @relation("Evaluation_toIdToUser", fields: [toId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "toId")
}

model User {
  id                                 Int          @id @unique @default(autoincrement())
  nickName                           String       @db.VarChar(100)
  phoneNum                           String       @db.VarChar(100)
  Evaluation_Evaluation_fromIdToUser Evaluation[] @relation("Evaluation_fromIdToUser")
  Evaluation_Evaluation_toIdToUser   Evaluation[] @relation("Evaluation_toIdToUser")
}

```

<br/><br/>

## package.json

---
```
{
  "name": "sopkathon-server",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/31th-Sopkathon-Named/sopkathon-server.git",
  "author": "dltjdn <hana40004@naver.com>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "db:pull": "npx prisma db pull",
    "db:push": "npx prisma db push",
    "generate": "npx prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "express": "^4.18.2",
    "prisma": "^4.6.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  }
}

```

<br/><br/>
## server architecture


---

![KakaoTalk_20221120_064114202](https://user-images.githubusercontent.com/78267146/202872745-17ec4c46-87a9-4a32-b98d-e44ae40dda7c.png)


<br/><br/>
## API DOCS

---

> API 명세서 링크: <https://eunbigombi.notion.site/API-5933994047ae4c10a7cdc19a6d858c67


