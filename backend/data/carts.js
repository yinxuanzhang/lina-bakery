export let carts=[
  
    {
      code: 'J-01',
      price: 6000,
      image: '/images/resources/cellImage_0_17.png',
      quantity: 1,
      estimatedCompletionDate:'April 7'
    },
    {
      code: 'J-02',
      price: 7000,
      image: '/images/resources/cellImage_0_25.png',
      quantity: 1,
      estimatedCompletionDate:'April 7'
    }
  
];
export function setCarts(newCarts){
  carts=newCarts;
}