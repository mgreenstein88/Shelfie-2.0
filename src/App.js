import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Axios from 'axios';


class App extends Component {
  constructor(){
    super()

    this.state = {
      inventoryList: [],
      currentItem: {}
    }

    this.componentDidMount=this.componentDidMount.bind(this)
    this.selectedProduct=this.selectedProduct.bind(this)
  }

  componentDidMount(){
    Axios
    .get('/api/inventory')
    .then((res) => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  selectedProduct(){
    this.setState({
      currentItem: 
    })
  }

  render(){
    return (
      <div>
        <Dashboard
          inventoryList={this.state.inventoryList}
          componentDidMount={this.componentDidMount}
          selectedProduct={this.selectedProduct}
        />
        <Form
          currentItem={this.currentItem}
          componentDidMount={this.componentDidMount}
        />
        <Header/>
      </div>
    )
  }
}

export default App;
