 const products = [
  {
    id: 1,
    slug: "ao-thun-nam-basic-cotton",
    name: "Áo thun nam basic cotton",
    category: "Áo thun",
    price: 129000,
    oldPrice: 169000,
    rating: 4.7,
    sold: "2.1k",
    discount: 24,
    shop: "Shopee Mall",
    badge: "Bán chạy",
    merchantUrl: "https://s.shopee.vn/9zswiBvchR",
    affiliateUrl: "https://s.shopee.vn/9zswiBvchR",
    link: "https://s.shopee.vn/9zswiBvchR",
    image: "assets/products/ao-thun-1.jpg",
    description: "Áo thun basic dễ mặc hằng ngày, phù hợp phối đồ đơn giản."
  },
  {
    id: 2,
    slug: "ao-thun-nam-form-rong-toi-gian",
    name: "Áo thun nam form rộng tối giản",
    category: "Áo thun",
    price: 159000,
    oldPrice: 199000,
    rating: 4.8,
    sold: "1.8k",
    discount: 20,
    shop: "Shopee",
    badge: "Phổ biến",
    merchantUrl: "https://shopee.vn/",
    affiliateUrl: "https://shopee.vn/",
    link: "https://shopee.vn/",
    image: "assets/products/ao-thun-2.jpg",
    description: "Form rộng dễ mặc, hợp phong cách trẻ và streetwear cơ bản."
  },
  {
    id: 3,
    slug: "ao-polo-nam-phoi-co-thanh-lich",
    name: "Áo polo nam phối cổ thanh lịch",
    category: "Áo polo",
    price: 219000,
    oldPrice: 289000,
    rating: 4.9,
    sold: "986",
    discount: 24,
    shop: "Lazada",
    badge: "Thanh lịch",
    merchantUrl: "https://www.lazada.vn/",
    affiliateUrl: "https://www.lazada.vn/",
    link: "https://www.lazada.vn/",
    image: "assets/products/ao-thun-3.jpg",
    description: "Mẫu polo dễ mặc, hợp đi làm, đi chơi và phối đồ gọn gàng."
  },
  {
    id: 4,
    slug: "ao-so-mi-nam-trang-cong-so",
    name: "Áo sơ mi nam trắng công sở",
    category: "Áo sơ mi",
    price: 249000,
    oldPrice: 329000,
    rating: 4.8,
    sold: "770",
    discount: 24,
    shop: "Tiki",
    badge: "Công sở",
    merchantUrl: "https://tiki.vn/",
    affiliateUrl: "https://tiki.vn/",
    link: "https://tiki.vn/",
    image: "assets/products/ao-thun-4.jpg",
    description: "Sơ mi trắng cơ bản, dễ phối quần tây hoặc jean tối màu."
  },
  {
    id: 5,
    slug: "ao-thun-nam-cotton-form-rong",
    name: "Áo thun nam cotton form rộng",
    category: "Áo thun",
    price: 139000,
    oldPrice: 189000,
    rating: 4.9,
    sold: "3k",
    discount: 26,
    shop: "Shopee Mall",
    badge: "Đáng mua",
    merchantUrl: "https://s.shopee.vn/1BHZtCJzJX",
    affiliateUrl: "https://s.shopee.vn/1BHZtCJzJX",
    link: "https://s.shopee.vn/1BHZtCJzJX",
    image: "assets/products/ao-thun-5.jpg",
    description: "Cotton thoáng, dễ mặc hằng ngày, phù hợp người thích form rộng."
  },
  {
    id: 6,
    slug: "ao-thun-nam-basic-form-fit",
    name: "Áo thun nam basic form fit",
    category: "Áo thun",
    price: 119000,
    oldPrice: 159000,
    rating: 4.7,
    sold: "1.5k",
    discount: 25,
    shop: "Shopee",
    badge: "Bán chạy",
    merchantUrl: "https://shopee.vn/",
    affiliateUrl: "https://shopee.vn/",
    link: "https://shopee.vn/",
    image: "assets/products/ao-thun-6.jpg",
    description: "Form gọn, hợp mặc thường ngày và dễ phối với quần short, jean."
  },
  {
    id: 7,
    slug: "ao-thun-nha-ken-premium-do",
    name: "Áo thun nam cotton đỏ premium Nhà Ken",
    category: "Áo thun",
    price: 189000,
    oldPrice: 249000,
    rating: 4.8,
    sold: "2k",
    discount: 24,
    shop: "Shopee",
    badge: "Nổi bật",
    merchantUrl: "https://s.shopee.vn/2g6Njrr7UH",
    affiliateUrl: "https://s.shopee.vn/2g6Njrr7UH",
    link: "https://s.shopee.vn/2g6Njrr7UH",
    image: "assets/products/ao-thun-7.jpg",
    description: "Màu đỏ nổi bật, chất cotton dễ mặc, phù hợp outfit trẻ trung."
  },
  {
    id: 8,
    slug: "mozees-ao-thun-co-tron-form-regular",
    name: "Mozees áo thun cổ tròn nam form regular",
    category: "Áo thun",
    price: 259000,
    oldPrice: 329000,
    rating: 4.9,
    sold: "980",
    discount: 21,
    shop: "Shopee",
    badge: "Mozees",
    merchantUrl: "https://s.shopee.vn/8ph15TI6Mz",
    affiliateUrl: "https://s.shopee.vn/8ph15TI6Mz",
    link: "https://s.shopee.vn/8ph15TI6Mz",
    image: "assets/products/ao-thun-8.jpg",
    description: "Form regular, chất dày dặn hơn, hợp người thích áo đứng dáng."
  },
  {
    id: 9,
    slug: "ao-thun-nam-bigsize-unisex-mua-he",
    name: "Áo thun nam bigsize unisex mùa hè",
    category: "Áo thun",
    price: 169000,
    oldPrice: 219000,
    rating: 4.6,
    sold: "1.2k",
    discount: 23,
    shop: "BEEYANBUY",
    badge: "Hot trend",
    merchantUrl: "https://s.shopee.vn/1Lb0BasSwG",
    affiliateUrl: "https://s.shopee.vn/1Lb0BasSwG",
    link: "https://s.shopee.vn/1Lb0BasSwG",
    image: "assets/products/ao-thun-9.jpg",
    description: "Bigsize unisex dễ mặc mùa hè, hợp phong cách rộng rãi thoải mái."
  },
  {
    id: 10,
    slug: "ao-polo-pique-basic-cotton-coolmate",
    name: "Áo polo pique basic cotton Ready To Wear",
    category: "Áo polo",
    price: 199000,
    oldPrice: 259000,
    rating: 4.8,
    sold: "1k",
    discount: 23,
    shop: "Shopee Mall",
    badge: "Đáng mua",
    merchantUrl: "https://s.shopee.vn/6AgFwsqIQv",
    affiliateUrl: "https://s.shopee.vn/6AgFwsqIQv",
    link: "https://s.shopee.vn/6AgFwsqIQv",
    image: "assets/products/ao-thun-10.jpg",
    description: "Polo basic cao cấp, hợp môi trường công sở và đi chơi lịch sự."
  },
  {
id:11,
name:"Áo thun nam cotton basic form rộng",
price:179000,
image:"https://cf.shopee.vn/file/0a1a2b3c4d",
rating:4.8,
sold:2100,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/11"
},

{
id:12,
name:"Áo thun nam cổ tròn cotton mềm",
price:159000,
image:"https://cf.shopee.vn/file/1b2c3d4e5f",
rating:4.7,
sold:1500,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/12"
},

{
id:13,
name:"Áo thun nam basic phong cách Hàn",
price:189000,
image:"https://cf.shopee.vn/file/2c3d4e5f6g",
rating:4.8,
sold:1800,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/13"
},

{
id:14,
name:"Áo thun nam oversize streetwear",
price:199000,
image:"https://cf.shopee.vn/file/3d4e5f6g7h",
rating:4.7,
sold:1300,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/14"
},

{
id:15,
name:"Áo thun nam cotton form rộng Hàn Quốc",
price:169000,
image:"https://cf.shopee.vn/file/4e5f6g7h8i",
rating:4.8,
sold:2200,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/15"
},

{
id:16,
name:"Áo thun nam basic logo nhỏ",
price:149000,
image:"https://cf.shopee.vn/file/5f6g7h8i9j",
rating:4.7,
sold:1100,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/16"
},

{
id:17,
name:"Áo thun nam cotton cao cấp mềm mịn",
price:229000,
image:"https://cf.shopee.vn/file/6g7h8i9j0k",
rating:4.8,
sold:900,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/17"
},

{
id:18,
name:"Áo thun nam slim fit basic",
price:189000,
image:"https://cf.shopee.vn/file/7h8i9j0k1l",
rating:4.7,
sold:1250,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/18"
},

{
id:19,
name:"Áo thun nam cotton trắng basic",
price:139000,
image:"https://cf.shopee.vn/file/8i9j0k1l2m",
rating:4.8,
sold:2700,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/19"
},

{
id:20,
name:"Áo thun nam form rộng cổ tròn",
price:179000,
image:"https://cf.shopee.vn/file/9j0k1l2m3n",
rating:4.8,
sold:1600,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/20"
},

{
id:21,
name:"Áo thun nam basic cotton dày",
price:199000,
image:"https://cf.shopee.vn/file/1a2b3c4d5e",
rating:4.7,
sold:1400,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/21"
},

{
id:22,
name:"Áo thun nam streetwear in chữ",
price:189000,
image:"https://cf.shopee.vn/file/2b3c4d5e6f",
rating:4.8,
sold:1200,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/22"
},

{
id:23,
name:"Áo thun nam cotton basic đen",
price:159000,
image:"https://cf.shopee.vn/file/3c4d5e6f7g",
rating:4.8,
sold:2300,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/23"
},

{
id:24,
name:"Áo thun nam Hàn Quốc oversize",
price:209000,
image:"https://cf.shopee.vn/file/4d5e6f7g8h",
rating:4.7,
sold:1000,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/24"
},

{
id:25,
name:"Áo thun nam cotton basic xám",
price:169000,
image:"https://cf.shopee.vn/file/5e6f7g8h9i",
rating:4.8,
sold:1700,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/25"
},

{
id:26,
name:"Áo thun nam logo nhỏ phong cách minimal",
price:179000,
image:"https://cf.shopee.vn/file/6f7g8h9i0j",
rating:4.7,
sold:950,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/26"
},

{
id:27,
name:"Áo thun nam basic cotton co giãn",
price:159000,
image:"https://cf.shopee.vn/file/7g8h9i0j1k",
rating:4.8,
sold:2100,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/27"
},

{
id:28,
name:"Áo thun nam oversize unisex",
price:199000,
image:"https://cf.shopee.vn/file/8h9i0j1k2l",
rating:4.7,
sold:1350,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/28"
},

{
id:29,
name:"Áo thun nam cotton mềm cao cấp",
price:229000,
image:"https://cf.shopee.vn/file/9i0j1k2l3m",
rating:4.8,
sold:880,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/29"
},

{
id:30,
name:"Áo thun nam basic phối màu",
price:189000,
image:"https://cf.shopee.vn/file/0j1k2l3m4n",
rating:4.7,
sold:1120,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/30"
},
 {
id:31,
name:"Áo thun nam cotton basic trắng form rộng",
price:169000,
image:"https://cf.shopee.vn/file/a1b2c3d4e5",
rating:4.8,
sold:1900,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/31"
},

{
id:32,
name:"Áo thun nam cổ tròn phong cách Hàn",
price:179000,
image:"https://cf.shopee.vn/file/b2c3d4e5f6",
rating:4.7,
sold:1500,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/32"
},

{
id:33,
name:"Áo thun nam basic cotton đen form rộng",
price:159000,
image:"https://cf.shopee.vn/file/c3d4e5f6g7",
rating:4.8,
sold:2200,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/33"
},

{
id:34,
name:"Áo thun nam oversize street style",
price:199000,
image:"https://cf.shopee.vn/file/d4e5f6g7h8",
rating:4.7,
sold:1300,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/34"
},

{
id:35,
name:"Áo thun nam cotton mềm basic",
price:169000,
image:"https://cf.shopee.vn/file/e5f6g7h8i9",
rating:4.8,
sold:1700,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/35"
},

{
id:36,
name:"Áo thun nam form rộng minimal",
price:189000,
image:"https://cf.shopee.vn/file/f6g7h8i9j0",
rating:4.7,
sold:1400,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/36"
},

{
id:37,
name:"Áo thun nam cotton basic xám",
price:159000,
image:"https://cf.shopee.vn/file/g7h8i9j0k1",
rating:4.8,
sold:2000,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/37"
},

{
id:38,
name:"Áo thun nam streetwear in chữ",
price:199000,
image:"https://cf.shopee.vn/file/h8i9j0k1l2",
rating:4.7,
sold:1250,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/38"
},

{
id:39,
name:"Áo thun nam cotton basic cao cấp",
price:229000,
image:"https://cf.shopee.vn/file/i9j0k1l2m3",
rating:4.8,
sold:980,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/39"
},

{
id:40,
name:"Áo thun nam cổ tròn form rộng basic",
price:179000,
image:"https://cf.shopee.vn/file/j0k1l2m3n4",
rating:4.7,
sold:1600,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/40"
},

{
id:41,
name:"Áo thun nam cotton mềm phong cách Hàn",
price:189000,
image:"https://cf.shopee.vn/file/k1l2m3n4o5",
rating:4.8,
sold:1500,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/41"
},

{
id:42,
name:"Áo thun nam basic cotton form rộng",
price:169000,
image:"https://cf.shopee.vn/file/l2m3n4o5p6",
rating:4.8,
sold:2100,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/42"
},

{
id:43,
name:"Áo thun nam streetwear basic",
price:199000,
image:"https://cf.shopee.vn/file/m3n4o5p6q7",
rating:4.7,
sold:1350,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/43"
},

{
id:44,
name:"Áo thun nam cotton basic màu be",
price:179000,
image:"https://cf.shopee.vn/file/n4o5p6q7r8",
rating:4.8,
sold:1800,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/44"
},

{
id:45,
name:"Áo thun nam cotton basic màu navy",
price:179000,
image:"https://cf.shopee.vn/file/o5p6q7r8s9",
rating:4.8,
sold:1750,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/45"
},

{
id:46,
name:"Áo thun nam oversize basic trắng",
price:189000,
image:"https://cf.shopee.vn/file/p6q7r8s9t0",
rating:4.7,
sold:1600,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/46"
},

{
id:47,
name:"Áo thun nam cotton basic màu xanh",
price:169000,
image:"https://cf.shopee.vn/file/q7r8s9t0u1",
rating:4.8,
sold:1500,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/47"
},

{
id:48,
name:"Áo thun nam basic minimal style",
price:179000,
image:"https://cf.shopee.vn/file/r8s9t0u1v2",
rating:4.7,
sold:1400,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/48"
},

{
id:49,
name:"Áo thun nam cotton premium basic",
price:239000,
image:"https://cf.shopee.vn/file/s9t0u1v2w3",
rating:4.8,
sold:900,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/49"
},

{
id:50,
name:"Áo thun nam form rộng cotton basic",
price:179000,
image:"https://cf.shopee.vn/file/t0u1v2w3x4",
rating:4.8,
sold:2000,
merchantUrl:"https://shopee.vn",
affiliateUrl:"https://shopee.vn/product/50"
} 
];
