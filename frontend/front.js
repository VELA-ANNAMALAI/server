const container=document.getElementById("container")
const producttitle=document.getElementById("titles")
const final=document.getElementById("final")

   fetch('https://server-20s1.onrender.com/products')
    .then(res => res.json())
    .then(products => generateUI(products))


function generateUI(products){
    products.map((product) =>{

     
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");
        
   
      const productImage = document.createElement("img");
      productImage.classList.add("product-image");
      productImage.src = product.thumbnail;
      productBox.appendChild(productImage);

      const producttitle = document.createElement("h3")
      producttitle.classList.add("product-title");
      producttitle.textContent = product.title;
      productBox.appendChild(producttitle);

      const productprice=document.createElement("h5")
      productprice.classList.add("product-price");
      productprice.textContent = `Rs. ${product.price}`;
      productBox.appendChild(productprice);


     
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productRating = document.createElement("h6")
      productRating.classList.add("product-rating");
      productRating.textContent = product.rating;
      const star="&#11088";
      for(let i = 0; i < product.rating; i++) 
      { productRating.innerHTML += star;
     } 
      
      productInfo.appendChild(productRating);

      const productDiscount = document.createElement("h6");
      productDiscount.classList.add("product-discount");
      productDiscount.textContent = `off ${product.discountPercentage}%`;
      productInfo.appendChild(productDiscount);

     productBox.appendChild(productInfo);

    

     const productbutton = document.createElement("button");
      productbutton.textContent = "More Details";
      productbutton.classList.add("product-button")

      productBox.appendChild(productbutton);
      productbutton.addEventListener("click", () => {

        productbutton.style.display = productbutton.style.display === "none" ? "block" : "none";
        
        const productdescription = document.createElement("div");
        productdescription.classList.add("product-description");
        productdescription.textContent = product.description;
    productBox.appendChild(productdescription);
     
    

    });
     productBox.appendChild(productbutton);

     


      
      container.appendChild(productBox);
     
      
      

    });
    
}
