import React from 'react'
import  pic from '../pixProfile.jpeg'
import {BsTelephone, BsHouse, BsLinkedin, BsEnvelope,
    BsFillSuitDiamondFill,
} from 'react-icons/bs'
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

import {GrAddCircle, GrClose} from 'react-icons/gr';

class Side extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            photo: pic,
            names : 'Enock Hamuli',
            description: 'Full Stack Developer',
            phone: '+24300000000',
            address: 'Goma, DRC',
            linkedin: 'https://www.linkedin.cn/in/enock-hamuli-156a251a3/',
            email: 'enockhamuli@gmail.com',
            hobbies: [],
            open: false,
            img_box: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleImage = this.handleImage.bind(this)
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
    openImgBox = () =>{
      this.setState({
        img_box: true
      })
    }
    closeImgBox = () =>{
      this.setState({
        img_box: false
      })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            
            
        })
    }
    handleImage(e){
      e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        
        photo: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
    handleSubmit(e){
        e.preventDefault();
       
        const newItem = this.newItem.value
        this.setState({
          hobbies: [...this.state.hobbies, newItem]
        })
        this.newItem.value = ''
    }
    
 

  render(){
    const {hobbies} = this.state

    return (
      <div className='side'>
      
      <div className='image'>
        <img name='photo' src={this.state.photo} alt='my-pic' />
        
        <button onClick={this.openImgBox} className='btn'><GrAddCircle/></button>
        <Dialog open={this.state.img_box} onClose={this.closeImgBox}>
			<DialogTitle>Add image<button style={{float:'right'}} type='button' className="btn btn-outline-danger btn-sm" onClick={this.closeImgBox}><GrClose/></button></DialogTitle>
			<DialogContent>
				<DialogContentText>
					Fill this form
				</DialogContentText>
                
                   
                    <input type='file' className='btn' onChange={this.handleImage}/><br/><br/>
                    
			</DialogContent>
			
      </Dialog>
      </div>

      <input type='text' name='names' className='names text-center' value={this.state.names} onChange={this.handleChange}/>
      <input type='text' name='description' className='description text-center' value={this.state.description} onChange={this.handleChange}/>

      <div className='contacts'>
            <h4>Contacts</h4>

            <div><BsTelephone/><input name='phone' value={this.state.phone} onChange={this.handleChange}/></div>
            <div><BsHouse/> <input name='address' value={this.state.address} onChange={this.handleChange}/></div>
            <div>
                <a style={{textDecoration: 'none'}} href={'mailto:'+this.state.email}> <BsEnvelope/> </a>
                <input name='email' value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div>
                <a style={{textDecoration: 'none'}}  href={this.state.linkedin}><BsLinkedin/></a>
                <input name='linkedin' value={this.state.linkedin} onChange={this.handleChange} />
            </div>
           

      </div>
      <div className='hobbies'>
           
            <h4>Hobbies <button onClick={this.openBox} className='btn'><GrAddCircle/></button></h4>
              
          
            <div >
            <Dialog open={this.state.open} onClose={this.closeBox}>
			<DialogTitle>Add skills<button style={{float:'right'}} type='button' className="btn btn-outline-danger btn-sm" onClick={this.closeBox}><GrClose/></button></DialogTitle>
			<DialogContent>
				<DialogContentText>
					Fill this form
				</DialogContentText>
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input type='text' ref={input => this.newItem = input}/><br/><br/>
                    <button type='submit' className="btn btn-outline-primary btn-sm" style={{float:'right'}}>Submit</button>
                </form>
			</DialogContent>
			
      </Dialog>
              {hobbies.map(output => (
               
               <><span><BsFillSuitDiamondFill/> {output}</span><br/></>
              ))}
  
            </div>
           
             
           
      </div>
      </div>
    )
  }
}

export default Side

