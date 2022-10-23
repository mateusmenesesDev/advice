import style from './Refresh.module.css'
import { BiRefresh } from 'react-icons/bi';

type Refresh = {
    refresh: ()=>void
}
export function Refresh({refresh}:any){
    return (
        <div className={style.refresh}>
            <BiRefresh size={32} onClick={refresh}/>
        </div>
    )
}