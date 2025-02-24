import React,{useState} from 'react'
import TopBanner from '../../Components/common/TopBanner'
import grapesbanner from '../../assets/common/grapesbanner.jpg'
import Table from '../../Components/CartPage/Table'
import brownbread from '../../assets/cart/brownbread.jpg'
import broccoli from '../../assets/cart/broccoli.jpg'
import tomato from '../../assets/cart/tomato.jpg'

const CartPage = () => {
    const [items, setItems] = useState([
        { name: "Brown Bread", price: 1.5, quantity: 2 ,image: brownbread},
        { name: "Broccoli", price: 0.8, quantity: 5 ,image: broccoli },
        { name: "Tomato", price: 1.2, quantity: 3 , image: tomato},
      ]);
    
      const handleRemove = (index) => {
        setItems(items.filter((_, i) => i !== index));
      };
      const handleQuantityChange = (index, newQuantity) => {
        setItems(items.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)));
      };
  return (
    <div>
      <TopBanner title='Cart' image={grapesbanner} smallhead='Home / shop'/>
      <Table data={items} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
    </div>
  )
}

export default CartPage
