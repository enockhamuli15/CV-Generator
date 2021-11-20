import React from "react";
import {FaCopyright, FaRegSmile} from 'react-icons/fa'

class Footer extends React.Component{

    render(){
        return(
            <section id='footer'>
                <div className="container text-center">
                    
                    <p><FaCopyright /> 2021 <a href="mailto:enockhamuli@gmail.com">Enock Hamuli</a> | All rights reserved. <FaRegSmile /></p>
                </div>
            </section>
        )
    }
}
export default Footer