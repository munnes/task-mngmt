// JavaScript source code

import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import taskReducer from './taskReducer';
import {connect} from 'react-redux';
import addTask from './actions/addTask';
import delTask from './actions/delTask';
import editTask from './actions/editTask';
import updtTask from './actions/updtTask';
import {Form} from 'react-bootstrap';

class MyTask  extends Component {

    handleSubmit=(e)=>{
        e.preventDefault();
        const title= this.refs.title.value;
        const description= this.refs.desc.value;
        const theDate=this.refs.dDate.value;
        let id=new Date();
        let upd=false;
        
        for (let i=0;i<this.props.task.length;i++){    
            if (this.props.task[i].isEdit==true){
                id=  this.props.task[i].id;
                i=this.props.task.length;
                upd=true
                }}
    
            const data ={
                id: id,
                title:title,
                description:description,
                theDate:theDate,
                isEdit: false
            };
            if (upd==true)
            {
                this.props.update(id,data)
                document.getElementById("addUpd").innerHTML="Add"
                
            }
            else{
                this.props.add(data);}
        this.refs.title.value='';
        this.refs.desc.value='';
        this.refs.dDate.value=''; 
        }
        deleteRow=(idx)=>{
            this.props.del(this.props.task[idx].id);
        }

        editRow=(idx)=>{
            document.getElementById("addUpd").innerHTML="Update"        
            this.refs.title.value =this.props.task[idx].title;
            this.refs.desc.value=this.props.task[idx].description;
            this.refs.dDate.value=this.props.task[idx].theDate;        
            this.props.edit(this.props.task[idx].id);
        }
      
        render(){
            let view;
            if (this.props.task.length>0)
            {
                view= <div id="viewTable">
        <table id="myTab" className="table table-bordered table-hover table-responsive ">

            <tr>
                <th id="noCol">Row#</th>
                <th id="titlCol">Title</th>
                <th id="descCol" >Description</th>
                <th id="DDateCol" >Due Date</th>
                <th id="edtCol">Edit</th>
                <th id="delCol">Delete</th>
            </tr>
            <tbody>
      {this.props.task.map((item, idx) => (
   
                <tr id="addr0" key={idx}>
                    <td>{idx+1}</td>
                  
                 <td > {this.props.task[idx].title}</td>
                    <td > {this.props.task[idx].description} </td>         
                    <td>{this.props.task[idx].theDate}</td>
                     <td>
                                <Button onClick={()=>this.editRow(idx)} id="btnEdt" >
                                  <i className="fa fa-pencil-square-o" ></i>  Edit
                                </Button>
                            </td> 
                    <td>
                        <Button onClick={()=>this.deleteRow(idx)} id="btnDel" className="btn-danger">
                         <i className="fa fa-trash"></i>   Delete
                        </Button>
                    </td>
                </tr>
              ))  }
            </tbody>
                            </table>
                        </div>
        }
    else{
    view=<h1 id="empty">No task added</h1>
        }
    return (<div className="container-fluid">
<h1 id="head"> Task management</h1>
<Form onSubmit={this.handleSubmit} id="myForm">
     <br/>
  <Form.Group as={Row} controlId="formHorizontalText">
     
    <Form.Label column sm={2} className="lbl">
      Task
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="text" placeholder="add task" ref="title" required  ref="title" className="inp" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDesc">
    <Form.Label column sm={2} className="lbl">
      Description
    </Form.Label>
    <Col sm={9}>
      <Form.Control as="textarea" rows="3" placeholder="descripe task" required ref="desc" className="inp"/>
    </Col>
  </Form.Group>
   <Form.Group as={Row} controlId="formHorizontalDue">
    <Form.Label column sm={2} className="lbl">
      Due Date
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="date" required ref="dDate"   />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button  id="addUpd"  type="submit">Add</Button>
    </Col>
  </Form.Group>
  </Form>
           {view}
                        </div>);
                        }}

const mapStateToProps = (state) => {
    return {
      task:state
    }
}
const mapDispatchToProps = (dispatch) => 
{ 
    return { 
        add:(inp) => {dispatch(addTask(inp))},
        del:(inp)=>{dispatch(delTask(inp))},
        edit:(inp)=>{dispatch(editTask(inp))},
        update:(id,inp)=>{dispatch(updtTask(id,inp))}
       
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MyTask);


