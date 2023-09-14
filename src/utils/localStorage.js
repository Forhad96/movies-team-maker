function getLocalStorageData(){
    const storageData = localStorage.getItem('cart')
    if(storageData){
       return JSON.parse(storageData)
    }
    return []
}

const setLSData = (cart)=>{
    const dataStr = JSON.stringify(cart)
    localStorage.setItem("cart",dataStr)
}
const saveLocalStorageData = (data)=>{
    const cart = getLocalStorageData()
    cart.push(data)
    setLSData(cart)
}


const removeFromLS=(id)=>{
    const cart = getLocalStorageData()
  const  filteredData = cart.filter(data => data !== id);

setLSData(filteredData)
console.log(...filteredData);

}

export{getLocalStorageData,saveLocalStorageData,removeFromLS}