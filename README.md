# Trudy
외국인 관광객을 위한 한국 local과의 교류 플랫폼

![1](https://github.com/sungwookoo/Trudy/assets/53362965/ef0273d5-6b63-4ddf-9123-b0e4e6de0982)


✔️ **구현 사항**

- 외국인 관광객을 위한 한국 local과의 교류 플랫폼
- 외국인 관광객에게 현지인을 통한 로컬 정보를 제공
- 지도, 포럼, 커뮤니티 기능 제공

✔️ **담당 역할**

- Google Map Api를 활용한 지도 기능
	- 관광지 검색, 관광지 정보 제공
	- 지도를 사용하지 않고도 관광지를 볼 수 있기에 지도 On/Off 기능 구현
- 공통 컴포넌트 개발
	- 컴포넌트의 재사용을 고려하며 검색, 지역 필터, 카테고리 필터, 북마크, 버튼 기능을 구현
- 게시물 및 댓글 CRUD 구
	- 사용자의 정보를 받고 게시물을 작성, 수정, 삭제하는 기능과
	- 댓글의 작성, 수정, 삭제를 구현

✔️ **기술 스택**

- Backend : SpringBoot, Spring Security, MySQL

- Frontend : React, HTML, CSS, Tailwind

- Infra : AWS EC2, AWS RDS(MySQL), Docker, Jenkins, Nginx, Gitlab

✔️ **프로젝트 성과**

- 사용자 중심 디자인: 외국인 관광객이 현지인과 손쉽게 연결될 수 있는 사용자 경험 디자인 구현

- 사용자 중심 기능 구현 : 외국인 관광객이라는 특성을 살려 필요한 지도 기능, 교류를 위한 커뮤니티 기능, 친구를 찾을 수 있는 포럼 페이지를 구현

- 보안 강화: SpringSecurity와 JWT를 통해 사용자 데이터의 안전성 확보

✔️ **프로젝트 리뷰**

- Trudy 프로젝트는 역할을 분배하고 협업을 필요로 하는 첫 sw 프로젝트였으며 React와 TypeScript를 처음 사용해볼 수 있었습니다.
- 기존의 Vue에서 한 가지 기능을 구현하기 위해서는 제한적인 문법을 사용하여야 했다면, React는 JavaScript 문법을 이용해 조금 더 개발자의 재량에 맡긴다는 것을 경험할 수 있었습니다.
- Vue와 마찬가지로 LifeCycle을 이해하고 이를 활용한 React Hooks에 대해 경험할 수 있었습니다.
- 또한, 컴포넌트를 분리하고 props를 전달하는 과정이 Vue에 비하여 매끄럽게 진행된다고 느낄 수 있었습니다. 
 - 다만 아쉬웠던 점은, Prop Drilling을 이용하여 상위 컴포넌트에서 하위 컴포넌트로 데이터를 넘기게 되어 prop을 추적하는 것이 힘들었습니다. 
	 - 전역 상태관리 툴의 중요성에 대해 뒤늦게 인지하고 **로그인** 및 **사용자 인증**부분에 Context API를 도입하여 사용할 수 있었습니다.
	 - 부족한 React Hook에 대해 전문성을 기를 수 있었고 적절한 hook과 외부 상태관리 Tool을 이용하여 다음 프로젝트를 해보는 것이 목표입니다.

✔️ **결과**

**- DB 설계, ERD 작성**

- ERD
    
    [![2](https://user-images.githubusercontent.com/53362965/251973925-83721ab6-f849-489e-b8e1-e29d9d3c5596.png)](https://user-images.githubusercontent.com/53362965/251973925-83721ab6-f849-489e-b8e1-e29d9d3c5596.png)
    

**- 아키텍처 설계**

- 아키텍처 구성도
    
    [![3](https://user-images.githubusercontent.com/53362965/251973929-2f858746-95e5-4f01-b7f8-ca2aea0f2a84.jpeg)](https://user-images.githubusercontent.com/53362965/251973929-2f858746-95e5-4f01-b7f8-ca2aea0f2a84.jpeg)

**[로그인]**
![4](https://github.com/sungwookoo/Trudy/assets/53362965/54301c72-5a5a-4efd-91e1-6a10b5f8a8b4)


[**회원가입 - 이메일 인증 전]**
![5](https://github.com/sungwookoo/Trudy/assets/53362965/c227cea0-fbd6-4dea-a54f-67c287358d3e)


[**회원가입 - 이메일 인증 후]**
![6](https://github.com/sungwookoo/Trudy/assets/53362965/93322946-b369-4578-a539-1fa693902f5d)


[**지도(GoogleMap API) 내 관광지 검색]**
![7](https://github.com/sungwookoo/Trudy/assets/53362965/538aaa02-b482-480d-81fb-a86ba69e9110)


[**포럼]**
![8](https://github.com/sungwookoo/Trudy/assets/53362965/74687990-bf77-4395-a50d-75ab9f8f6dca)


[**포럼 작성]**
![9](https://github.com/sungwookoo/Trudy/assets/53362965/08e06183-52ed-4fe6-a46b-3d69d3920bff)


[**채팅]**
![10](https://github.com/sungwookoo/Trudy/assets/53362965/cc61cb62-6873-4893-9bef-24407d98e598)
