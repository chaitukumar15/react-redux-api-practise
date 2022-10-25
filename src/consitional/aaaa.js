import React from 'react';
import  Button from 'react-bootstrap/Button';

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchData: '',
            list : [],
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]  : event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let newList =[...this.state.list];
        newList.push(this.state.searchData);
        this.setState({
       
            list:newList,
        })
        console.log(this.state);
        
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchData" onChange={this.handleChange} />
                  
                    <Button  type='submit' >Submit</Button>
                   </form>
            </div>
        )
       
    }
}

export default TodoList;