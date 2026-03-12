 from fastapi import FastAPI
from sqlalchemy.orm import Session
from backend.database import engine, SessionLocal
from backend.models import Base, Product

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/products")
def get_products():

    db: Session = SessionLocal()

    products = db.query(Product).all()

    return [
        {
            "title": p.title,
            "price": p.price,
            "image": p.image,
            "shop": p.shop,
            "rating": p.rating,
            "affiliate_url": p.affiliate_url,
            "review": p.review
        }
        for p in products
    ]
