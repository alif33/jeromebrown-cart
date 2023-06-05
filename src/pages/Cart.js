import { useSelector } from "react-redux"
import Nav from "../components/Nav"
import Card from "../components/Card"

export default ()=>{
    const { cart } = useSelector(state=>state)

    const totalValue = cart.products.reduce((total, product) => {
        return total + product.qty * product.price;
      }, 0);
    return (
        <div>
           <Nav/>
           <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.products.map((product, index)=><Card id={product.id} qty={product.qty} index={index}/>)
                    }
                </tbody>
            </table>

            <div>
                <h3>Total: ${totalValue.toFixed(2)}</h3>
            </div>
        </div>
    )
}