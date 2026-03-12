def score_product(product):

    rating = product["rating"] / 5

    if product["price"] < 200000:
        price_score = 1
    else:
        price_score = 0.7

    return rating*0.6 + price_score*0.4
