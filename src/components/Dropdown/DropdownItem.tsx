import { Checkmark, OpenCheckmark } from "./SvgIcons"


interface Props{
    name:string;
    value:string;
    selected:boolean;
    group:string;
    id:number;
    handleChange: (id:number, group:string) => void
}
export const DropdownItem: React.FC <Props> = ({handleChange, name, value, selected, id, group}) => {

    return(   
    <li value={value} className={
    !selected?'dropdown-item'
    :'dropdown-item dropdown-item-selected'} 
    onClick={()=>{handleChange(id, group)}}>
        {selected?<Checkmark/>:<OpenCheckmark/>}
            <span>
                {name}
            </span>
    </li>
    )
}