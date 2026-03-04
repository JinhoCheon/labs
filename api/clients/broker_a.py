import httpx

class BrokerAError(Exception):
    pass

async def fetch_quote(client: httpx.AsyncClient, symbol: str) -> dict:
    url = f"https://api.broker-a.example/v1/quotes/{symbol}"
    try:
        r = await client.get(url, timeout=5.0)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        raise BrokerAError(str(e)) from e


