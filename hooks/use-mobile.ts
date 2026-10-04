import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

// 화면 크기 변경 감지 등록 및 해제
function subscribe(onChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

// 브라우저에서 현재 모바일 화면인지 확인
function getSnapshot() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

// 서버 렌더링 시에는 window가 없으므로 데스크톱 기준으로 처리
function getServerSnapshot() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
