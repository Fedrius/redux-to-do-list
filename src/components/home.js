import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllTodos} from "../actions";

class Home extends Component {

    componentDidMount(){
        this.props.getAllTodos();
    }

    render(){
        return(
            <div>
                <div className='text-center'>
                    <h1>ITSSA TO DO LIST</h1>
                    <p>Now with podracing!</p>
                </div>
            </div>
        )
    }
}

export default connect(null, {getAllTodos})(Home);