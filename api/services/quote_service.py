import httpx
from datetime import datetime, timezone
from api.clients.broker_a import fetch_quote, BrokerAError

class QuoteServiceError(Exception):
    pass

async def get_quote(symbol: str) -> dict:
    async with httpx.AsyncClient() as client:
        try:
            raw = await fetch_quote(client, symbol)
        except BrokerAError as e:
            raise QuoteServiceError(f"broker_a failed: {e}") from e

    # 여기서 "가공/정규화"
    return {
        "symbol": symbol,
        "price": float(raw["last"]),
        "as_of": datetime.now(timezone.utc).isoformat(),
        "source": "broker_a",
    }