import { useMemo,useState } from "react"
export default function FilterdList ({list}){
    const [listFiltered,setListFiltered]=useState(list)
   useMemo(()=>{
      setListFiltered(list.filter(item=>{return item.age > 18}))

},[list])


    return(
        <ul>
        {listFiltered.map((item)=>{
            return(
                <li key={item.id}>{`ID: ${item.id} Nome: ${item.name} Anni: ${item.age}`}</li>
            )
        })}
        </ul>
    )
}