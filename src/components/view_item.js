import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOneItem} from "../actions";

class ViewItem extends Component {

    componentDidMount(){
        this.props.getOneItem(this.props.match.params.id)
    }

    render(){
        console.log('viewitem props',this.props)
        return (
            <div>
                <h1 className="text-center">view item details</h1>
                <div>
                    <Link className='btn' to='/'>Go backk</Link>
                </div>
                <p>ID: {this.props.match.params.id}</p>
                <h3>title: {this.props.item.title}</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.todo.single
    }
}

export default connect(mapStateToProps, {getOneItem})(ViewItem);