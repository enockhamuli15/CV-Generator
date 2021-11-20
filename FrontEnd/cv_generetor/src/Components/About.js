import React from 'react'

class About extends React.Component{
  constructor(props) {
		super(props);
		this.state = {
			value: `Specializing in web development using Django and React.JS, I am a Full Stack Developer who combines the passion of programming with people’s needs to magnify the perception of the world.
Make codes to change people lives`,
			rows: 5,
			minRows: 3,
			maxRows: 10,
		};
	}
	
	handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
    
  	this.setState({
    	value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
	};

  render(){
    return (
      <>
      <h4>About me</h4>
      
      <textarea className='form-control' value={this.state.value}  
      rows={this.state.rows}
      onChange={this.handleChange}
      />
     
        
   
      
      </>
    )
  }
}

export default About