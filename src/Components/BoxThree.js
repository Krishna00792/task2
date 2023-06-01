import React from 'react'
import WHOneLBChart from '../Charts/WHOneLBChart'
import Volume from '../Components/Volume';
import PrizeIndicator from '../Components/PrizeIndicator';
import TradeBtn from '../Components/TradeBtn';
import BuySellChart from '../Charts/BuySellChart';
const BoxThree = ({details}) => {
  return (
    <>
     <div className="box-3">
             <div className="bar-chart">
                <h3>{details.company}</h3>
                <p>{details.company}|NSE</p>
                <div style={{height:"250px"}}>
                      <WHOneLBChart barChart={details.barChart} lineChart={details.lineChart}/>
                </div>
             </div>
              {/* ------------------------------------------------------------------- */}
             <div className='hyd-charts mt-3' >
                  <div className="row">
                    <div className="col-lg-6 mt-2">
                          <div className="card">
                          <div style={{height:"270px"}}>
                                  <BuySellChart buy={details.buy} sell={details.sell}/>
                          </div>        
                          </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                         <Volume volumeData={details.volume}/>
                    </div>
                  </div>
             </div>
              {/* ------------------------------------------------------------------- */}
               <div className="row mt-3">
                  <div className="col-lg-6 mt-2">
                        <PrizeIndicator/>
                  </div>
                  <div className="col-lg-6 mt-2">
                        <TradeBtn/>
                  </div>
               </div>
              {/* ----------------------------------------------------------------------- */}
          </div>
    </>
  )
}

export default BoxThree