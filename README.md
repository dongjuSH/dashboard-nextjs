# 📊 dashboard-nextjs

Next.js와 shadcn/ui로 만든 다크 테마 대시보드. 상품·고객·거래 데이터를 차트와 테이블로 한눈에 보여줍니다.

## 화면 구성

- **사이드바** — 메뉴 펼침·선택 강조, 아이콘 모드 접기(`⌘B` / `Ctrl+B`), 모바일 슬라이드 패널
- **헤더** — 선택한 메뉴에 따라 바뀌는 breadcrumb
- **Product Activity** — 잔액·재고·매출·지출 라인 차트 카드, 상품 상태별 도넛 차트
- **Customers Activity** — Paid/Checkout 막대 차트, 국가별 고객 비율 프로그레스 바
- **Recent Transaction** — 최근 주문 내역 테이블

## 기술 스택

| 구분 | 기술 |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI · Chart | shadcn/ui, Recharts |

## 실행

```bash
npm install
npm run dev    # http://localhost:3000
```

> 화면의 데이터는 모두 목업 데이터입니다.
