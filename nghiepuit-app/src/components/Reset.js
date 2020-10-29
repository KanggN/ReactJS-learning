import react from 'react';

class Reset extends react.Component {
    onResetDefault=()=>{
        this.props.onSettingDefault('aa')
    }
    render(){
        return(
                <button type="button" 
                        className="btn btn-primary mt-3"
                        onClick={this.onResetDefault}>Reset</button>
        )
    }
}

export default Reset