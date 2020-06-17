import React, {Component} from 'react'

class Product extends Component {
    render () {
        return (
            <div>
                <span>{this.props.name}</span>
                <span>{this.props.price}</span>
                <span>{this.props.image}</span>
            </div>
        )
    }
}

export default Product