import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import style from './Timer.css';

const SetIntervalDemo = () => {
    const [realTime, setRealTime] = useState(false);
    const [counter, setCounter] = useState(0);
        
    const countRef = useRef(counter);
    countRef.current = counter;

    const manageRealTime = () => {
        setRealTime(!realTime);
    }

    const reset = () => {
        setCounter(0);
    }

    useEffect(() => {
        let interval;
        if (realTime) {
            interval = setInterval(() => {
                let currCount = countRef.current;
                setCounter(currCount => currCount + 1);
                console.log('In setInterval', currCount, counter);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [realTime]);

    return(
        <div className={style.demo}>
            <h3>Realtime Counter</h3>
            <hr />
            <div className={style.btnGrpSpacing}>
                <Button
                    className={style.btnSpacing} 
                    variant={realTime? 'danger' : 'success'} 
                    onClick={() => manageRealTime()}>
                        {realTime ? 'Stop Real-Time': 'Start Real-Time'}
                </Button>
                <Button 
                    className={style.btnSpacing} 
                    variant= 'info'
                    onClick={() => reset()}>
                        Reset Counter
                </Button>
            </div>
            <div className={style.radial}>
                <span>{counter}</span>
            </div>
        </div>    
    )
}

const SetTimeoutDemo = () => {
    const [scheduleMessage, setScheduleMessage] = useState('Scheduled in 2s...');
    const [counter, setCounter] = useState(0);
    
    const countRef = useRef(counter);
    countRef.current = counter;

    const reset = () => {
        setCounter(0);
        
    }

    useEffect(() => {
        setScheduleMessage(`Executed. Counter value: ${counter}`);
    },[counter]);

    useEffect(() => {
        const timerId = schedule();
        return () => clearTimeout(timerId);
    }, []);

    const schedule = () => {
        setScheduleMessage('Scheduled in 2s...');
        const timerId = setTimeout(() => {
            let currCount = countRef.current;
            setCounter(currCount => currCount + 1);
            console.log(counter);
        }, 2000);

        return timerId;
    }

    return(
        <div className={style.demo}>
            <h3>Task Scheduler</h3>
            <hr />
            <div className={style.btnGrpSpacing}>
                <Button
                    className={style.btnSpacing} 
                    variant='success'
                    onClick={() => schedule()}>
                        Schedule Again
                </Button>
                <Button
                    className={style.btnSpacing} 
                    variant='info'
                    onClick={() => reset()}>
                        Reset Counter
                </Button>
            </div>
            <div className={style.output}>
                <span>{scheduleMessage}</span> {'  '}
            </div>
        </div>    
    )
}

export function Timer () {
    return(
        <>
            <hr/>
            <div className={style.container}>
                <SetIntervalDemo />
                <hr />
                <SetTimeoutDemo />
            </div>
            <hr />
        </>
    )
}

export default Timer;