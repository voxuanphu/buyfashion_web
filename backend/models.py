from sqlalchemy import Column, Integer, Float, Text
from backend.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    title = Column(Text)
    price = Column(Integer)
    image = Column(Text)
    shop = Column(Text)
    rating = Column(Float)
    affiliate_url = Column(Text)
    review = Column(Text)
