var initialState =[
    {
        id:1,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f1.jpg',
        price:78,
        inventory:10
    },
    {
        id:2,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f2.jpg',
        price:78,
        inventory:1
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f3.jpg',
        price:78,
        inventory:20
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f4.jpg',
        price:78,
        inventory:20
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f5.jpg',
        price:78,
        inventory:20
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f6.jpg',
        price:78,
        inventory:20
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f7.jpg',
        price:78,
        inventory:20
    },
    {
        id:3,
        name:'Cartoon Astronaut T-Shirts',
        image:'img/products/f8.jpg',
        price:78,
        inventory:20
    },
];

const products= (state= initialState, action)=>{
    switch(action.type){
        default: return [... state];
    }
}

export default products;