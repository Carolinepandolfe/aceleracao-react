const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];
const { products } = require("../src/data/products.json");

function productsIds(ids, productsList) {
  return productsList.filter(({ id }) => ids.includes(id));
}

//sem destructuring
// const productsIds = (ids, productsList) => {
// 	return productsList.filter(( product ) => ids.includes(product.id))
// }

function productsName(cart) {
  return cart.map(({ name, category }) => ({ name, category }));
}

//sem destructuring
// const productsName = (cart) => {
// 	return cart.map((item) => {
// 		return {
// 			name: item.name,
// 			category: item.category
// 		}
// 	})
// }

function productsCategory(list) {
  const look = list.map((produts) => produts.category);
  return Array.from(new Set(look))
}

function regularPrice(products) {
  return products.reduce((total, price) => {
		return (total += price.regularPrice);
  }, 0).toFixed(2);
}  

function promotionPrice(cart,promotion){
	return cart.reduce((total,product) => {
    const promo = product.promotions.find(({looks}) => {
        return looks.includes(promotion);
        // console.log(`looks ${looks}`)
        // console.log(`promo ${promotion}`)
    }) 
    return promo ? total+=promo.price : total+=product.regularPrice
  },0).toFixed(2)
}


// console.log(pricePromotion);
// console.log(noPromotion);
// console.log(looks)
// console.log(list)
// console.log(teste)

function getShoppingCart(ids, productsList) {
    const cart = productsIds(ids,productsList);
    const products = productsName(cart);
    const looks = productsCategory(cart);
    const noPromotion = regularPrice(cart);
    const promotion = promotions[looks.length-1];
    const totalPrice= promotionPrice(cart,promotion);
    const discountValue = (noPromotion - totalPrice).toFixed(2);
    const discount = `${((discountValue*100) / noPromotion).toFixed(2)}%`;
    
  return {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount
  };
}

getShoppingCart([120,230,310,490],products);


module.exports = { getShoppingCart };
