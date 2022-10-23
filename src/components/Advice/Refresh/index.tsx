import style from './Refresh.module.css'
import { BiRefresh } from 'react-icons/bi';

export function Refresh(){
    return (
        <div className={style.refresh}>
            <BiRefresh size={32}></BiRefresh>
        </div>
    )
}