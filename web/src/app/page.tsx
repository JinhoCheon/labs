import Link from "next/link";

const krStocks = [
  { name: "삼성전자", ticker: "005930", qty: "12주", price: "₩78,400", change: "+1.82%" },
  { name: "SK하이닉스", ticker: "000660", qty: "6주", price: "₩186,500", change: "+0.74%" },
  { name: "LG에너지솔루션", ticker: "373220", qty: "2주", price: "₩408,000", change: "-0.46%" },
];

const usStocks = [
  { name: "NVIDIA", ticker: "NVDA", qty: "4주", price: "₩274,181", change: "-0.73%" },
  { name: "AMD", ticker: "AMD", qty: "7주", price: "₩311,371", change: "+0.91%" },
  { name: "S&P500 ETF", ticker: "VOO", qty: "3주", price: "₩612,900", change: "+0.22%" },
];

const coins = [
  { name: "Bitcoin", ticker: "BTC", qty: "0.18", price: "₩92,400,000", change: "+2.12%" },
  { name: "Ethereum", ticker: "ETH", qty: "1.6", price: "₩5,120,000", change: "+0.84%" },
  { name: "Solana", ticker: "SOL", qty: "28", price: "₩176,000", change: "-1.14%" },
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="topbar">
        <Link className="brand" href="/">
          My Asset
        </Link>
      </header>

      <main className="container">
        <section className="section">
          <h2 className="section-title">국내 주식현황</h2>
          <div className="table">
            <div className="row head">
              <div>종목</div>
              <div>보유</div>
              <div>현재가</div>
              <div>등락</div>
            </div>
            {krStocks.map((item) => (
              <div key={item.ticker} className="row">
                <div>
                  <div className="name">{item.name}</div>
                  <div className="ticker">{item.ticker}</div>
                </div>
                <div className="qty">{item.qty}</div>
                <div className="price">{item.price}</div>
                <div className={item.change.startsWith("+") ? "delta up" : "delta down"}>{item.change}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">미국 주식현황</h2>
          <div className="table">
            <div className="row head">
              <div>종목</div>
              <div>보유</div>
              <div>현재가</div>
              <div>등락</div>
            </div>
            {usStocks.map((item) => (
              <div key={item.ticker} className="row">
                <div>
                  <div className="name">{item.name}</div>
                  <div className="ticker">{item.ticker}</div>
                </div>
                <div className="qty">{item.qty}</div>
                <div className="price">{item.price}</div>
                <div className={item.change.startsWith("+") ? "delta up" : "delta down"}>{item.change}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">코인현황</h2>
          <div className="table">
            <div className="row head">
              <div>코인</div>
              <div>보유</div>
              <div>현재가</div>
              <div>등락</div>
            </div>
            {coins.map((item) => (
              <div key={item.ticker} className="row">
                <div>
                  <div className="name">{item.name}</div>
                  <div className="ticker">{item.ticker}</div>
                </div>
                <div className="qty">{item.qty}</div>
                <div className="price">{item.price}</div>
                <div className={item.change.startsWith("+") ? "delta up" : "delta down"}>{item.change}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
