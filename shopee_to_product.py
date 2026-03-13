import requests
import json
import re

url = input("Dán link Shopee: ")

headers = {
    "User-Agent": "Mozilla/5.0"
}

r = requests.get(url, headers=headers)

html = r.text

name_match = re.search(r'<title>(.*?)</title>', html)
name = name_match.group(1).replace(" | Shopee Việt Nam", "") if name_match else "Shopee Product"

img_match = re.search(r'property="og:image" content="(.*?)"', html)
image = img_match.group(1) if img_match else ""

price_match = re.search(r'price\":(\d+)', html)
price = int(price_match.group(1)) if price_match else 0

product = {
    "id": 1,
    "name": name,
    "price": price,
    "old_price": price + 50000,
    "image": image,
    "shop": "Shopee Shop",
    "rating": 4.7,
    "review": "Sản phẩm bán chạy trên Shopee",
    "affiliate_url": url,
    "platform": "Shopee",
    "category": "Áo nam"
}

with open("data/products.json", "w", encoding="utf-8") as f:
    json.dump([product], f, ensure_ascii=False, indent=2)

print("Đã tạo products.json")
