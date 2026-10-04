# 📊 dashboard-nextjs

Next.js와 shadcn/ui로 만든 다크 테마 대시보드. 상품·고객·거래 데이터를 차트와 테이블로 한눈에 보여줍니다.

## 주요 기능

- **사이드바** — 메뉴 펼침·선택 강조, 아이콘 모드 접기(`⌘B` / `Ctrl+B`), 모바일 슬라이드 패널
- **헤더** — 선택한 메뉴에 따라 breadcrumb 자동 변경, 팀 멤버 아바타
- **Product Activity** — 잔액·재고·매출·지출 라인 차트 카드, 상품 상태별 도넛 차트
- **Customers Activity · Active** — Paid/Checkout 막대 차트, 국가별 고객 비율 프로그레스 바
- **Recent Transaction** — 최근 주문 내역 테이블

## 기술 스택

| 구분 | 기술 |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI · Chart | shadcn/ui (Base UI), lucide-react, Recharts |

## 담당 역할

개인 프로젝트 · 대시보드 화면 구현 — 팀 프로젝트에서 작업한 사이드바를 통합하고 다크 테마에 맞게 정리

## 폴더 구조

```
app/                  페이지, 레이아웃, 테마 색상(globals.css)
components/layout/    사이드바, 헤더, 메뉴 데이터
components/charts/    라인·도넛·막대·프로그레스 차트
components/ui/        shadcn/ui 컴포넌트
hooks/                모바일 화면 감지
```

## 로컬 실행

```bash
npm install
npm run dev                       # http://localhost:3000
```

> 화면의 데이터는 모두 목업 데이터이며, 사이드바 메뉴는 선택 상태만 변경하고 실제 페이지 이동은 구현되어 있지 않습니다.
