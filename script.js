const myNums=[1,2,3]

// syntex:-
    // const initialValue=0;
    // const sumWithInitial = array1.reduce( (accumulator,currentValue) => accumulator+currentValue, initialValue );

    // where :-    accumulator=0;
    //             currentvalue=1;

    // then :- accumulator will be  :- accumulator+currentValue



// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)  // enter number to start from acc value
// console.log(myTotal);




// const myTotal=myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal);


const shoppingCart=[
    {
        itemName:"chips",
        price:20
    },
    {
        itemName:"icecream",
        price:60
    },
    {
        itemName:"chocolate",
        price:10
    },
]

const TotalShopping=shoppingCart.reduce((acc,item) => acc + item.price,0)
    console.log(TotalShopping);
