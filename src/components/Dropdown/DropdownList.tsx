import './dropdown--style.scss'
import {DropdownItem} from './DropdownItem'
import Triangle from './SvgIcons'
import React from 'react'
import {ValidationInfo} from './ValidationInfo' 

type Props = {
    data:{ 
        name: string; 
        id: number; 
        value: string; 
        selected: boolean; 
        group: string; }[];
    groupOptions: {
        name: string;
        max: number;
    }[]
    validationData:any
    multiple:number;
    update: (info: any) => void
    onSelect?: () => void
    handleChange: (id: number, group:string) => void
 }

const DropdownList:React.FC <Props> = ({groupOptions, data, update, onSelect, multiple, handleChange, validationData}:Props) =>{
    
    let PrevousGroup:string = '';
    let items = data.map((d, index)=>{
        
    if (d.group === 'no-group' &&  d.group !== PrevousGroup){
        PrevousGroup = d.group
        return (
            <React.Fragment key={d.id+'zxop'}>
                <div className='dropdown-divider'></div>
                <DropdownItem
                    key={d.id} 
                    name={d.name} 
                    value={d.value} 
                    group={d.group} 
                    selected={d.selected}
                    handleChange={handleChange}
                    id={d.id}
                />
            </React.Fragment>
        )
    } else if(index===0 || d.group !== PrevousGroup){
        PrevousGroup = d.group
        return(
            <React.Fragment key={d.id+'hjk'}>
                <div className='dropdown-divider'>
                    <ValidationInfo
                        groupName={d.group}
                        validation={validationData[d.group]} 
                    />
                </div>
                <DropdownItem
                    key={d.id} 
                    name={d.name} 
                    value={d.value} 
                    group={d.group} 
                    selected={d.selected}
                    handleChange={handleChange}
                    id={d.id}
                />
            </React.Fragment>
            )
        }else{
            return (
            <DropdownItem
                key={d.id} 
                name={d.name} 
                value={d.value} 
                group={d.group} 
                selected={d.selected}
                handleChange={handleChange}
                id={d.id}
            />)
        }
   })
    
    return(
        <div className='dropdown-menu'>
           <Triangle/>
           {items}
        </div>
    )
}
export default DropdownList