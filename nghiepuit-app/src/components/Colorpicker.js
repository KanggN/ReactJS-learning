import react from 'react';

class ColorPicker extends react.Component {
    constructor(){
        super()
        this.state = {
            color : ['red','green','blue','cyan']
        }
    }
    ShowColor(color){
        return {
            backgroundColor: color,
            width: '50px',
            height: '50px',
            margin: '0 5px',
            display: 'inline-block'
        }
    }
    SingleColor(color){
        this.props.ReceiveColor(color)
    }
    
    render(){
        const abc = this.state.color.map((color,index)=>{
            return <span key={index} style={this.ShowColor(color)} 
                    onClick={() =>{this.SingleColor(color)}}
                    className={color === this.props.color ? 'active' : ''}></span>
        })
        return(
                <div className="card border-primary">
                    <div className="card-header bg-primary text-white">
                        Color Picker
                    </div>
                    <div className="card-body">
                        {abc}
                    </div>
                </div>
        )
    }
}

export default ColorPicker

