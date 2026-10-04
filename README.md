# 📊 dashboard-nextjs

Next.js App Router와 **shadcn/ui** 컴포넌트 활용을 연습하기 위해 만든 다크 테마 대시보드 페이지입니다.
레퍼런스 디자인을 보고 상품·고객·거래 데이터를 차트와 테이블로 구성했습니다.

## 연습 포인트

- **Next.js App Router** — `app/` 구조, 서버·클라이언트 컴포넌트 구분(`"use client"`), `@/` 경로 별칭
- **shadcn/ui** — CLI로 컴포넌트를 추가하고(`components/ui`), 디자인에 맞게 직접 수정해서 사용
- **컴포넌트 분리** — 레이아웃(사이드바·헤더) / 섹션(상품·고객·거래) / 차트 컴포넌트로 나누고 데이터는 별도 파일로 관리
- **상태 공유** — Context로 사이드바에서 선택한 메뉴를 헤더 breadcrumb와 공유
- **반응형** — 데스크톱은 접히는 사이드바, 모바일(768px 미만)은 슬라이드 패널

## 화면 구성

| 영역 | 내용 | 사용 컴포넌트 |
|---|---|---|
| 사이드바 | 메뉴 펼침·선택 강조, 아이콘 모드 접기(`⌘B` / `Ctrl+B`) | Sidebar, Collapsible, DropdownMenu, Avatar, Sheet |
| 헤더 | 선택한 메뉴에 따라 바뀌는 breadcrumb | Breadcrumb, Separator |
| Product Activity | 잔액·재고·매출·지출 라인 차트, 상품 상태별 도넛 차트 | Card, Chart(Recharts) |
| Customers Activity | Paid/Checkout 막대 차트, 국가별 고객 비율 | Card, Chart, Progress |
| Recent Transaction | 최근 주문 내역 테이블 | Table |

## 기술 스택

| 구분 | 기술 |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI · Chart | shadcn/ui (Base UI), Recharts, lucide-react |

## 실행

```bash
npm install
npm run dev    # http://localhost:3000
```

> 학습용 프로젝트로, 화면의 데이터는 모두 목업 데이터입니다.
