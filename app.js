const langBtn = document.getElementById("lang")
const lang2 = document.getElementById("lang2")
const chevron = document.getElementById("chevron")
const productContainer = document.getElementById("products-container")
const offerContainer = document.getElementById("offer-item")
const seasonContainer = document.getElementById("season-offer-container")
const videContainer = document.getElementById("video-container")
const profileOpen = document.getElementById("profile-open")
const profileClose = document.getElementById("profile-close")
const profile = document.getElementById("mobile-profile")
const brandsContainer = document.getElementById("brands-container")
const catalogContainer = document.getElementById("catalog-container")


langBtn.addEventListener('click', function () {
  lang2.classList.toggle('show')
  const attr = chevron.getAttribute("class") === "fa-solid fa-chevron-down" ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
  chevron.setAttribute("class", attr)
})


const products = [
  {
    id: 1,
    satisLiderleri: [
      {
        id: 1,
        name: "OPPO A57S 4/64 GB Sky Blue",
        nagdAlis: true,
        endirim: 20,
        image: './assets/images/product1.png',
        price: "419,99",
        discountPrice: "399,99",
        screen: "6.56",
        ram: 4,
        rom: 64,
      },
      {
        id: 2,
        name: "Samsung Galaxy A24 (SM-A245) 6/128 GB Black",
        image: './assets/images/product2.png',
        nagdAlis: false,
        endirim: 0,
        price: "1019,99",
        discountPrice: null,
        screen: "6.56",
        ram: 8,
        rom: 128,
      },
      {
        id: 3,
        name: "HUAWEI P60 Pro 8/256 GB Rococo Pearl",
        image: './assets/images/product3.png',
        nagdAlis: true,
        endirim: 10,
        price: "819,99",
        discountPrice: "799,99",
        screen: "6.56",
        ram: 6,
        rom: 64,
      },
      {
        id: 4,
        name: "Xiaomi Redmi 12 8/256 GB Sky Blue",
        image: './assets/images/product4.png',
        nagdAlis: false,
        price: "519,99",
        discountPrice: null,
        screen: "6.56",
        ram: 4,
        rom: 64,
      },
      {
        id: 5,
        name: "Samsung Galaxy S20+ Dual (SM-G985F) Red",
        image: './assets/images/product5.png',
        nagdAlis: true,
        endirim: 30,
        price: "419,99",
        discountPrice: "399,99",
        screen: "6.56",
        ram: 4,
        rom: 64,
      }
    ]
  },
  {
    id: 2,
    offers: [
      {
        id: 1,
        name: "Simge Gutson 3 yerli divan",
        image: "./assets/images/offer-item.png",
        price: "419,99",
        discountPrice: "399,99",
        credit: "12"
      },
      {
        id: 2,
        name: "İmfa Monreal çarpayı",
        image: "./assets/images/offer1.png",
        price: "399,99",
        discountPrice: "259,99",
        credit: "24"
      },
      {
        id: 3,
        name: "Paltaryuyan LG F2J3NS0W ",
        image: "./assets/images/offer2.png",
        price: "999,99",
        discountPrice: "799,99",
        credit: "18"
      }
    ]
  },
  {
    id: 3,
    season: [
      {
        id: 1,
        delivery: true,
        image: "./assets/images/season1.png",
        name: "Konvektor DeLonghi HCX9120E",
        price: "359,99",
        discountPrice: "259,99",
        endirim: 60
      },
      {
        id: 2,
        delivery: false,
        image: "./assets/images/season2.png",
        name: "Konvektor DeLonghi HCX9120E",
        price: "59,99",
        discountPrice: "39,99",
        endirim: 10
      },
      {
        id: 3,
        delivery: true,
        image: "./assets/images/season3.png",
        name: "Radiator HOFFMANN OH9111 Black",
        price: "149,99",
        discountPrice: "129,99",
        endirim: 20
      },
      {
        id: 4,
        delivery: false,
        image: "./assets/images/season4.jpeg",
        name: "WMF termos torpak 3201112019",
        price: "79,99",
        discountPrice: "59,99",
        endirim: 15
      },
      {
        id: 5,
        delivery: true,
        image: "./assets/images/season5.png",
        name: "Elektri̇kli̇ şərab açan Huo Hou HU0122",
        price: "59,99",
        discountPrice: "39,99",
        endirim: 20
      },
    ]
  },
  {
    id: 4,
    video: [
      {
        id: 1,
        videoImage: "./assets/images/video-cover.png",
        videoTitle: "Təmir işlərinin başını burax. Soyuducu axtarırsansa, Kontakt var. "
      },
      {
        id: 2,
        videoImage: "./assets/images/video1.png",
        videoTitle: "OPPO Kontakt-da"
      },
      {
        id: 3,
        videoImage: "./assets/images/video2.png",
        videoTitle: "Find N3"
      },
      {
        id: 4,
        videoImage: "./assets/images/video3.png",
        videoTitle: "Bosch qabyuyanları "
      },
      {
        id: 5,
        videoImage: "./assets/images/video4.png",
        videoTitle: "Qafqazın ən böyük mağazası!"
      },
    ]
  }

]

products[0].satisLiderleri.forEach(function (product) {
  productContainer.innerHTML += `
    <div class="product-item">
    <span class="head-span">çatdırılma 0₼</span>
    <div class="link-image">
      <a href="#">
        <img src="${product.image}" />
      </a>
      ${nagd(product.nagdAlis, product.endirim)}
    </div>
    <p>${product.name}</p>
    <div class="price">
      ${discount(product.price, product.discountPrice)}
      <span>0% 12ay</span>
    </div>
    <div class="mob-buttons">
      <button>
        <i class="fa-regular fa-heart"></i>
      </button>
      <button>
          Sebete at
      </button>
    </div>
    <div class="product-item-bottom-menu">
      <div class="product-basket-button">
        <button>
          <i class="fa-solid fa-cart-shopping"></i>Movcud deyil
        </button>
      </div>
      <div class="product-links">
        <a href="#"><i class="fa-solid fa-scale-balanced"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <button><i class="fa-solid fa-link"></i></button>
      </div>
      <div class="info">
        <span>Ekran:</span>
        <span>${product.screen}"</span>
      </div>
      <div class="info">
        <span>Operativ yaddas:</span>
        <span>${product.ram}GB</span>
      </div>
      <div class="info">
        <span>Daxili yaddas:</span>
        <span>${product.rom}GB</span>
      </div>
    </div>
  </div>
 `
})

function discount(price, discountPrice) {
  if (discountPrice === null) {
    return ` <strong class = "normal-price">
                    <i>${price} ₼</i>
                </strong>`
  } else {
    return ` <strong>
           <i>${price} ₼</i>
           <b>${discountPrice} ₼</b>
      </strong>`
  }
}


function nagd(nagdAlis, endirim) {
  if (nagdAlis) {
    return `<span>nağd alışa ${-endirim}₼</span>`
  }
  return ''
}

products[1].offers.forEach(function (product) {
  offerContainer.innerHTML += `
                          <div class="offer-item">
                          <div class="item-image">
                            <img src="${product.image}" />
                          </div>
                          <div class="item-info">
                            <span class="item-span">çatdırılma 0₼</span>
                            <p>Simge Gutson 3 yerli divan</p>
                            <div class="price">
                              <strong>
                                <i>${product.price} ₼</i>
                                <b>${product.discountPrice} ₼</b>
                              </strong>
                              <span>0% ${product.credit}ay</span>
                            </div>
                            <div class="product-basket-button">
                              <button>
                                <i class="fa-solid fa-cart-shopping"></i>Səbətə əlavə et
                              </button>
                            </div>
                          </div>
                        </div>
  
  `

})


products[2].season.forEach(function (product) {
  seasonContainer.innerHTML += `
  
                          <div class="season-item">
                          ${delivery(product.delivery)}
                          <div class="link-image">
                            <a href="#">
                              <img src="${product.image}" />
                            </a>
                            <span>nağd alışa -${product.endirim}₼</span>
                          </div>
                          <p>${product.name}</p>
                          <div class="price">
                            <strong>
                              <i>${product.price} ₼</i>
                              <b>${product.discountPrice} ₼</b>
                            </strong>
                            <span>0% 12ay</span>
                          </div>
                          <div class="mob-buttons">
                            <button>
                              <i class="fa-regular fa-heart"></i>
                            </button>
                            <button>
                              Sebete at
                            </button>
                          </div>
                          <div class="season-item-bottom-menu">
                            <div class="product-basket-button">
                              <button>
                                <i class="fa-solid fa-cart-shopping"></i>Mövcud deyil
                              </button>
                            </div>
                            <div class="product-links">
                              <a href="#"><i class="fa-solid fa-scale-balanced"></i></a>
                              <a href="#"><i class="fa-regular fa-heart"></i></a>
                              <button><i class="fa-solid fa-link"></i></button>
                            </div>
                          </div>
                        </div>
                          
  
  `
})

function delivery(delivery) {
  if (delivery) {
    return `<span class="head-span">çatdırılma 0₼</span>`
  }
  else {
    return "<p style = 'color:transparent'>''</p>"
  }

}


products[3].video.forEach(function (video) {
  videContainer.innerHTML += `
                            <div class="video-view">
                            <div class="video">
                              <img src="${video.videoImage}" alt="" />
                              <button class="play-button">
                                <i class="fa-solid fa-play"></i>
                              </button>
                            </div>
                            <p>
                              ${video.videoTitle}
                            </p>
                          </div>
  
  `

})

profileOpen.addEventListener('click', function () {
  profile.classList.add('open')
})

profileClose.addEventListener('click', function () {
  profile.classList.remove('open')
})

const brands = [
  {
    id: 1,
    image: "./assets/images/brand1.png"
  },
  {
    id: 2,
    image: "./assets/images/brand2.png"
  },
  {
    id: 3,
    image: "./assets/images/brand3.png"
  },
  {
    id: 4,
    image: "./assets/images/brand4.png"
  },
  {
    id: 5,
    image: "./assets/images/brand5.png"
  },
  {
    id: 6,
    image: "./assets/images/brand6.png"
  },
  {
    id: 7,
    image: "./assets/images/brand7.png"
  },
  {
    id: 8,
    image: "./assets/images/brand8.png"
  },
]

brands.forEach(function (brand) {
  brandsContainer.innerHTML += `
  <a href="#"><img src="${brand.image}" /></a>
  `
})

const catalogs = [
  {
    id: 1,
    name: "Smartfonlar və aksesuarlar",
    icon: "fas fa-mobile-alt",
    child: [
      {
        id: 1,
        title: "Smartfonlar",
        subCategory: [
          {
            id: 1,
            name: "Apple"
          },
          {
            id: 2,
            name: "Samsung"
          },
          {
            id: 3,
            name: "Oppo"
          },
          {
            id: 4,
            name: "Xiaomi"
          },
          {
            id: 5,
            name: "Poco"
          },
          {
            id: 6,
            name: "Nothing"
          },
          {
            id: 7,
            name: "Asus"
          },
          {
            id: 8,
            name: "Google"
          },
          {
            id: 8,
            name: "Acer"
          },
          {
            id: 8,
            name: "Redmi"
          },
        ]
      },
      {
        id: 2,
        title: "Qulaqliqlar",
        subCategory: [
          {
            id: 1,
            name: "Bluetooth simsiz qulaqliqlar"
          },
          {
            id: 2,
            name: "Simsli qulaqliqlar"
          },
        ]
      },
      {
        id: 3,
        title: "Planşetlər",
        subCategory: [
          {
            id: 1,
            name: "Apple"
          },
          {
            id: 2,
            name: "Samsung"
          },
          {
            id: 3,
            name: "Oppo"
          },
          {
            id: 4,
            name: "Xiaomi"
          },
        ]
      },
      {
        id: 4,
        title: "Ev və ofis telefonlari",
        subCategory: []
      },
      {
        id: 1,
        title: "Qulaqliq Aksesuarlari",
        subCategory: [
          {
            id: 1,
            name: "Apple"
          },
          {
            id: 2,
            name: "Samsung"
          },
          {
            id: 3,
            name: "Oppo"
          },
        ]
      },
      {
        id: 1,
        title: "Telefon aksesuarlari",
        subCategory: [
          {
            id: 1,
            name: "Apple"
          },
          {
            id: 2,
            name: "Samsung"
          },
          {
            id: 3,
            name: "Oppo"
          },
          {
            id: 4,
            name: "Xiaomi"
          },
          {
            id: 5,
            name: "Poco"
          },
          {
            id: 6,
            name: "Nothing"
          },
          {
            id: 7,
            name: "Asus"
          },
          {
            id: 8,
            name: "Infinix"
          },
        ]
      },
      {
        id: 1,
        title: "Duymeli telefonlar",
        subCategory: [
          {
            id: 1,
            name: "Nokia"
          },
          {
            id: 2,
            name: "Poco"
          },
  
        ]
      },
    ]
  }
]

catalogs.forEach(function (catalog) {
  catalogContainer.innerHTML += `
  <li>
  <a href="#">
    <i class="${catalog.icon}"></i>
    <p>${catalog.name}</p>
    <i class="fa-solid fa-chevron-right"></i>
  </a>
  <div class="sidebar-menu">
    <div class="sidebar-catalogs">
      ${altKateqoriyalariGoster(catalog.child)}
    </div>
    <div class="sidebar-images">
      <img src="sidebarimage1.png" alt="">
      <img src="sidebarimage2.png" alt="">
    </div>
  </div>
</li>
  
  `
})


// function child(arr) {
//   const a = arr.map(function (child) {
//     const b = ` <div class="sidebar-item">
//                       <a href="#">${child.title}</a>
//                            <ul>
//                              ${child.subCategory}
//                             </ul>
//                   </div>`
//     console.log(child.subCategory);

//     console.log(b);
//     return b
//   })
// }

// function subCategory(arr) {
//   const a = arr.map(function (sub) {
//     const b = `<li><a href="#">${sub.name}</a></li>`
//     return b
//   })
// }

function altKateqoriyalariGoster(tekCategory) {
  const parentChild = tekCategory.map(function (pc) {
    const a = `<div class="sidebar-item">
                <a href="#">${pc.title}</a>
                <ul>
                ${dsf(pc.subCategory)}
                </ul>
              </div>
            `
    return a
  })
  return parentChild.join('')
}



function dsf(subChild) {
  const subChilds = subChild.map(function (sc) {
    const a = ` <li><a href="#">${sc.name}</a></li>`
    return a;
  })
  return subChilds.join('');
}