import style from './Advice.module.css'

export function Advice(){
    return (
        <div className={style.advice}>
            <h1 className={style['advice-title']}>Advice #117</h1>
            <p className={style['advice-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veniam.</p>
        </div>
    )
}