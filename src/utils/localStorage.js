function getLocalStorageData(){
    const storageData = localStorage.getItem('cart')
    if(storageData){
       return JSON.parse(storageData)
    }
    return []
}


const saveLocalStorageData = (data)=>{
    const cart = getLocalStorageData()
    cart.push(data)
    const dataStr = JSON.stringify(cart)
    localStorage.setItem("cart",dataStr)
}

export{getLocalStorageData,saveLocalStorageData}