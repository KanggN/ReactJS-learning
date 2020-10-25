import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  them = () => {
    console.log(this.refs)
  }

  render () {
    var SanPhams =[ {
      id : 1,
      name : 'Iphone 6s',
      image: 'https://fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png',
      status: true
    },
    {
      id : 2,
      name: 'Samsung galaxy 10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlVoCou11mnMql0fEEoBaPUxB7YlYmKsAKm9pLmD_RzrOFRod8mxv6USMZ_miVB-nRvGhKwsz6&usqp=CAc',
      status: true
    },
    {
      id: 3,
      name: 'Xiaomi12',
      image: 'https://cdn.tgdd.vn/Products/Images/42/217308/xiaomi-redmi-9-114620-094644-400x400.jpg',
      status: true
    },
    {
      id: 4,
      name: 'Nokia',
      image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/789274353.jpeg',
      status: true
    },
  ];
    let Holyshit = SanPhams.map((Sanpham,index)=>{
            return <Product
                    key={Sanpham.id}
                    name={Sanpham.name}
                    image={Sanpham.image}/>
    })  



    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row mt-3">
                  {Holyshit}
          </div>
        </div> 
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="form-group">
              <label for=""></label>
              <input type="text" name="dienthoai" ref="gido" id="" className="form-control" placeholder=""/>
              <button type="button" className="btn btn-primary mt-3" onClick={this.Them}>Lưu</button>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;


