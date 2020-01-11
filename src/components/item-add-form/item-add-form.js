import React,{Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component{
    state={
        label:'',
    }
    constructor(){
        super();
        this.onLabelChange=(e)=>{
            this.setState({
                label:e.target.value,
            })
        }
        this.onSubmit=(e)=>{
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label:'',
            })
        }
    }

    render(){
        return(
            <form className="item-add-form d-flex flex-" onSubmit={this.onSubmit}>
                <input type="text" value={this.state.label} className="field-title-add-todo" onChange={this.onLabelChange} placeholder="What you want to done"/>
                <button className="btn btn-outline-secondary">
                    Add Item</button>
            </form>
        )
    }
}