import React, {useRef} from 'react'
import Side from './Components/Side'
import About from './Components/About'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Languages from './Components/Languages'
import References from './Components/References'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Header from './Components/Header'
import {FaDownload} from 'react-icons/fa'
//import jsPDF from 'jspdf'
import { Button } from  '@progress/kendo-react-buttons';
import { PDFExport/*, savePDF*/ } from  '@progress/kendo-react-pdf';

import gmail from './Images/gmail.png';
import github from './Images/github.png';
import instagram from './Images/instagram.png';
import linkedin from './Images/linkedin.png';
import twitter from './Images/twitter.png';


function App(){


  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = event => {
    pdfExportComponent.current.save();
  };

  

  
    return (
      <>
      <Header />
      <section id='body'>
       
        <PDFExport  ref={pdfExportComponent}>
            <div className='row pdf-page size-a4' id='content'>
                <div className='col-md-5'> 
                  <Side />
                </div>
                <div className='col-md-7 all'> 
                  <About />
                  <Education />
                  <Experience />
                  <Languages />
                  <Skills />
                  <References />
                  
                </div>
            </div>
          </PDFExport>
        

        <div className='download'>
        <Button primary={true}  className='btn' onClick={handleExportWithComponent}>
        Download <FaDownload/>
          </Button>
            
        </div>

        <div className='footer'>
              <h4 style={{color: '#fff'}} >For any feedback:</h4><br/>
              <div className='row'>
                   
                    <a href='https://www.linkedin.cn/in/enock-hamuli-156a251a3/' >
                        <img src={linkedin} alt='linkedin' />
                    </a>
                    <a href='https://github.com/enockhamuli15' >
                        <img src={github} alt='github' />
                    </a>
                   
                    <a href='https://www.instagram.com/enockhamuli/' >
                        <img src={instagram} alt='instagram' />
                    </a>
                    <a href='mailto:enockhamuli@gmail.com' >
                        <img src={gmail} alt='gmail' />
                    </a>
                    <a href='https://twitter.com/enockhamuli' >
                        <img src={twitter} alt='twitter' />
                    </a>
                </div>
        </div>
      
      </section>
      <Footer />
      </>
    )
  
}

export default App