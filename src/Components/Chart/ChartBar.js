import React from "react";
import './ChartBar.css';

const ChartBar = props => {

    let barHeight='0%';
    if(props.max > 0){
        barHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
    <div className='chart-bar'>
        <div clasName='chart-bar__inner'>
            <div className="chart-bar__fill" style={{height:barHeight, backgroundColor: 'red'}}></div>
        </div>

                <div clasName='chart-bar__label'>
                    {props.label}
                </div>
            
       
    </div>
)};

export default ChartBar;
