import React from 'react'
import LineChartOne from '../Charts/LineChartOne'
const ListOne = ({company,points,cost}) => {
  return (
    <>
     <div className="card mt-3 " >
                <div className="row">
                    <div className="col-6">
                        <div className='sm-line-chart'>
                        <LineChartOne company={company}/>
                        </div>
                    </div>
                    <div className="col-2">
                      </div>
                    <div className="col-4">
                    <div className='sm-line-details'>
                           <p className='sm-details'>{points}</p>
                           <p className="sm-cost">{cost}</p>
                        </div>

                      </div>
                </div>
            </div>
    </>
  )
}

export default ListOne