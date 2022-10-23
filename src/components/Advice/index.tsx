import { useEffect, useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

import { adviceApi } from '../../api/advice'
import style from './Advice.module.css'

import { Refresh } from './Refresh'

export function Advice(){
    interface IAdvice {
        advice:'',
        id:number
    }
    const[advice, setAdvice] = useState<IAdvice|null>(null)
    const[refresh, setRefresh] = useState(false)
    async function loadAdvice() {
        const newAdvice:IAdvice = await adviceApi.getAdvice()
        setAdvice(newAdvice)
    }
    useEffect(()=>{
        loadAdvice()
    },[])

    return (
        <>
            <div className={style.advice}>
                <h1 className={style['advice-title']}>Advice #{advice?.id}</h1>
                <p className={style['advice-text']}>"{advice?.advice}"</p>
                <div className={style.division}>
                    <span className={style.line}></span>
                    <span></span>
                    <span></span>
                    <span className={style.line}></span>
                </div>
                <div className={style['refresh-button']}><Refresh refresh={loadAdvice}/></div>
            </div>
            {refresh===true && 
                <ProgressBar now={100} variant='sucess'/>
            }
            
        </>
        
    )
}