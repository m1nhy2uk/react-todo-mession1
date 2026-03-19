# 리액트 투두 앱 만들기 미션 레포

## 사용 영상


https://github.com/user-attachments/assets/7a0b1191-8b83-4be0-a9d0-aef01accaaae



## 목적

1. React 컴포넌트 구조 이해
2. 투두 앱 기능 구현
3. localStorage를 활용한 데이터 저장 및 유지 기능 구현

## 기술 스택

React
Vite
TailWindCss
JavaScript

## 기능

- 할 일 추가
- 할 일 삭제
- 할 일 완료 체크
- 할 일 세부사항 기록 및 저장
- localStorage 저장

## 프로젝트 구조

    src/
    ├── components/
    │ ├── TodoForm.jsx # 할 일 입력 폼
    │ ├── TodoItem.jsx # 개별 할 일 항목
    │ └── TodoList.jsx # 할 일 목록 렌더링
    ├── context/
    │ └── TodoContext.jsx # Context API 전역 상태 제공
    ├── hooks/
    │ └── useTodos.js # 할 일 CRUD 로직 Custom Hook
    ├── pages/
    │ ├── Main.jsx # 메인 페이지
    │ └── Todo.jsx # TODO 관리 페이지
    ├── utils/
    │ └── storage.js # 로컬 스토리지 처리
    ├── App.jsx # 라우팅 설정
    └── main.jsx # 앱 진입점
