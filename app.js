const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let dataShoes = {
    manShoes: [
        {
            id: 1,
            name: "Giày nike court vision low next nature 'sail dark beetroot' fb8942-133",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-1.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 2,
            name: "Giày nike air force 1 low white grey dv0788-100",
            salePrice: 3950000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-2.png",
            subImg1: "./assets/img/man-shoes/shoes-2-1.png",
            subImg2: "./assets/img/man-shoes/shoes-2-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 3,
            name: "Giày nike air jordan 1 low se 'sail rattan' fb7168-121",
            salePrice: 4950000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-3.png",
            subImg1: "./assets/img/man-shoes/shoes-3-1.png",
            subImg2: "./assets/img/man-shoes/shoes-3-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 4,
            name: "Giày jordan 1 low concord - dv1333-100",
            salePrice: 4500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-4.png",
            subImg1: "./assets/img/man-shoes/shoes-4-1.png",
            subImg2: "./assets/img/man-shoes/shoes-4-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 5,
            name: "Giày chính hãng 'xvessel 2.0 marshmallow lows black' ",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-5.png",
            subImg1: "./assets/img/man-shoes/shoes-5-1.png",
            subImg2: "./assets/img/man-shoes/shoes-5-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 6,
            name: "Giày chính hãng air force 1 low anniversary 'sail malachite' - dq7582-101",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-6.png",
            subImg1: "./assets/img/man-shoes/shoes-6-1.png",
            subImg2: "./assets/img/man-shoes/shoes-6-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 7,
            name: "Giày chính hãng cats and sofa green",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-7.png",
            subImg1: "./assets/img/man-shoes/shoes-7-1.png",
            subImg2: "./assets/img/man-shoes/shoes-7-2.png",
            size: "39 40 41 42",
            tag: 1,
        },

        {
            id: 8,
            name: "Giày chính hãng cats and sofa pink",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/man-shoes/shoes-8.png",
            subImg1: "./assets/img/man-shoes/shoes-8-1.png",
            subImg2: "./assets/img/man-shoes/shoes-8-2.png",
            size: "39 40 41 42",
            tag: 1,
        },
    ],
    womenShoes: [
        {
            id: 1,
            name: "Giày chính hãng air force 1 shadow ghost swoosh - dv1364 111",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/women-shoes/women-shoe-01-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-01-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 2,
            name: "Giày chính hãng air force 1 shadow 'multicolor' - ci0919-118",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-02.png",
            subImg1: "./assets/img/women-shoes/women-shoe-02-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-02-1.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 3,
            name: `Giày chính hãng "xvessel 2.0 marshmallow lows black"`,
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-03.png",
            subImg1: "./assets/img/women-shoes/women-shoe-03-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-03-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 4,
            name: "Giày nike air force 1 low '07 se just do it hangtag red swoosh dv7584-001",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-04.png",
            subImg1: "./assets/img/women-shoes/women-shoe-04-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-04-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 5,
            name: "Giày chính hãng air force 1 low anniversary 'white black' - dq7658-100",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-05.png",
            subImg1: "./assets/img/women-shoes/women-shoe-05-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 6,
            name: "Giày nike air force 1 plt.af.orm 'white sea coral' dj9946-105",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-06.png",
            subImg1: "./assets/img/women-shoes/women-shoe-06-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-06-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 7,
            name: "Giày chính hãng Giày MLB Playball Origin New York Yankees Black",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-07.png",
            subImg1: "./assets/img/women-shoes/women-shoe-07-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-07-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 8,
            name: "Giày Nike Air Jordan 1 Low SE Reverse Ice Blue - DV1299-104",
            salePrice: 2500000,
            oldPrice: 5000000,
            img: "./assets/img/women-shoes/women-shoe-08.png",
            subImg1: "./assets/img/women-shoes/women-shoe-08-1.png",
            subImg2: "./assets/img/women-shoes/women-shoe-08-2.png",
            size: "39 40 41 42",
            tag: 2,
        },
    ],
    accessories: [
        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },

        {
            id: 1,
            name: "Áo chính hãng áo NIKE CREAM EMBROIDERED T-SHIRT dv8614113",
            salePrice: 950000,
            oldPrice: 1350000,
            img: "./assets/img/women-shoes/women-shoe-01.png",
            subImg1: "./assets/img/man-shoes/shoes-1-1.png",
            subImg2: "./assets/img/man-shoes/shoes-1-2.png",
            size: "39 40 41 42",
            tag: 2,
        },
    ],
};

let listCartData = [];

// Get element
const modal = $(".modal");
const listManShoes = $(".list-man-shoe");
const listWomenShoes = $(".list-women-shoe");
const modalInner = $(".modal__inner");
const cartContent = $(".cart-content");
const cartQty = $(".cart-qty");
const listCart = $(".cart-list");
const resultPrice = $(".cart-total__price");
const statusAddCart = $(".status");
const listStatus = $(".list-status");

// App start
function app() {
    renderShoes();
}

app();

// function render
function renderShoes() {
    renderListManShoes();
    renderListWomenShoes();
}

function renderListManShoes() {
    const htmls = dataShoes.manShoes.map((shoe, index) => {
        return renderManShoe(shoe, index);
    });
    listManShoes.innerHTML = htmls.join("");
}

function renderListWomenShoes() {
    const htmls = dataShoes.womenShoes.map((shoe, index) => {
        return renderWomenShoe(shoe, index);
    });
    listWomenShoes.innerHTML = htmls.join("");
}

// Function render shoe
function renderManShoe(shoe, index) {
    return `
        <article class="box-item">
            <figure class="box__item-img">
                <a href="#!">
                    <img srcset="${shoe.img}" alt="" class="box-item__thumb">
                </a>

                <div class="box__item-overlay">
                    <a href="#!">
                        <img srcset="${
                            shoe.subImg1
                        } 2x" alt="" class="box-item__thumb">
                    </a>
                    <div class="item-overlay__action">
                        <a href="#!" class="btn btn-product">
                            <i class="fa-solid fa-gear btn-product__icon"></i>
                            Tùy chọn
                        </a>

                        <button class="btn btn-quick-view" onclick="handleQuickViewClick(${
                            shoe.tag
                        }, ${index}, ${index})">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            Xem nhanh
                        </button>
                    </div>
                </div>
            </figure>

            <div class="box-item__info">
                <h3>
                    <a href="./product.html" class="item-info__name">${
                        shoe.name
                    }</a>
                </h3>
                <p class="item-info__size">Size: ${shoe.size}</p>
                <div class="item-info__price">
                    <p class="info-price__sale">
                       ${convert(shoe.salePrice)}
                    </p>

                    <p class="info-price__old">
                       ${convert(shoe.oldPrice)}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function renderWomenShoe(shoe, index) {
    return `
        <article class="box-item">
            <figure class="box__item-img">
                <a href="#!">
                    <img srcset="${shoe.img}" alt="" class="box-item__thumb">
                </a>

                <div class="box__item-overlay">
                    <a href="#!">
                        <img srcset="${
                            shoe.subImg1
                        } 2x" alt="" class="box-item__thumb">
                    </a>
                    <div class="item-overlay__action">
                        <a href="#!" class="btn btn-product">
                            <i class="fa-solid fa-gear btn-product__icon"></i>
                            Tùy chọn
                        </a>

                        <button class="btn btn-quick-view" onclick="handleQuickViewClick(${
                            shoe.tag
                        }, ${index}, ${index + dataShoes.manShoes.length})">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            Xem nhanh
                        </button>
                    </div>
                </div>
            </figure>

            <div class="box-item__info">
                <h3>
                    <a href="./product.html" class="item-info__name">${
                        shoe.name
                    }</a>
                </h3>
                <p class="item-info__size">Size: ${shoe.size}</p>
                <div class="item-info__price">
                    <p class="info-price__sale">
                       ${convert(shoe.salePrice)}
                    </p>

                    <p class="info-price__old">
                       ${convert(shoe.oldPrice)}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function handleQuickViewClick(tag, indexData, indexList) {
    openModal();
    console.log(tag);
    modalInner.innerHTML = `
        <i class="fa-solid fa-circle-xmark modal__close" onclick="closeModal()"></i>
        <div class="modal__media-wrap col l-5">
                        <figure class="modal__img-wrap">
                            <img
                            srcset="${checkTag(tag, indexData)}"
                            alt=""
                            class="modal__img"
                            />
                        </figure>
                        <div class="modal__sub-img-wrap">
                            <img
                                srcset="${checkTag(tag, indexData)}"
                                alt=""
                                class="modal__sub-img"
                            />
                            <img
                                srcset="${checkTag1(tag, indexData)}"
                                alt=""
                                class="modal__sub-img"
                            />
                            <img
                                srcset="${checkTag2(tag, indexData)}"
                                alt=""
                                class="modal__sub-img"
                            />
                        </div>
                    </div>
                    <div class="modal__info col l-7">
                        <h2 class="modal-info__name">
                            ${checkTagName(tag, indexData)}
                        </h2>

                        <div class="modal-vendor-type">
                            <span class="modal__brand">
                                Thương hiệu :
                                <b class="modal__strong">Nike</b>
                            </span>
                            <span class="modal__type">
                                Loại: (Đang cập nhật...)
                            </span>
                        </div>
                        <div class="modal__price">
                            <span class="modal-price__sale">2500000</span>
                            <span class="modal-price__old">5000000</span>
                        </div>

                        <div class="modal__desc-wrap">
                            <p class="modal__desc">
                            ${checkTagName(tag, indexData)}
                                <a href="">[Xem chi tiết...]</a>
                            </p>
                        </div>
                        <div class="modal__option-wrap">
                            <label for="modal__option" class="modal__label">
                                Kích thước
                            </label>
                            <select
                                name=""
                                id="modal__option"
                                class="modal__option"
                            >
                                <option value="">40</option>
                                <option value="">40</option>
                                <option value="">40</option>
                            </select>
                        </div>

                        <button class="add-cart" onclick="handleAddCartClick(${tag}, ${indexData}, ${indexList})">Thêm vào giỏ hàng</button>
                    </div>
    `;

    const bs = $$(".modal__sub-img");
    const c = $(".modal__img");

    for (const b of bs) {
        b.addEventListener("click", () => {
            c.srcset = b.srcset;
        });
    }
}

function openModal() {
    modal.classList.add("open");
}

function handleQuantity() {
    let quantity = $(".qty__number");
    let c = quantity.value + 1;
    console.log(c);
}

function closeModal() {
    modal.classList.remove("open");
    modalInner.innerHTML = "";
}

function handleAddCartClick(tag, indexData, indexList) {
    closeModal();

    if (tag == 1) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataShoes.manShoes[indexData];
            listCartData[indexList].cartQty = 1;
            listCartData[indexList].ID__LIST = indexList;
        } else {
            listCartData[indexList].cartQty += 1;
        }
    } else if (tag == 2) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataShoes.womenShoes[indexData];
            listCartData[indexList].cartQty = 1;
            listCartData[indexList].ID__LIST = indexList;
        } else {
            listCartData[indexList].cartQty += 1;
        }
    }

    statusAddCart.style.display = "block";
    let status = document.createElement("li");
    status.classList.add("status-item");
    status.innerHTML = `
                        <div class="status-item__contain">
                            <h3 class="status-item__heading">SẢN PHẨM ĐÃ ĐƯỢC THÊM VÀO GIỎ HÀNG</h3>

                            <div class="icon__success">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="status-item__message">
                                “Bạn đã thêm sản phẩm vào giỏ hàng <i class="fa-solid fa-cart-shopping"></i>”
                            </div>
                        </div>
                        `;

    listStatus.appendChild(status);
    removeStatus(status);
    resetCartData();
    console.log(indexList);
}

function removeStatus(status) {
    setTimeout(() => {
        listStatus.removeChild(status);
    }, 1000);
}

function resetCartData() {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    cartQty.innerHTML = 0;
    resultPrice.innerHTML = 0;

    listCartData.forEach((item, index) => {
        if (item != null) {
            console.log(item);
            count += item.cartQty;
            totalPrice += item.salePrice * item.cartQty;
            let newDiv = document.createElement("div");
            newDiv.classList.add("cart-item");
            newDiv.innerHTML = `
                                <div class="cart-item__remove" onclick="removeCart(${
                                    item.ID__LIST
                                })">
                                    <i
                                        class="fa-solid fa-circle-xmark"
                                    ></i>
                                </div>

                                <figure class="cart-item__img-wrap">
                                    <img
                                        srcset="${item.img} 2x"
                                        alt=""
                                        class="cart-item__img"
                                    />
                                </figure>

                                <div class="cart-item__info">
                                    <h3 class="cart-item__name">
                                        ${item.name}
                                    </h3>

                                    <span
                                        class="cart-item__price"
                                    >
                                        ${convert(item.salePrice)}
                                    </span>

                                    <div class="cart-item__quantity">
                                        <button
                                            class="item-quantity__down"
                                            onclick="handleQuantity(${
                                                item.ID__LIST
                                            }, ${item.cartQty - 1})"
                                        >
                                            -
                                        </button>
                                        <div
                                            class="number__quantity"
                                        >
                                            ${item.cartQty}
                                        </div>
                                        <button
                                            class="item-quantity__up"
                                            onclick="handleQuantity(${
                                                item.ID__LIST
                                            }, ${item.cartQty + 1})"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            `;
            listCart.appendChild(newDiv);
        }
        cartQty.innerHTML = count;
        resultPrice.innerHTML = convert(totalPrice);
    });
}

function checkTag(tag, indexData) {
    if (tag == 1) {
        return dataShoes.manShoes[indexData].img;
    } else if (tag == 2) {
        return dataShoes.womenShoes[indexData].img;
    }
}

function checkTag1(tag, indexData) {
    if (tag == 1) {
        return dataShoes.manShoes[indexData].subImg1;
    } else if (tag == 2) {
        return dataShoes.womenShoes[indexData].subImg1;
    }
}

function checkTag2(tag, indexData) {
    if (tag == 1) {
        return dataShoes.manShoes[indexData].subImg2;
    } else if (tag == 2) {
        return dataShoes.womenShoes[indexData].subImg2;
    }
}

function checkTagName(tag, indexData) {
    if (tag == 1) {
        return dataShoes.manShoes[indexData].name;
    } else if (tag == 2) {
        return dataShoes.womenShoes[indexData].name;
    }
}

function handleQuantity(idList, cartQty) {
    console.log(idList, cartQty);
    listCartData[idList].cartQty = cartQty;
    if (cartQty <= 0) {
        delete listCartData[idList];
        resetCartData();
    }
    resetCartData();
}

function removeCart(idList) {
    delete listCartData[idList];
    resetCartData();
}

function convert(number) {
    let vnd = number.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
    vnd = vnd.replace(".", ",");
    return vnd;
}
