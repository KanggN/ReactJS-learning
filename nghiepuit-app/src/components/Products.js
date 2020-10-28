import react from 'react';

class Products extends react.Component {
    render(){
        return(
            <div className="col-4">
                <div className="card text-center">
                    <img className="card-img-top" src={this.props.item.image} alt=""/>
                    <div className="card-body">
                    <h4 className="card-title">{this.props.item.name}</h4>
                    <p className="card-text">{this.props.item.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products

