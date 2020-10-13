import React from 'react';

class Searchbar extends React.Component {

    state = {term: ""};


    // // 自定義的function
    onFormSubmit= (event)=> {
        event.preventDefault();   
        
        this.props.onSubmit(this.state.term);
    }


    render(){
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>圖片搜索</label>
                    <input type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />
                </div>
            </form>
        </div>
        )
    }
}


export default Searchbar;