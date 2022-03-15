import React from 'react'
import foto from '../images/Rectangle 36.svg'


const MainCard = () => {
    return (
        <div>
            {/* <row>
                <col>
                     <img  src={foto}  width="100%" alt=''  />
                </col>
                <col>
                <h3>Canon EOS R6 - Cámara sin <br></br> espejo de marco <br>
                    </br> completo + Lente RF24-105mm <br></br> F4 L IS USM </h3>
                    <h5>marca: Canon</h5>
                
                    <h6>precio : 1'222'222   Envio gratis  detalles</h6> 
                    <h6>hasta 18 meses sin intereses de 56.000 <br>
                    </br> ver mensualidades <br>
                    </br>solicita tu tarjeta Amazon recargable <br>
                    </br> y obten $100 pesos de descuento <br></br>
                    en tu primera compra mayor a 500 pesos
                    </h6>
                </col>
                <col>
                <h5>Canon EOS R6 - Cámara s <br>
                    </br> completo + Lente RF24 </h5>
                    <h5>marca: Canon</h5>
                </col>
            </row> */}




            <div style={{display: 'inline-block'}}  >
                <img  src={foto}  width="100%" alt=''  />
            </div>
            <div style={{display: 'inline-block'}}  >
                    <h3>Canon EOS R6 - Cámara sin <br></br> espejo de marco <br>
                    </br> completo + Lente RF24-105mm <br></br> F4 L IS USM </h3>
                    <h5>marca: Canon</h5>
                
                    <h6>precio : 1'222'222   Envio gratis  detalles</h6> 
                    <h6>hasta 18 meses sin intereses de 56.000 <br>
                    </br> ver mensualidades <br>
                    </br>solicita tu tarjeta Amazon recargable <br>
                    </br> y obten $100 pesos de descuento <br></br>
                    en tu primera compra mayor a 500 pesos
                    </h6>
                    
            </div>
            <div  style={{display: 'inline-block'}}   >
                     <h5>Canon EOS R6 - Cámara s <br>
                    </br> completo + Lente RF24 </h5>
                    <h5>marca: Canon</h5>
            </div>
        </div>
    )
}

export default MainCard