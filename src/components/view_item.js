import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOneItem, deleteItem, toggleComplete} from "../actions";

class ViewItem extends Component {

    componentDidMount(){
        this.props.getOneItem(this.props.match.params.id)
    }

    handleDeleteItem(id){
        this.props.deleteItem(id).then(() => {
            this.props.history.push('/')
        })
    }

    handleCompleteItem(id){
        this.props.toggleComplete(id);
    }

    render(){
        let dateCreated = (new Date(parseInt(this.props.item.created))).toLocaleString();
        let itemId = this.props.match.params.id;
        let itemComplete = (this.props.item.completed) ? 'Yes' : 'No';

        console.log('viewitemmmmmmm props',this.props);
        return (
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <h1 className="text-center">view item details</h1>
                    <p>ID: {itemId}</p>
                    <h3>Title: {this.props.item.title}</h3>
                    <p>Details: {this.props.item.details}</p>
                    <p>Created: {dateCreated}</p>
                    <p>Completed: {itemComplete}</p>
                    <div className='row justify-content-center'>
                        <button className='btn btn-outline-success' onClick={()=>{this.handleCompleteItem(itemId)}}>Complete</button>
                        <button className='btn btn-outline-danger' onClick={()=>{this.handleDeleteItem(itemId)}}>Delete</button>
                        <Link className='btn btn-outline-primary' to='/'>Go back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.todo.single
    }
}

export default connect(mapStateToProps, {getOneItem, deleteItem, toggleComplete})(ViewItem);