import DropdownMain from './DropdownMain'
import {ReactChildren, ReactChild} from 'react';
 
type Props = {
    menuData: {
        id: number;
        name: string;
        value: string;
        selected: boolean;
        group: string;
    }[];
    groupOptions?: {
        name: string;
        max: number;
    }[]
   multiple?:number|boolean;
   single?:boolean
   update:(info:any) => void;
   onSelect?:() => void;
   onOpen?:() => void;
   onClose?:() => void;
   children: ReactChild | ReactChildren;
}

export const Dropdown:React.FC <Props> = ({menuData, groupOptions, multiple, single, update, onSelect, onOpen, onClose, children}:Props) => {
    if(single === true){
        multiple = 1
    }

    return( 
    <>
        <DropdownMain 
            menuData={menuData}  
            groupOptions={groupOptions}  
            multiple={multiple}
            update={update}
            onSelect={onSelect}
            onOpen={onOpen}
            onClose={onClose}>
                {children}
            </DropdownMain>
    </>
    )
}
