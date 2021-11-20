import React from 'react'

class Experience extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			value: `● Full Stack Developer – 08/2019 to now
            Freelancing
            - Customer to customer e-commerce implementation
            - Social network implementation
            - Live chat project`,
			rows: 5,
			minRows: 5,
			maxRows: 15,
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
      <h4>Experience</h4>
      <textarea className='form-control' value={this.state.value}  
      rows={this.state.rows}
      onChange={this.handleChange}
      />
      </>
    )
  }
}

export default Experience