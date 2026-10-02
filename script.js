/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "Fashion",
        price: 18,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable cotton t-shirt for everyday use.",

        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 45,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable wireless headphones with clear sound.",

        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 3,
        name: "Canvas Backpack",
        category: "Accessories",
        price: 28,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        desc: "Lightweight backpack for study, work and travel.",

        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 4,
        name: "Modern Desk Lamp",
        category: "Home",
        price: 32,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        desc: "Simple desk lamp for study and work.",

        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 5,
        name: "Smart Watch",
        category: "Electronics",
        price: 60,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        desc: "A practical smartwatch for daily notifications.",

        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 6,
        name: "Casual Sneakers",
        category: "Fashion",
        price: 52,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable sneakers for everyday walking.",

        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 7,
        name: "Leather Wallet",
        category: "Accessories",
        price: 22,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
        desc: "Compact wallet with a simple design.",

        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 8,
        name: "Ceramic Mug",
        category: "Home",
        price: 12,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80",
        desc: "Simple ceramic mug for tea and coffee.",

        images: [
            "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 40,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
        desc: "Portable speaker for everyday music.",

        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        id: 10,
        name: "Simple Hoodie",
        category: "Fashion",
        price: 35,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
        desc: "Soft hoodie for casual everyday wear.",

        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
        ]
    }

];



/* =========================================
   CURRENT DATE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const date = document.getElementById("currentDate");

    if (date) {

        date.textContent =
            new Date().toLocaleDateString(
                "en-US",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            );

    }


    /* CONTACT FORM */

    const form =
        document.getElementById("contactForm");


    if (form) {

        form.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const modal =
                    new bootstrap.Modal(
                        document.getElementById(
                            "confirmationModal"
                        )
                    );

                modal.show();

                form.reset();

            }
        );

    }

});



/* =========================================
   PRODUCT CARD
========================================= */

function productCard(product) {

    return `

        <div class="col-md-6 col-xl-4">

            <div class="card product-card">

                <img
                    src="${product.image}"
                    class="card-img-top"
                    alt="${product.name}"
                >

                <div class="card-body">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h5 class="mt-1">
                        ${product.name}
                    </h5>

                    <p class="text-secondary small">
                        ${product.desc}
                    </p>

                    <div class="d-flex
                                justify-content-between
                                align-items-center">

                        <span class="product-price">
                            $${product.price.toFixed(2)}
                        </span>

                        <a
                            href="project-detail.html?id=${product.id}"
                            class="btn btn-dark btn-sm">

                            View Details

                        </a>

                    </div>

                </div>

            </div>

        </div>

    `;

}



/* =========================================
   HOME FEATURED PRODUCTS
========================================= */

function loadFeaturedProducts() {

    const element =
        document.getElementById(
            "featuredProducts"
        );


    if (element) {

        element.innerHTML =
            products
                .slice(0, 3)
                .map(productCard)
                .join("");

    }

}



/* =========================================
   PRODUCTS PAGE
========================================= */

function initProductsPage() {

    const grid =
        document.getElementById(
            "productGrid"
        );

    const pagination =
        document.getElementById(
            "pagination"
        );

    const count =
        document.getElementById(
            "resultCount"
        );


    let category =
        new URLSearchParams(
            location.search
        ).get("category") || "All";


    let page = 1;

    const perPage = 6;


    /* CATEGORY BUTTONS */

    document
        .querySelectorAll(".category-filter")
        .forEach(function (button) {

            if (
                button.dataset.category ===
                category
            ) {

                button.classList.add("active");

            }


            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".category-filter"
                        )
                        .forEach(function (b) {

                            b.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    category =
                        button.dataset.category;

                    page = 1;

                    render();

                }
            );

        });



    /* RENDER PRODUCTS */

    function render() {

        const filtered =
            category === "All"
                ? products
                : products.filter(
                    function (product) {

                        return (
                            product.category ===
                            category
                        );

                    }
                );


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filtered.length / perPage
                )
            );


        if (page > totalPages) {

            page = 1;

        }


        const start =
            (page - 1) * perPage;


        const currentProducts =
            filtered.slice(
                start,
                start + perPage
            );


        grid.innerHTML =
            currentProducts
                .map(productCard)
                .join("");


        count.textContent =
            filtered.length +
            " products";


        /* PAGINATION */

        pagination.innerHTML = "";


        for (
            let i = 1;
            i <= totalPages;
            i++
        ) {

            pagination.innerHTML += `

                <li class="page-item
                    ${i === page ? "active" : ""}">

                    <button
                        class="page-link"
                        data-page="${i}">

                        ${i}

                    </button>

                </li>

            `;

        }


        pagination
            .querySelectorAll(".page-link")
            .forEach(function (button) {

                button.onclick =
                    function () {

                        page =
                            Number(
                                button.dataset.page
                            );

                        render();

                        window.scrollTo({
                            top: 300,
                            behavior: "smooth"
                        });

                    };

            });

    }


    render();

}



/* =========================================
   PRODUCT DETAIL
========================================= */

function initProductDetail() {

    const id =
        Number(
            new URLSearchParams(
                location.search
            ).get("id")
        ) || 1;


    const product =
        products.find(
            function (item) {

                return item.id === id;

            }
        ) || products[0];


    const detail =
        document.getElementById(
            "productDetail"
        );


    /* IMAGE GALLERY */

    const thumbnails =
        product.images
            .map(function (image, index) {

                return `

                    <div class="col-3">

                        <img
                            src="${image}"
                            class="gallery-thumb
                            ${index === 0 ? "active" : ""}"

                            onclick="
                                changeMainImage(
                                    '${image}',
                                    this
                                )
                            "

                            alt="${product.name}"

                        >

                    </div>

                `;

            })
            .join("");


    detail.innerHTML = `

        <div class="row g-5">


            <!-- LEFT IMAGE GALLERY -->

            <div class="col-lg-6">

                <div
                    class="gallery-main"
                    onclick="zoomImage()">

                    <img
                        id="mainProductImage"
                        src="${product.images[0]}"
                        alt="${product.name}"
                    >

                </div>


                <div class="row g-2 mt-2">

                    ${thumbnails}

                </div>


                <p class="small text-secondary mt-2">

                    Click the main image to zoom.

                </p>

            </div>



            <!-- RIGHT INFORMATION -->

            <div class="col-lg-6">

                <span class="badge bg-secondary">

                    ${product.category}

                </span>


                <h2 class="mt-2">

                    ${product.name}

                </h2>


                <div class="text-warning mb-2">

                    ★★★★★

                    <span class="text-secondary">

                        (24 reviews)

                    </span>

                </div>


                <h3>

                    $${product.price.toFixed(2)}

                </h3>


                <p class="text-secondary">

                    ${product.desc}

                </p>


                <h5>
                    Product Information
                </h5>


                <ul>

                    <li>
                        Category:
                        ${product.category}
                    </li>

                    <li>
                        Quality checked product
                    </li>

                    <li>
                        Easy return within 7 days
                    </li>

                    <li>
                        Delivery available nationwide
                    </li>

                </ul>


                <button
                    class="btn btn-dark btn-lg"
                    onclick="
                        alert(
                            'Product added to cart!'
                        )
                    ">

                    Add to Cart

                </button>


                <a
                    href="products.html"
                    class="btn btn-outline-dark btn-lg ms-2">

                    Back to Products

                </a>

            </div>

        </div>

    `;



    /* RELATED PRODUCTS */

    const related =
        products
            .filter(function (item) {

                return (
                    item.category ===
                    product.category &&
                    item.id !== product.id
                );

            })
            .slice(0, 3);


    const relatedElement =
        document.getElementById(
            "relatedProducts"
        );


    if (relatedElement) {

        relatedElement.innerHTML =
            (
                related.length
                    ? related
                    : products
                        .filter(
                            x => x.id !== product.id
                        )
                        .slice(0, 3)
            )
            .map(productCard)
            .join("");

    }

}



/* =========================================
   CHANGE GALLERY IMAGE
========================================= */

function changeMainImage(
    source,
    thumbnail
) {

    document.getElementById(
        "mainProductImage"
    ).src = source;


    document
        .querySelectorAll(".gallery-thumb")
        .forEach(function (image) {

            image.classList.remove(
                "active"
            );

        });


    thumbnail.classList.add(
        "active"
    );

}



/* =========================================
   IMAGE ZOOM
========================================= */

function zoomImage() {

    const source =
        document.getElementById(
            "mainProductImage"
        ).src;


    document.getElementById(
        "zoomImage"
    ).src = source;


    const modal =
        new bootstrap.Modal(
            document.getElementById(
                "imageZoomModal"
            )
        );


    modal.show();

}