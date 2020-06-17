import React, {Component} from 'react'
import Axios from 'axios'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: '',
            image: '',
            currentId: null
        }
    }

    updateName(value){
        this.setState({
            name: value
        })
    }
    updatePrice(value){
        this.setState({
            price: value
        })
    }
    updateImage(value){
        this.setState({
            image: value
        })
    }
    cancelValues(){
        this.setState({
            name: '',
            price: '',
            image: ''
        })
    }

    handleChangeAdd(){
        const {name, price, image} = this.state

        Axios
        .post('/api/product', {name, price, image})
        .then((res) => {
            this.setState({
                name: res.data.name,
                price: res.data.price,
                image: res.data.image
            })
        })

        this.componentDidMount()

        this.cancelValues()
    }

    saveChanges(){
        const {id, name, price, image} = this.state

        Axios
        .put('/api/product/:id', {id, name, price, image})
        .then((res) => {
            this.setState({
                name: res.data.name,
                price: res.data.price,
                image: res.data.image
            })
        })
    }

    componentDidUpdate(prevProps){
        let button
        if (prevProps.product !== this.props.product ){
            this.setState({
                name: this.props.name,
                price: this.props.price,
                image: this.props.image
            })
            button = <this.componentDidUpdate onClick={this.saveChanges} />
        } else {
            button = <this.handleChangeAdd onClick={this.addButton} />
        }
        
    }

    render () {
        return (
            <div>
                Form.js
                <input onChange={ (e) => this.updateName(e.target.value)} />
                <input onChange={ (e) => this.updatePrice(e.target.value)} />
                <input onChange={ (e) => this.updateImage(e.target.value)} />
                <button onClick={ () => this.cancelValues()} >Cancel</button>
                {this.button}
            </div>
        )
    }
}

export default Form