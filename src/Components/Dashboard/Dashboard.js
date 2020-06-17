import React, {Component} from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {

        }

        this.selectedProduct=this.selectedProduct.bind(this)
    }

    handleDelete(){
        const {id} = this.state

        Axios
        .delete('/api/product/:id', {id})
        .then((res) => {
            this.setState({
                inventoryList: res.data
            })
        })

        this.componentDidMount()
    }
    render(props){
        
    const rosterInventory = props.inventoryList.map((element) => (
        <Product
            key={element.id}
            name={element.name}
            price={element.price}
            image={element.image}
            data={element}
                />
    ))

    return (
        <div>
            <Product/>
            Dashboard.js
            {rosterInventory}
            selectedProduct={this.selectedProduct}
            
        </div>
        )
    }
}

export default Dashboard