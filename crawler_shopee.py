import requests
import json

url = "https://shopee.vn/api/v4/search/search_items"

params = {
    "by": "pop",
    "keyword": "áo thun nam",
    "limit": 50,
    "newest": 0,
    "order": "desc",
    "page_type": "search",
    "scenario": "PAGE_GLOBAL_SEARCH",
    "version": 2
}

headers = {
    "User-Agent": "Mozilla/5.0"
}

r = requests.get(url, params=params, headers=headers)
data = r.json()

products = []

for i, item in enumerate(data["items"][:30]):

    item_basic = item["item_basic"]

    name = item_basic["name"]

    price = item_basic["price"] / 100000

    shopid = item_basic["shopid"]
    itemid = item_basic["itemid"]

    image = "https://cf.shopee.vn/file/" + item_basic["image"]

    link = f"https://shopee.vn/{name.replace(' ','-')}-i.{shopid}.{itemid}"

    product = {
        "id": i + 1,
        "name": name,
        "price": int(price),
        "old_price": 0,
        "image": image,
        "shop": "Shopee Seller",
        "rating": 4.5,
        "review": "Sản phẩm bán chạy trên Shopee.",
        "affiliate_url": link,
        "platform": "Shopee",
        "category": "Áo nam"
    }

    products.append(product)

with open("data/products.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Đã tạo products.json với", len(products), "sản phẩm")
