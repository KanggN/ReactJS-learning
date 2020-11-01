import React from 'react';

class Search extends React.Component {
    render(){
        return(
            <div className="col-6">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tìm từ khóa ..." />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Tìm</button>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Search