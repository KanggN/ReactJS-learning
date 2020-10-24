import React, { Component } from 'react';


class Product extends Component { 
    
      
    render (){
        var SanPhams =[ {
            id = 1,
            name = 'Iphone 6s',
            image = 'https://fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png',
            status = true
          },
          {
            id = 2,
            name = 'Samsung galaxy 10',
            image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlVoCou11mnMql0fEEoBaPUxB7YlYmKsAKm9pLmD_RzrOFRod8mxv6USMZ_miVB-nRvGhKwsz6&usqp=CAc',
            status = true
          },
          {
            id = 3,
            name = 'Xiaomi12',
            image = 'https://cdn.tgdd.vn/Products/Images/42/217308/xiaomi-redmi-9-114620-094644-400x400.jpg',
            status = true
          }]
          let Holyshit = SanPhams.map((Sanpham,index)=>{
                let result = '';
                if(SanPhams.status)
                result = <div class="card">
                                <img class="card-img-top" src={this.props.image} alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">{this.props.name}</h4>
                                    <p class="card-text">{this.props.price}</p>
                                    <a type="button" className="btn btn-primary">Mua ngay</a>
                                </div>
                        </div>
                return result;
          })

         
        return (   
                <div>
                    {Holyshit}
                </div>    
        )
    }
  
}

export default Product;
