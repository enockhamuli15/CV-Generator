import React from 'react'

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

import {GrAddCircle, GrClose} from 'react-icons/gr'


class References extends React.Component{
  constructor(props) {
		super(props);
		this.state = {
			open: false,
			skill: [
				{name: ''},
				{title: ''},
				{email: ''},
				{number: ''},
			]
		};
	}
	


	openBox = () =>{
		this.setState({
			open: true
		})
	}
	closeBox = () =>{
		this.setState({
			open: false
		})
	}
	handleChange = (e) =>{
		this.setState({
			skill : [
				{[e.target.name] : e.target.value}
			]
			
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.name.value
		const title = this.title.value
		const mail = this.mail.value
		const number = this.number.value
		
		this.setState({
			
			skill: [
				...this.state.skill,
				{name: name}, {title: title},
				{email: mail}, {number: number}
			]
		  })
		  this.name.value = ''
		  this.title.value = ''
		  this.mail.value = ''
		  this.number.value = ''
	}
  render(){
	  const {skill} = this.state
    return (
      <div>
      <h4>References <button onClick={this.openBox} className='btn'><GrAddCircle/></button></h4>
      
	  <div className='row'>
	  	
		  {skill.map((output,id) =>(
			  
			  <div className='col-md-6' key={id}>
					{(output.name === '' | output.title === '' | output.number === '' | output.email === '')? '' :
					
					
					(output.name) ? 
					
					<div ><strong>{output.name}</strong>  </div>
					
					: (output.title) ? 
					<div>{output.title}</div>
					: (output.email) ? 
					<div>{output.email}</div>
					: (output.number) ? 
					<><div>{output.number}</div><br/></>
					:
					''
					
					
					}
			</div>
			
			
		  ))}
		  
	  </div>
	  <br/>

		<Dialog open={this.state.open} onClose={this.closeBox}>
			<DialogTitle>Add a person of reference<button style={{float:'right'}} type='button' className="btn btn-outline-danger btn-sm" onClick={this.closeBox}><GrClose/></button></DialogTitle>
			<DialogContent>
				<DialogContentText>
					Fill this form
				</DialogContentText>
				<form onSubmit={this.handleSubmit}>
					<input type='text' ref={input => this.name = input} className='form-control' placeholder='Names' /><br/>
					<input type='text' ref={input => this.title = input} className='form-control' placeholder='Title and Company' /><br/>
					<input type='email' ref={input => this.mail = input} className='form-control' placeholder='E-mail' /><br/>
					<input type='text' ref={input => this.number = input}className='form-control' placeholder='Phone number' />
					
						<br/>
						<button type='submit' className="btn btn-outline-primary btn-sm" style={{float:'right'}}>Submit</button>
					
				</form>
			</DialogContent>
			
      </Dialog>
      </div>
    )
  }
}

export default References