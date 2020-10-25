import React, { Component } from 'react';


class Product extends Component { 
    
    Ohshit = () =>{
      console.log(this.props.name)
    }
    render (){
        return (   
                <div className="col-4 mt-3">
                      <div className="card">
                      <img className="card-img-top" src={this.props.image} alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <button type="button" className="btn btn-primary" onClick={this.Ohshit}>Mua ngay</button>
                      </div>
                    </div> 
                </div>
                
        )
    }
  
}

export default Product;
