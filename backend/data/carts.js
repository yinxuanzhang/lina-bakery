
const cartsStore=new Map();
export function getCart(cartsId){
  return cartsStore.get(cartsId)||[];
}
export function setCart(cartsId,newCarts){
  cartsStore.set(cartsId,newCarts);
}
