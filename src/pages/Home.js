import Nav from "../components/Nav"
import { products } from "../resources"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cart/actions"

export default ()=>{
    
    const dispatch = useDispatch()

    const handleAddToCard = ({id, price})=>{
        dispatch(addToCart({id, qty: 1, price}))
    }

    return (
        <div>
           <Nav/>
           <div className="body-wrapper">
                <div className="row p-2">
                    {
                      products.map(
                        (product, index)=><div key={index} className="product-card col-md-3 mb-3">
                            <img height={200} width={200} src={`/img/${product.image}`} alt=""/>
                            <h5>{product.name}</h5>
                            <span>${product.price}</span>
                            <br/>
                            <button onClick={()=>handleAddToCard({id: product.id, price: product.price})} className="my-2">Add to Cart</button>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}