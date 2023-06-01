import React from 'react'

const Volume = ({volumeData}) => {
  return (
    <>
    <div className='card'>
                           <p className='volumecsl'>Volume</p>
                            <div className="volume-content p-2">
                              <h4>{volumeData}</h4>
                              <p>last trade qty</p>
                              <p>500</p>
 
                               <div className="trade-cost d-flex ">
                               <p className='trade-right'>lower prize</p>
                                 <p className='trade-left'>980.90</p>
                               </div>
                               <div className="trade-cost d-flex ">
                               <p className='trade-right'>uper prize</p>
                                 <p className='trade-left'>930.90</p>
                               </div>
                               
                            </div>
                         </div>
    </>
  )
}

export default Volume