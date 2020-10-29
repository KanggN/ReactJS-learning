import react from 'react';

class SizeSetting extends react.Component {
    render(){
        return(
                <div className="card border-warning">
                    <div className="card-header bg-warning">
                        Size: 15px
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-success mx-2">Giảm</button>
                        <button type="button" className="btn btn-success mx-2">Tăng</button>
                    </div>
                </div>
        )
    }
}

export default SizeSetting