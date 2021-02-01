const denom = {
    'sepuluh':10 ,
    'lima': 5,
    'satu': 1
};


function totalCashCheck(cashInDrawer) {
    return cashInDrawer.reduce(
        (accumulator, currentValue) => accumulator + currentValue[1], 0
    );
    // return totalCash;
}
function createDenomAvailability(wallet){
    let newArr = [];
    wallet.forEach(element => {
        let denomOccurences = element[1] / denom[element[0]];
        for (let i = 0; i <= denomOccurences-1; i++){
            newArr.push(denom[element[0]]);
        }
    });
    return newArr;
}   

function getKeyByValue(value){
    let newValue;
    newValue = Object.keys(denom).find(
            key => denom[key] === value
        );
    return newValue;
}

const paymentStatus = {
    insufficient: 'INSUFFICIENT_FUNDS',
    closed: 'CLOSED',
    open: 'OPEN'
};
const insufficient = { status: paymentStatus.insufficient, change: [] };

function createOneDimensionArray(cashInDrawer) {
    return cashInDrawer.map(
        currItem => currItem[1]
    );
}

function wrapper(arr){
    // this function reduce a one dimesional array to its respective denomination and its sum
    let newArr  = [];
    
    arr.map(
        function (currItem) {
            newArr.push(getKeyByValue(currItem));
        }
    );

    // console.log(newArr);
    
    // z is the container for new array created
    let z = [];
    
    newArr.reduce(function(prev, curr){
        
        if(!z.length) {
            z.push([prev, denom[prev]]);
        }
        
        if (z[z.length - 1][0] === curr) {
            z[z.length - 1][1] += denom[curr];
        }else {
            z.push([curr, denom[curr]]);
        }
    });
    return z;
    
}

function cashRegister(price, customerCash, cashInDrawer){
    // cek apakah total uang dilaci lebih dari sama dengan customerCash
        // kalo sama, kasi tutup -- CLOSED, return array SEMUE DENOM
        // kalo kurang, return array kosong -- INSUFFICIENT_FUNDS
    // kalo status open, return array HANYA DENOM YANG DIBAYARKAN

    
    let availableDenom = createDenomAvailability(cashInDrawer), // create new 1 dimension array
        totalCash = totalCashCheck(cashInDrawer), // check for total cash in drawer
        change = customerCash-price; // determine change
    let collectionOfChange = [];
    // return status closed and all cash in drawer if cash in drawer exactly equal to change
    if (totalCash === change) {
        return {status: paymentStatus.closed,  change: cashInDrawer}
    }
    console.log(availableDenom);
    // return status insufficient and empty change
    if (totalCash < change) {
        return insufficient;
    }
    
    console.log("change: "+change);
    // logic to build change
    for (let i = 0; i < availableDenom.length; i++) {
        if (change - availableDenom[i] >= 0) {
            change -= availableDenom[i];
            collectionOfChange.push(availableDenom[i]);
            
        }
        
    }

    if(change>0) return insufficient;
    console.log(collectionOfChange);
    return {
        status: paymentStatus.open,
        change: wrapper(collectionOfChange)   
    }
}



let price = 1,
    customerCash = 12,
    cashInDrawer = [
        ['sepuluh', 100],
        ['lima', 15],
        ['satu', 3]
    ];
let wallet = [['sepuluh', 100]];



// let tes = [10, 10, 10, 1 ,1];
let tes2 = [10, 1];


// console.log(wrapper(tes2));
// let kosongan = [];
// console.log( kosongan[0] === undefined )
console.log(cashRegister(price, customerCash, cashInDrawer));
