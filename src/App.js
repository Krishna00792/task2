import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import 'chart.js/auto';
import ListOne from './Components/ListOne';

import { watchlistone,watchlisttwo,watchlistthree,watchlistfour,watchlistfive,watchlistbtn,defaultDetails, } from './Data/WatchList';
import BoxThree from './Components/BoxThree';

const App = () => {

  const [watchList,setWatchList]=useState(watchlistone);
  const [highlightsBtn,setHighLights]=useState(1);
  const [highlightsWHL,setHighLightsWHL]=useState(1);

  const [watchDetails,setWatchDetails]=useState(defaultDetails);

  const handleClickBtn=(event)=>{
    const dataValue = event.target.getAttribute('data-value');
    setHighLights(dataValue);
    setHighLightsWHL(1);

    switch(dataValue) {
      case '1':
        setWatchList(watchlistone);
        setWatchDetails(watchlistone[0]);
        break;
      case '2':
        setWatchList(watchlisttwo);
        setWatchDetails(watchlisttwo[0]);
        break;
      case '3':
        setWatchList(watchlistthree);
        setWatchDetails(watchlistthree[0]);
        break;
      case '4':
        setWatchList(watchlistfour);
        setWatchDetails(watchlistfour[0]);
        break;
      case '5':
        setWatchList(watchlistfive);
        setWatchDetails(watchlistfive[0]);
        break;
      // additional cases...
      default:
        // code to execute if expression doesn't match any case
        setWatchList(watchlistone);
        break;
    }
    
  }


  const handleWatchList=(list)=>{
    setWatchDetails(list);
    setHighLightsWHL(list.id);
    // console.log(watchDetails.company)
  }


  


  return(
    <>
      <div className="containers">
        <div className="row">
          <div className="col-lg-1 box">
            <div className="box-1 ">
               <div className='btns'>
                {watchlistbtn.map((btnList,index)=>{
                  return <button key={index} onClick={handleClickBtn} className={` watchlist-btn ${  highlightsBtn == btnList ? 'btncolor-tight' : 'btncolor-light'}`} data-value={btnList} >Watchlist-{btnList}</button>
                })}
               </div>
            </div>
          </div>

          <div className="col-lg-3 box">
          <div className="box-2">
            {/* -------------------------------------- */}
            {watchList.map((list,index)=>{
             return  (
              <div  className={` trade-list ${  highlightsWHL === list.id ? 'wh-shadow' : ''}`} key={`listone${index}`} onClick={() => handleWatchList(list)}>
                <ListOne  company={list.company} points={list.points} cost={list.cost}/>
              </div>  
              )
            })}
          </div>
          </div>
          <div className="col-lg-7 box">
                <BoxThree details={watchDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};


export default App;
