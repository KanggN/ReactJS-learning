import React from 'react';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            keyword : ''
        }
    }
    onChange = (e) => {
        var value = e.target.value
        var name = e.target.name
        this.setState({
            [name] : value
        })
    }
    onHandleClick = () => {
        this.props.onSearch(this.state.keyword)
    }
    render(){
        var {keyword} = this.state
        return(
            <div className="col-6">
                    <div className="input-group mb-3">
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Tìm từ khóa ..."
                            name="keyword" 
                            value={keyword}
                            onChange={this.onChange}/>
                    <div className="input-group-append">
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={this.onHandleClick}>Tìm</button>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Search