import React from 'react'

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

import {GrAddCircle, GrClose} from 'react-icons/gr'


class Skills extends React.Component{
  constructor(props) {
		super(props);
		this.state = {
			open: false,
			skill: [
				{name: ''},
				{level: null}
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
		const lge = this.lge.value
		const lev = this.lev.value
		
		this.setState({
			
			skill: [
				...this.state.skill,
				{name: lge}, {level: lev}
			]
		  })
		  this.lge.value = ''
		  this.lev.value = ''
	}
  render(){
	  const {skill} = this.state
    return (
      <>
      <h4>Skills <button onClick={this.openBox} className='btn'><GrAddCircle/></button></h4>
      
	  <>
		  {skill.map((output,id) =>(
			  <div className='row' key={id}>
				  <div className='col-md-4'>
				    {output.name}
						  
				</div>
				{(output.level === null | output.name === '') ? '' :
				output.name ? '':
				  <div className='col-md-4'>
				  <div class="progress" style={{marginTop: '-12%'}}>
					<div class="progress-bar progress-bar-striped" role="progressbar" style={{width: output.level+'%', backgroundColor: '#2A2438'}} aria-valuenow={output.level} aria-valuemin="0" aria-valuemax="100">{output.level}%</div>
				</div>
				  </div>}
				  
			</div>
		  )) }
		  
	  </>

		<Dialog open={this.state.open} onClose={this.closeBox}>
			<DialogTitle>Add skills<button style={{float:'right'}} type='button' className="btn btn-outline-danger btn-sm" onClick={this.closeBox}><GrClose/></button></DialogTitle>
			<DialogContent>
				<DialogContentText>
					Fill this form
				</DialogContentText>
				<form onSubmit={this.handleSubmit}>
					<input type='text' ref={input => this.lge = input} className='form-control' placeholder='Skills' /><br/>
					<input type='number' ref={input => this.lev = input}className='form-control' placeholder='Level in percentage' />
					
						<br/>
						<button type='submit' className="btn btn-outline-primary btn-sm" style={{float:'right'}}>Submit</button>
					
				</form>
			</DialogContent>
			
      </Dialog>
      </>
    )
  }
}

export default Skills