import Link from "next/link";

type ApiResponse = {
  // TODO: 나중에 실제 JSON 구조로 정의
  krStocks: any[];
  usStocks: any[];
  coins: any[];
};

async function getPortfolio(): Promise<ApiResponse> {
  const res = await fetch("https://YOUR-API-ENDPOINT-HERE", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getPortfolio();

  return (
    <div className="page">
      <header className="topbar">
        <Link className="brand" href="/">
          My Asset
        </Link>
      </header>

      <main className="container">
        {/* TODO: data.krStocks / data.usStocks / data.coins를 이용해 렌더링 */}
      </main>
    </div>
  );
}
