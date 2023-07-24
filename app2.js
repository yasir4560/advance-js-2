fetch("https://sandbox.nextleap.app/products/fetch")
  .then((response) => response.json())
  .then((data) => {
    // Parse the data and create HTML elements to display the products
    let newData = "";
    data.productCard.forEach((product) => {
      newData +=
        `
        <div class="pro_main" id="pro_main">
                <div class="pro_sec1">
                  
                    <img src="${product.image.url}" alt="${product.title}">
                    <form action="" id="checkbox">
                    <input type="checkbox" name="vehicle" value="cart">add to cart<br>
                    <input type="checkbox" name="vehicle" value="compare">add to compare
                    </form>
                  
                </div>
                <div class="pro_sec2">
                  <div>
                    <h2>${product.title}</h2>
                    <span>${product.ratings.overallRating} 181870 ratings & 10,713 Reviews</span>
                    <ul>
                      <li>${product.featuresList[0]}</li>
                      <li>${product.featuresList[1]}</li>
                      <li>${product.featuresList[2]}</li>
                      <li>${product.featuresList[3]}</li>
                      <li>${product.featuresList[4]}</li>
                    </ul>
                  </div>
                </div>
                <div class="pro_sec3">
                  <h3>${product.price.finalPrice}</h3>
                  <span>${product.price.mrp} ${product.price.discount.data} % off</span>
                   <p>free delivery</p>
                   <span> upto ${product.exchangeOfferDiscount.data} off on Exchange</span>
                   <p> ${product.bankOffersLink.buttonText}</p>
                  
                </div>
              </div>

        `
    })
    document.getElementById("body").innerHTML = newData;
  })

  .catch((error) => console.error(error));