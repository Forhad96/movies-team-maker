function getLocalStorageData(){
    const storageData = localStorage.getItem('cart')
    if(storageData){
       return JSON.parse(storageData)
    }
    return []
}

const setLSDat = (cart)=>{
    const dataStr = JSON.stringify(cart)
    localStorage.setItem("cart",dataStr)
}
const saveLocalStorageData = (data)=>{
    const cart = getLocalStorageData()
    cart.push(data)
    setLSDat(cart)
}

// const receivedData= ()=>{
//     const cart = getLocalStorageData()
//     cart.push(data)
// }

const removeFromLS=(id)=>{
    const cart = getLocalStorageData()
  const  filteredData = cart.filter(data => data !== id);
//   cart.push(filteredData)
//   saveLocalStorageData(filteredData)
setLSDat(filteredData)
console.log(...filteredData);

}

export{getLocalStorageData,saveLocalStorageData,removeFromLS}