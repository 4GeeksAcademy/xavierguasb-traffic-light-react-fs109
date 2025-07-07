import React, { useState } from "react";

const TrafficLight = () => {
	const [ stopColor, setStopColor ] = useState('red');
    const [ careColor, setCareColor ] = useState('yellow');
    const [ passColor, setPassColor ] = useState('green');

    function stop(){
        if (stopColor=='red'){
            setStopColor('green')
            setCareColor('red')
            setPassColor('red')
        }else{
            setStopColor('red')
        }
    }

        function care(){
        if (careColor=='red'){
            setCareColor('green')
            setStopColor('red')
            setPassColor('red')
        }else{
            setCareColor('red')
        }
    }

        function pass(){
        if (passColor=='red'){
            setPassColor('green')
            setCareColor('red')
            setStopColor('red')
        }else{
            setPassColor('red')
        }
    }



	return (
        <>
            <div className="traffic-light">
                <div className="light">
                    <button className="rounded-circle" onClick={stop} style={{backgroundColor: stopColor}}>stop</button>
                </div>
                <div className="light">
                    <button onClick={care} style={{backgroundColor: careColor}}>care</button>
                </div>
                <div className="light">
                    <button onClick={pass} style={{backgroundColor: passColor}}>pass</button>
                </div>
            </div>
        </>
	);
};

export default TrafficLight;