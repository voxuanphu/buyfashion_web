from connectors.shopee_connector import fetch_products
from agent.review_writer import write_review

def run():

    products = fetch_products()

    for p in products:

        p["review"] = write_review(p)

        print(p)

if __name__ == "__main__":
    run()
