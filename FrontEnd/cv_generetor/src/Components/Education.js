import React from 'react'


class Education extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			value: `● Bachelor of Science: Computer Science 2018 - 2021
            - Kigali Independent University, Kigali
●  High School: IT & Business studies 2013 - 2017
	    - Saint Joseph Institute, DRC - Goma`,
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
      <h4>Education</h4>
      <textarea className='form-control' value={this.state.value}  
      rows={this.state.rows}
      onChange={this.handleChange}
      />
      </>
    )
  }
}

export default Education