from fastapi import APIRouter


router = APIRouter()

@router.get("/quotes")
async def get_quote(symbol: str):
    return {"symbol": symbol}