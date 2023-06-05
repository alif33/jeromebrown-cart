import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"

export default ()=>{
    const { cart } =useSelector(state=>state)

    return (
        <div className="nav">
            <div className="d-flex">
                <Link to="/">
                    <img height={120} width={170} src="/img/logo.png"/>
                </Link>
            </div>
            <Link className="cart" to="/cart">
                <span className="cart-container">
                    <AiOutlineShoppingCart size={35}/>
                    <h6>{cart.products.length}</h6>
                </span>
            </Link>
        </div>
    )
}