import toast from "react-hot-toast"

//get all carts
const getAllCarts=()=>{
  const allCarts=localStorage.getItem('carts')
  if(allCarts){
    const carts=JSON.parse(allCarts)
    return carts
  }else {
    return []
  }
}

//add carts to localStorage
const addCart=product=>{
    const carts=getAllCarts()
    const productExists = carts.find((item) => item.id === product.id);

    if (!productExists) {
      carts.push(product); 
      localStorage.setItem("carts", JSON.stringify(carts));
      toast.success('Successfully added!');
    } else {
        toast.error('Item is already exist!');
    }
}

//get all wish
const getAllWishs=()=>{
    const allWish=localStorage.getItem('wish')
    if(allWish){
      const wish=JSON.parse(allWish)
      return wish
    }else {
      return []
    }
  }
  
  //add carts to localStorage
  const addWish=product=>{
      const wish=getAllWishs()
      const wishExists = wish.find((item) => item.id === product.id);

      if (!wishExists) {
        wish.push(product); 
        localStorage.setItem("wish", JSON.stringify(wish));
        toast.success('Successfully added!');
      } else {
          toast.error('Item is already exist!');
      }
  }

export {getAllCarts,addCart, getAllWishs, addWish}