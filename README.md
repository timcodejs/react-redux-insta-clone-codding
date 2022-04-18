# react-redux-insta-clone-codding

| Day | 적용 | 프로젝트 내용 |
| ------ | -- |----------- |
| 1일차 | ✅ | - 폴더 정리(_layout, components, hook, pages, reducer, saga, store)<br/>- 페이지 라우팅 처리(App.js - home.js, login.js, register.js)<br/>- 페이지별 컴포넌트 제작(components - home, login, register)<br/>- 로그인, 회원가입 페이지 틀 제작 |
| 2일차 | ✅ | - 로그인, 회원가입 페이지 styled-components 모듈을 사용하여 디자인 적용<br/>- redux, redux-saga, reducer 등록<br/>- reducer, saga에 user.js 등록(로그인, 로그아웃, 회원가입)<br/>- 커스텀 훅 등록(/hook/useInput.js)<br/>- 로그인, 로그아웃, 회원가입 더미데이터로 로직 처리<br/>- 메인 페이지에 사용될 layoutNav.js 제작 |
| 3일차 | ✅ | - 메인 페이지 레이아웃 컴포넌트 제작(/components/home/post/post.js)<br/>- 메인 페이지 post.js, info.js 스타일 적용<br/>- faker 라이브러리 사용하여 가짜 사용자 정보 등록(info.js) |
| 4일차 | ✅ | - 메인 페이지 post.js 스타일 추가<br/>- reducer, saga에 post.js 등록(게시물 로드)<br/>- 게시물 더미데이터로 메인 페이지의 postForm.js에 더미 게시물 로드되도록 설정 |
| 5일차 | ✅ | - 메인 페이지 story.js 제작 및 더미데이터 적용<br/>- info.js, addPost.js 스타일 적용<br/>- react-dropzone 라이브러리를 사용하여 이미지 업로드 제작(addPost.js) |
| 6일차 | ✅ | - reducer, saga의 post.js에 '게시물 추가' 등록<br/>- addPost.js 스타일 수정 |
| 7일차 | ✅ | - addPost.js 로직 및 스타이 수정<br/>- react-ellipsis-component 라이브러리를 사용하여 각 더미 게시물의 텍스트 길이 조절<br/>- addComment.js 제작<br/>- reducer, saga의 post.js에 '댓글 추가' 등록 |
| 8일차 | ✅ | - addPost.js 로직 수정 |
| 9일차 | ✅ | - commentForm.js 댓글 보기 버튼 수정<br/>- 로그아웃 시 기존 더미데이터 리셋 로직 추가(reducer, saga에 ALLPOSTS_RESET 추가) |
| 10일차 | ✅ | - 필요없는 파일 정리 |
| 11일차 | ✅ | - reducer, saga의 post.js에 '게시물 삭제' 등록<br/>- react-modal 라이브러리를 사용항 전역으로 모달 관리(useModal.js)<br/>- reducer, saga의 post.js에 '게시물 업데이트' 등록<br/>- updatePost.js 제작<br/>- reducer, saga의 post.js에 '댓글 삭제', '좋아요 카운트' 등록<br/>- commentForm.js 로직 수정<br/>- 정의되지 않은 경로 접근 방지용 페이지 제작 및 라우팅 등록(notFound.js) |

