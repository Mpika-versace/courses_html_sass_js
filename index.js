let addBag=document.querySelectorAll(".product_col_card_btn");
let productCol=document.querySelector(".product_col");
let fixedClose=document.querySelector(".fixed_close");
let clearCart=document.querySelector(".clear-cart");
let menuFixed=document.querySelector(".fixed");
let ul=document.querySelector("ul");

 let openCloseFixed=() =>{
   return menuFixed.classList.toggle("open");
}

addBag.forEach((element) => {
//   console.log(element);
  // console.log(this)
    element.addEventListener("click",openCloseFixed);
   
} ,console.log(this));

  fixedClose.addEventListener("click",openCloseFixed);

/* cart*/
// 1
let cart=[];

/*getting the products*/ 
class products{
   async getProducts(){
         try{
            let result=await fetch("products.json");
            // return result;
            let data=await result.json();
            let products=data.items;
            products.map((element)=>{
               const{id}=element;
               const{title,price}=element;
               const{image}=element;
               return{title,price,id,image}  
            });
            return products;
         }
         catch(error){
            console.log(error);
         }
      
   }
   }
   /*display products*/ 
   class UI{
      diplayProducts(products){
         console.log(products);
         let result="";
         products.forEach(element=>{
            console.log(element);
            result+=`
            <article class="product_col_card"> 
            <img src=${element.image} alt="product">
            <button class=" product_col_card_btn" date-id=${element.id} ><i class="fas fa-shopping-cart"></i> add a bag</button>
            <div class="product_col_description">
                <h3>${element.title}</h3>
                <p class="product_col_card_price">${element.price}</p>
            </div>

        </article>
            `;
            productCol.innerHTML=result;
         });
      }
   }
   
   // local storage
   class Storage{
   
   }
   // 2
   document.addEventListener("DOMContentLoaded",()=>{
      const ui = new UI();
      let product = new products()
      // get All products
      product.getProducts().then(products=> ui.diplayProducts(products));
   
   
   });