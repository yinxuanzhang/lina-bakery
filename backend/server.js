import express from 'express';
import cors from 'cors';

const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

const products= [
 
{
  title: 'Jellycat 系列',
  items: [
    {
      id: 17,
      code: 'J-01',
      price: '$60',
      image: '/images/resources/cellImage_0_17.jpg'
    },
    {
      id: 18,
      code: 'J-02',
      price: '$70',
      image: '/images/resources/cellImage_0_25.jpg'
    },
    {
      id: 19,
      code: 'J-03',
      price: '$60',
      image: '/images/resources/cellImage_0_33.jpg'
    },
    {
      id: 20,
      code: 'J-04',
      price: '$70',
      image: '/images/resources/cellImage_0_40.jpg'
    },
    {
      id: 21,
      code: 'J-05',
      price: '$70',
      image: '/images/resources/cellImage_0_47.jpg'
    },
    {
      id: 22,
      code: 'J-06',
      price: '$70',
      image: '/images/resources/cellImage_0_54.jpg'
    },
    {
      id: 23,
      code: 'J-07',
      price: '$90',
      image: '/images/resources/cellImage_0_60.jpg'
    },
    {
      id: 24,
      code: 'J-08',
      price: '$120',
      image: '/images/resources/cellImage_0_66.jpg'
    },
    {
      id: 25,
      code: 'J-09',
      price: '$70',
      image: '/images/resources/cellImage_0_72.jpg'
    }
  ]
},
{
  title: '裱花蛋糕系列',
  items: [
    {
      id: 26,
      code: 'D-01',
      price: '$50',
      image: '/images/resources/cellImage_0_18.jpg'
    },
    {
      id: 27,
      code: 'D-02',
      price: '$70',
      image: '/images/resources/cellImage_0_26.jpg'
    },
    {
      id: 28,
      code: 'D-03',
      price: '$60',
      image: '/images/resources/cellImage_0_34.jpg',
      size:'图片可换'
    },
    {
      id: 29,
      code: 'D-04',
      price: '$60',
      image: '/images/resources/cellImage_0_41.jpg'
    },
    {
      id: 30,
      code: 'D-05',
      price: '$80',
      image: '/images/resources/cellImage_0_48.jpg'
    },
    {
      id: 31,
      code: 'D-06',
      price: '$70',
      image: '/images/resources/cellImage_0_55.jpg'
    },
    {
      id: 32,
      code: 'D-07',
      price: '$70',
      image: '/images/resources/cellImage_0_61.jpg'
    },
    {
      id: 33,
      code: 'D-08',
      price: '$130',
      image: '/images/resources/cellImage_0_67.jpg',
      size:'玩偶可换'
    },
    {
      id: 34,
      code: 'D-09',
      price: '$80',
      image: '/images/resources/cellImage_0_73.jpg'
    }
  ]
},
{
  title: '小动物系列（可换）',
  items: [
    {
      id: 35,
      code: 'A-01',
      price: '$70',
      image: '/images/resources/cellImage_0_19.jpg'
    },
    {
      id: 36,
      code: 'A-02',
      price: '$80',
      image: '/images/resources/cellImage_0_27.jpg'
    },
    {
      id: 37,
      code: 'A-03',
      price: '$90',
      image: '/images/resources/cellImage_0_35.jpg'
    },
    {
      id: 38,
      code: 'A-04',
      price: '$90',
      image: '/images/resources/cellImage_0_42.jpg'
    },
    {
      id: 39,
      code: 'A-05',
      price: '$90',
      image: '/images/resources/cellImage_0_49.jpg'
    },
    {
      id: 40,
      code: 'A-06',
      price: '$90',
      image: '/images/resources/cellImage_0_56.jpg'
    },
    {
      id: 41,
      code: 'A-07',
      price: '$90',
      image: '/images/resources/cellImage_0_62.jpg'
    },
    {
      id: 42,
      code: 'A-08',
      price: '$120',
      image: '/images/resources/cellImage_0_68.jpg'
    },
    {
      id: 43,
      code: 'A-09',
      price: '$100',
      image: '/images/resources/cellImage_0_74.jpg'
    }
  ]
},
{
  title: '手绘系列',
  items: [
    {
      id: 44,
      code: 'H-01',
      price: '$100',
      image: '/images/resources/cellImage_0_20.jpg'
    },
    {
      id: 45,
      code: 'H-02',
      price: '$130',
      image: '/images/resources/cellImage_0_28.jpg'
    },
    {
      id: 46,
      code: 'H-03',
      price: '$100',
      image: '/images/resources/cellImage_0_36.jpg'
    },
    {
      id: 47,
      code: 'H-04',
      price: '$80',
      image: '/images/resources/cellImage_0_43.jpg'
    },
    {
      id: 48,
      code: 'H-05',
      price: '$80',
      image: '/images/resources/cellImage_0_50.jpg'
    },
    {
      id: 49,
      code: 'H-06',
      price: '定制价格待定',
      image: '/images/resources/cellImage_0_57.jpg'
    },
    {
      id: 50,
      code: 'H-07',
      price: '$70',
      image: '/images/resources/cellImage_0_63.jpg'
    },
    {
      id: 51,
      code: 'H-08',
      price: '$60',
      image: '/images/resources/cellImage_0_69.jpg'
    },
    {
      id: 52,
      code: 'H-09',
      price: '$100',
      image: '/images/resources/cellImage_0_75.jpg'
    }
  ]
},
{
  title: '异形系列',
  items: [
    {
      id: 53,
      code: 'Y-01',
      price: '$150',
      image: '/images/resources/cellImage_0_21.jpg'
    },
    {
      id: 54,
      code: 'Y-02',
      price: '$120',
      image: '/images/resources/cellImage_0_29.jpg'
    },
    {
      id: 55,
      code: 'Y-03',
      price: '$80',
      image: '/images/resources/cellImage_0_37.jpg'
    },
    {
      id: 56,
      code: 'Y-04',
      price: '$100',
      image: '/images/resources/cellImage_0_44.jpg'
    },
    {
      id: 57,
      code: 'Y-05',
      price: '$120',
      image: '/images/resources/cellImage_0_51.jpg'
    },
    {
      id: 58,
      code: 'Y-06',
      price: '$100',
      image: '/images/resources/cellImage_0_58.jpg',
      size:'可吹哨'
    },
    {
      id: 59,
      code: 'Y-07',
      price: '$130',
      image: '/images/resources/cellImage_0_64.jpg'
    },
    {
      id: 60,
      code: 'Y-08',
      price: '$120',
      image: '/images/resources/cellImage_0_70.jpg'
    },
    {
      id: 61,
      code: 'Y-09',
      price: '$100',
      image: '/images/resources/cellImage_0_76.jpg'
    }
  ]
},
{
  title: '极简系列',
  items: [
    {
      id: 62,
      code: 'M-01',
      price: '$40',
      image: '/images/resources/cellImage_0_22.jpg'
    },
    {
      id: 63,
      code: 'M-02',
      price: '$40',
      image: '/images/resources/cellImage_0_30.jpg'
    },
    {
      id: 64,
      code: 'M-03',
      price: '$60',
      image: '/images/resources/cellImage_0_38.jpg'
    },
    {
      id: 65,
      code: 'M-04',
      price: '$60',
      image: '/images/resources/cellImage_0_45.jpg'
    },
    {
      id: 66,
      code: 'M-05',
      price: '$50',
      image: '/images/resources/cellImage_0_52.jpg'
    },
    {
      id: 67,
      code: 'M-06',
      price: '$70',
      image: '/images/resources/cellImage_0_59.jpg'
    },
    {
      id: 68,
      code: 'M-07',
      price: '$70',
      image: '/images/resources/cellImage_0_65.jpg'
    },
    {
      id: 69,
      code: 'M-08',
      price: '$50',
      image: '/images/resources/cellImage_0_71.jpg'
    },
    {
      id: 70,
      code: 'M-09',
      price: '$50',
      image: '/images/resources/cellImage_0_77.jpg'
    }
  ]
},
{
  title: '淋面系列',
  items: [
    {
      id: 71,
      code: 'L-01',
      price: '$70',
      image: '/images/resources/cellImage_0_23.jpg'
    },
    {
      id: 72,
      code: 'L-02',
      price: '$90',
      image: '/images/resources/cellImage_0_31.jpg'
    },
    {
      id: 73,
      code: 'L-03',
      price: '$80',
      image: '/images/resources/cellImage_0_39.jpg'
    },
    {
      id: 74,
      code: 'L-04',
      price: '$70',
      image: '/images/resources/cellImage_0_46.jpg'
    },
    {
      id: 75,
      code: 'L-05',
      price: '$80',
      image: '/images/resources/cellImage_0_53.jpg'
    }
  ]
},
{
  title: '翻糖系列',
  items: [
    {
      id: 76,
      code: 'F-01',
      price: '$80',
      image: '/images/resources/cellImage_0_24.jpg'
    },
    {
      id: 77,
      code: 'F-02',
      price: '$70',
      image: '/images/resources/cellImage_0_32.jpg'
    }
  ]
}
];
let carts=[
  
    {
      code: 'J-01',
      price: '$60',
      image: '/images/resources/cellImage_0_17.jpg',
      quantity: 1,
      estimatedCompletionDate:'April 7'
    },
    {
      code: 'J-02',
      price: '$70',
      image: '/images/resources/cellImage_0_25.jpg',
      quantity: 1,
      estimatedCompletionDate:'April 7'
    }
  
];
app.get('/api/products',(req,res)=>{
  res.json(products);
});
app.get('/api/carts',(req,res)=>{
  res.json(carts)
})
app.post('/api/carts',(req,res)=>{
  const{code,price,image,quantity,estimatedCompletionDate}=req.body;
  const existingItem=carts.find((item)=>item.code===code);
  if(existingItem){
    existingItem.quantity+=quantity;
    return res.json(existingItem)
  }
  const newCartItem=
    {
      code,
      price,
      image,
      quantity,
      estimatedCompletionDate
  };
 carts.push(newCartItem);
  res.status(201).json(newCartItem);
})
app.delete('/api/carts/:code',(req,res)=>{
 const cartItemCode=req.params.code
  carts=carts.filter((cartItem)=>cartItem.code!==cartItemCode);
  res.json(carts);
});
app.put('/api/carts/:code',(req,res)=>{
  const cartItemCode=req.params.code;
  const{quantity}=req.body;
  const cartsItem=carts.find((item)=>item.code===cartItemCode);
  if(quantity<=0){
    carts=carts.filter((item)=>item.code!==cartItemCode);
   return res.json(carts);
  }
  else{
    cartsItem.quantity=quantity;
    return res.json(carts);
  }
})
app.listen(port,()=>{
  console.log(`server is running on port ${port} `)
});