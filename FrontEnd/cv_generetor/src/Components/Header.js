import React from "react";
import {BsBoxArrowDown} from 'react-icons/bs'

class Header extends React.Component{

    render(){
        return(
            <section id='header'>
                 <h3 className='title text-center'>Generate Curriculum Vitae</h3>
                <h4 className='title text-center'>No login needed <BsBoxArrowDown /> Click on each field to edit and download at the bottom</h4>
        
            </section>
        )
    }
}
export default Header