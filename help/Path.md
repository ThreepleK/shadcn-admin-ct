## 폴더 경로
```
/help                   : 개발 관련 도움말
/public                 : 배포 시 사용될 리소스 모음
/src                    : 개발 소스
  ├ assets              : 이미지 리소스
  └ components          : [공용] 컴포넌트 모음
     ├ layout           : 한 페이지에서 사용되는 레이아웃 모음
     └ ui               : [공용] UI 컴포넌트 모음 (https://ui.shadcn.com/docs/components)
  ├ config              : 설정 값 모음
  ├ context             : Provider 컴포넌트 모음
  ├ features            : 페이지 별 화면 구성
  ├ hooks               : [공용] 리엑트 훅 모음
  ├ libs                : [공용] 라이브러리 모음
  ├ locales             : 다국어 모음
  ├ routes              : 라우터 설정 값
     ├ _authenticated   : 인증 후(로그인) 접근 가능 페이지
     ├ (auth)           : 인증 관련 페이지 모음
     └ (errors)         : 에러 관련 페이지 모음
  ├ stores              : [공용] 스토어 모음
  ├ styles              : tailwind css에서 제어 불가 한 css 모음
  └ utils               : 유틸 ?
```

## 특수 파일
```
/src
  └ routerTree.gen.ts   : /src/routes 경로 규격에 맞게 라우터 설정을 한다면 자동으로 생성 (코드 수정 x)
```