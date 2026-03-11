const products=[
{id:1,name:"Áo thun nam cotton basic",price:129000,shop:"Men Fashion",image:"https://picsum.photos/400?1",link:"https://shopee.vn"},
{id:2,name:"Áo thun nam form rộng Hàn Quốc",price:149000,shop:"Kstyle Shop",image:"https://picsum.photos/400?2",link:"https://shopee.vn"},
{id:3,name:"Áo thun nam streetwear",price:119000,shop:"Streetwear VN",image:"https://picsum.photos/400?3",link:"https://shopee.vn"},
{id:4,name:"Áo thun nam basic đẹp",price:99000,shop:"Fashion Store",image:"https://picsum.photos/400?4",link:"https://shopee.vn"},
{id:5,name:"Áo thun nam cotton mềm",price:105000,shop:"Cotton Shop",image:"https://picsum.photos/400?5",link:"https://shopee.vn"}
]

const container=document.getElementById("products")
const search=document.getElementById("searchInput")

function render(list){

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`
<div class="product">
<img src="${p.image}">
<div class="product-info">

<div class="product-name">${p.name}</div>

<div class="price">${p.price.toLocaleString()}đ</div>

<div class="shop">Shop: ${p.shop}</div>

<a class="btn" href="${p.link}" target="_blank">Xem trên Shopee</a>

</div>
</div>
`

})

}

render(products)

search.addEventListener("input",e=>{

const key=e.target.value.toLowerCase()

const result=products.filter(p=>
p.name.toLowerCase().includes(key)
)

render(result)

})
