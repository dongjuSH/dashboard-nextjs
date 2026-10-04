# dashboard-nextjs

Next.js와 shadcn/ui로 만든 다크 테마 대시보드입니다.

상품·고객·거래 데이터를 차트와 테이블로 보여주는 관리자 대시보드 UI이며, 팀 프로젝트에서 작업한 사이드바를 함께 반영했습니다.

## 기술 스택

- **Framework** : Next.js 16 (App Router), React 19, TypeScript
- **Styling** : Tailwind CSS v4
- **UI** : shadcn/ui (Base UI), lucide-react
- **Chart** : Recharts

## 주요 기능

### 사이드바

- 상위 메뉴 클릭 시 하위 메뉴 펼침, 선택된 메뉴 강조
- 사이드바 접기 시 아이콘만 표시 (단축키 `⌘B` / `Ctrl+B`)
- 모바일 화면(768px 미만)에서는 슬라이드 패널로 표시
- 팀 선택 드롭다운, 유저 프로필 메뉴, 안내 카드(닫기 가능)

### 헤더

- 사이드바에서 선택한 메뉴에 따라 breadcrumb 자동 변경 (예: `Home · Products · All Products`)
- 팀 멤버 아바타 그룹, Invite 버튼

### 대시보드 콘텐츠

| 섹션 | 내용 |
| --- | --- |
| Product Activity | Nominal Balance · Total Stock Product · Nominal Revenue · Nominal Expense 라인 차트 카드, 상품 상태별 도넛 차트 |
| Customers Activity | Paid / Checkout 상품 비교 세로 막대 차트 |
| Customers Active | 국가별 고객 비율 프로그레스 바 (애니메이션) |
| Recent Transaction | 최근 주문 내역 테이블 |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 대시보드를 확인할 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
app/
├── layout.tsx                 # 루트 레이아웃 (폰트, 전역 스타일)
├── page.tsx                   # 대시보드 페이지
└── globals.css                # 테마 색상 변수 (다크 테마)
components/
├── layout/
│   ├── app_sidebar.tsx        # 사이드바 전체 구성
│   ├── sidebar_header.tsx     # 팀 선택, 검색, 사이드바 여닫기
│   ├── nav_main.tsx           # 메인 메뉴
│   ├── nav_user.tsx           # 유저 프로필 메뉴
│   ├── team_switcher.tsx      # 팀 선택 드롭다운
│   ├── sidebar_card.tsx       # 안내 카드
│   ├── sidebar_data.ts        # 메뉴, 유저, 팀 데이터
│   ├── dashboard_navigation.tsx # 선택된 메뉴 상태 공유 (Context)
│   └── header.tsx             # 상단 헤더 (breadcrumb)
├── charts/                    # 라인, 도넛, 막대, 프로그레스 차트
├── product_activity.tsx       # 상품 섹션
├── customer_activity.tsx      # 고객 섹션
├── recent_transactions.tsx    # 거래 내역 섹션
└── ui/                        # shadcn/ui 컴포넌트
hooks/
└── use-mobile.ts              # 모바일 화면 여부 감지
```

## 참고

- 화면에 표시되는 데이터는 모두 목업 데이터입니다.
- 사이드바 메뉴는 현재 선택 상태와 breadcrumb만 변경하며, 실제 페이지 이동은 구현되어 있지 않습니다.
