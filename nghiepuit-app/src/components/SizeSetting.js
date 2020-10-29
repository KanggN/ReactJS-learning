import react from 'react';

class SizeSetting extends react.Component {
    Giamne(fontSize){
        this.props.ReceiveFontSize(fontSize - 1)
    }
    Tangne(fontSize){
        this.props.ReceiveFontSize(fontSize + 1)
    }
    render(){
        
        return(
                <div className="card border-warning">
                    <div className="card-header bg-warning">
                        Size: {this.props.fontSize}px
                    </div>
                    <div className="card-body">
                        <button type="button" 
                                className="btn btn-success mx-2" 
                                onClick={()=>this.Giamne(this.props.fontSize)}>Giảm</button>
                        <button type="button" 
                                className="btn btn-success mx-2"
                                onClick={()=>this.Tangne(this.props.fontSize)}>Tăng</button>
                    </div>
                </div>
        )
    }
}

export default SizeSetting