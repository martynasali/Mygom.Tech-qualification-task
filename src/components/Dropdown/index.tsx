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
    groupOptions: {
        name: string;
        max: number;
    }[]
   multiple:number;
   update:(info:any) => void;
   onSelect?:() => void;
   onOpen?:() => void;
   onClose?:() => void;
   children: ReactChild | ReactChildren;
}

export const Dropdown:React.FC <Props> = ({menuData, groupOptions, multiple, update, onSelect, onOpen, onClose, children}:Props) => {
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
