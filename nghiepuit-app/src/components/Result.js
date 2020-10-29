import react from 'react';

class Result extends react.Component {
    setStyle(){
       return{color: this.props.color, borderColor : this.props.color, fontSize : this.props.fontSize} 
    }
    render(){
        return(
                <div>
                    <h3>Color: {this.props.color} - Fontsize : {this.props.fontSize}px</h3>
                    <p style={this.setStyle()} className="NoiDung">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
        )
    }
}

export default Result