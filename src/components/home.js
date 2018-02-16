import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllTodos} from "../actions";

class Home extends Component {

    componentDidMount(){
        this.props.getAllTodos();
    }

    render(){
        const listItems = this.props.todoList.map((item, index)=> {
            return (
                <li className='list-group-item' key={index}>
                    <Link to={`item/${item._id}`}>{item.title}</Link>
                </li>
            );
        });

        return(
            <div>
                <div className='text-center'>
                    <h1>ITSSA TO DO LIST</h1>
                    <p>Now with podracing!</p>
                </div>

                <div className='row justify-content-end my-4'>
                    <Link className='btn btn-outline-danger' to='/add-item'>Add Item</Link>
                </div>

                <ul className='row list-group'>
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todoList: state.todo.all
    }
}

export default connect(mapStateToProps, {getAllTodos})(Home);