// src/app/page.tsx

/**
 * 이 파일은 "/" (홈페이지) 화면을 만든다.
 * Next.js에서는 "src/app/page.tsx"가 루트 페이지가 됨.
 */

import Link from "next/link";

// 1) 화면에 보여줄 "가짜 데이터" (나중에 API로 바꿔 끼울 수 있음)
const marketCards = [
  { title: "달러 환율", value: "1,448.20", change: "+6.2 (0.42%)", trend: "up" as const },
  { title: "나스닥", value: "22,627.27", change: "-258.79 (1.13%)", trend: "down" as const },
  { title: "S&P 500", value: "6,837.75", change: "-71.76 (1.03%)", trend: "down" as const },
];

const rankingRows = [
  { rank: 1, name: "라미나 테라퓨틱스", price: "5,609원", change: "+38.43%", trend: "up" as const },
  { rank: 2, name: "AMDL", price: "20,548원", change: "+19.34%", trend: "up" as const },
  { rank: 3, name: "SOXL", price: "99,094원", change: "+4.34%", trend: "up" as const },
  { rank: 4, name: "AMD", price: "311,371원", change: "+9.83%", trend: "up" as const },
  { rank: 5, name: "엔비디아", price: "274,181원", change: "-0.73%", trend: "down" as const },
];

const community = [
  { user: "곰마파", badge: "5억대 자산가", time: "39분", text: "주주 수익 750달러 회수. 시드 1/16의 원금(현재 389수)만 계속 유지" },
  { user: "인덱스킹", badge: "장기투자", time: "38분", text: "변동성 구간이라 분할매수로 접근 중. 급등 종목은 비중 조절!" },
];

export default function HomePage() {
  return (
    <div>
      {/* ===== 상단 네비게이션 바 ===== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(11,13,18,0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 16, height: 56 }}>
          {/* 로고/타이틀 */}
          <div style={{ fontWeight: 1000, marginLeft: 15 }}>MyStock</div>

          {/* 메뉴 */}
          <nav style={{ display: "flex", gap: 20, marginLeft: 30 }}>
            <a className="muted" href="#">Home</a>
            <a className="muted" href="#">Coin</a>
            <a className="muted" href="#">주식 골라보기</a>
            <a className="muted" href="#">내 계좌</a>
          </nav>

          {/* 오른쪽 영역 (검색/로그인) */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="card"
              style={{
                padding: "8px 10px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span className="muted2">🔍</span>
              <span className="muted2" style={{ fontSize: 13 }}>
                / 를 눌러 검색하세요
              </span>
            </div>

            <button className="btn primary">로그인</button>
          </div>
        </div>
      </header>

      {/* ===== 본문 ===== */}
      <main className="container" style={{ paddingTop: 18, paddingBottom: 40 }}>
        {/* 상단 지표 카드 3개 (환율/나스닥/S&P 등) */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {marketCards.map((c) => (
            <div key={c.title} className="card" style={{ padding: 14 }}>
              <div className="muted" style={{ fontSize: 13 }}>{c.title}</div>
              <div style={{ marginTop: 6, fontSize: 18, fontWeight: 700 }}>{c.value}</div>
              <div className={c.trend === "up" ? "up" : "down"} style={{ marginTop: 6, fontSize: 13 }}>
                {c.change}
              </div>

              {/* 아주 간단한 “가짜 차트” */}
              <div style={{ marginTop: 10, height: 34, borderTop: "1px dashed rgba(255,255,255,0.10)" }} />
            </div>
          ))}
        </section>

        {/* 2열 레이아웃: 왼쪽(테이블) / 오른쪽(차트+커뮤니티) */}
        <section style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 14 }}>
          {/* ===== 왼쪽: 종목 테이블 ===== */}
          <div className="card" style={{ padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>실시간 차트</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  순위 · 오늘 21:54 기준
                </div>
              </div>

              {/* 탭 느낌 버튼 */}
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn">전체</button>
                <button className="btn">국내</button>
                <button className="btn">해외</button>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: 60 }}>순위</th>
                    <th>종목</th>
                    <th style={{ width: 140 }}>현재가</th>
                    <th style={{ width: 120 }}>등락률</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingRows.map((r) => (
                    <tr key={r.rank}>
                      <td className="muted">{r.rank}</td>
                      <td style={{ fontWeight: 600 }}>{r.name}</td>
                      <td className="muted">{r.price}</td>
                      <td className={r.trend === "up" ? "up" : "down"} style={{ fontWeight: 700 }}>
                        {r.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* 예시로 “더 보기” 링크 */}
              <div style={{ marginTop: 12 }}>
                <Link className="muted" href="/dashboard">
                  더 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* ===== 오른쪽: 선택 종목 카드(차트) + 커뮤니티 ===== */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* 차트 카드 */}
            <div className="card" style={{ padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div className="muted" style={{ fontSize: 12 }}>3x</div>
                  <div style={{ fontWeight: 700, marginTop: 4 }}>디렉시온 미국 반도체 3배 ETF</div>
                </div>
                <span className="badge up">+4.34%</span>
              </div>

              {/* 가짜 캔들 차트 영역 */}
              <div
                style={{
                  marginTop: 12,
                  height: 220,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(78,161,255,0.08), rgba(0,0,0,0))",
                }}
              >
                <div className="muted2" style={{ padding: 10, fontSize: 12 }}>
                  (여기에 실제 차트 라이브러리(Recharts/TradingView)를 붙일 수 있어요)
                </div>
              </div>
            </div>

            {/* 커뮤니티 카드 */}
            <div className="card" style={{ padding: 14 }}>
              <div style={{ fontWeight: 700 }}>커뮤니티</div>

              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
                {community.map((c, idx) => (
                  <div key={idx} style={{ borderTop: idx === 0 ? "none" : "1px solid rgba(255,255,255,0.08)", paddingTop: idx === 0 ? 0 : 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
                      <div style={{ fontWeight: 700 }}>{c.user}</div>
                      <span className="badge" style={{ fontSize: 11 }}>{c.badge}</span>
                      <span className="muted2" style={{ marginLeft: "auto", fontSize: 12 }}>{c.time}</span>
                    </div>

                    <p className="muted" style={{ margin: "8px 0 0 0", fontSize: 13, lineHeight: 1.5 }}>
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 모바일/작은 화면 대응 힌트 */}
        <p className="muted2" style={{ marginTop: 14, fontSize: 12 }}>
          Tip: 작은 화면에서는 2열이 깨질 수 있어요. 다음 단계에서 반응형(모바일)도 같이 해볼게요.
        </p>
      </main>
    </div>
  );
}