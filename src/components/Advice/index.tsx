import { useEffect, useState } from 'react'
import { adviceApi } from '../../api/advice'
import style from './Advice.module.css'

export function Advice(){
    interface IAdvice {
        advice:'',
        id:number
    }
    const[advice, setAdvice] = useState<IAdvice|null>(null)
    const[newAdvice, setNewAdvice] = useState(false)
    async function loadAdvice() {
        const newAdvice:IAdvice = await adviceApi.getAdvice()
        setAdvice(newAdvice)
    }
    useEffect(()=>{
        if(advice===null){
            loadAdvice()
        } else {
            setTimeout((loadAdvice),10000)
        }
    },[newAdvice])
    console.log(advice)
    return (
        <div className={style.advice}>
            <h1 className={style['advice-title']}>Advice #{advice?.id}</h1>
            <p className={style['advice-text']}>{advice?.advice}</p>
            <div className={style.division}>
                <span className={style.line}></span>
                <span></span>
                <span></span>
                <span className={style.line}></span>
            </div>
        </div>
    )
}