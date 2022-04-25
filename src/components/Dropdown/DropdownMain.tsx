import {Button} from "./Button";
import {useState, useEffect, useRef, ReactChildren, ReactChild} from 'react';
import DropdownList from './DropdownList'
import {dropdownValidation} from '../../utils/dropdownValidation'


type UseData = {
    name: string;
    id: number;
    value: string;
    selected: boolean;
    group: string;
}[]

type Props = {
    menuData:{ 
        name: string; 
        id: number; 
        value: string; 
        selected: boolean; 
        group: string; }[];
    groupOptions?: {
        name: string;
        max: number;
    }[]
    multiple?:number|boolean;
    update:(info:any) => void
    onSelect?:()=>void
    onOpen?:() => void;
    onClose?:() => void;
    children: ReactChild | ReactChildren;
 }

 const DropdownMain:React.FC <Props> = ({menuData, groupOptions, multiple, update, onSelect, onOpen, onClose, children}:Props) =>{
    const [data, setData] = useState<UseData>(menuData)
    let validationData = groupOptions&&dropdownValidation(data, groupOptions)
    const [open, setOpen] = useState(false)
    const list = useRef<HTMLDivElement>(null);
    console.log(multiple);
    
    function handleChange(id:number, group:string){
        let count = 0
        if(multiple){
            for(let trues of data){
                trues.selected&&count++
            }
            if(count>=multiple){
                setData(prev=>{
                    return prev.map(p=>(p.id===id?{...p, selected:false}:p))
                })
            }
            else {
                setData(prev=>{
                    return prev.map(p=>(p.id===id?{...p, selected:!p.selected}:p))
                })
            }
        }else{
        onSelect&&onSelect()
        
        if(select(id, group)){
            for(let trues of data){
                trues.selected&&count++
            }
                setData(prev=>{
                    return prev.map(p=>(p.id===id?{...p, selected:!p.selected}:p))
                })
        }
        !select(id, group)&&setData(prev=>{
            return prev.map(p=>(p.id===id?{...p, selected:false}:p))
        })
        }
    }

    const select = (id: number, group:string) =>{
        if(group === 'no-group'){
            return true
        }
        else if(validationData[group][0]===validationData[group][1]){
            return false
        }
        else return true  
    }

    useEffect(()=>{
        update(data)
        validationData = groupOptions&&dropdownValidation(data, groupOptions)
    },[data])

    function HandleClick(e:any){
        if(!e.target.closest(`.${list!.current!.className}`)&&open){
            setOpen(false)
        }
    }

    useEffect(()=>{
           return ()=>(open?onClose&&onClose():onOpen&&onOpen())
    },[open])

    function OpenDropdown(){
        setOpen(prev=>!prev)
    }

    useEffect(() => {
            document.addEventListener("click", HandleClick);
        return () => {
                document.removeEventListener("click", HandleClick);
        };
    });

    return(
        <>
            <Button 
                OpenDropdown={OpenDropdown}
                open={open}>
                   {children}
            </Button>
            
            <div className="dropdown-list-wrapper" ref={list}>
                {open&&
                <DropdownList
                    validationData={validationData}
                    handleChange={handleChange}
                    data={data}
                    onSelect={onSelect}
                    update={update}
                    groupOptions={groupOptions}
                    multiple={multiple}
                />}
            </div>
        </>
        )
    }
export default DropdownMain