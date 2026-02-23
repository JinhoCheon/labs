from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/asset/{asset_type}")
def read_asset(asset_type: str):
    return {"asset_type": asset_type}