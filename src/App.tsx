import React from "react";
import { useState } from "react";
import { Dropdown } from "./components/Dropdown/index";
import {menuData, groupOptions} from './menuData'

const App:React.FC  = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>(menuData)

  const update = (info:any) =>{
    setSelectedOptions(info)
  }
  const onSelect = ()=>{
    console.log('onSelect');
  }
  const onOpen = () =>{
    console.log('onOpen');
  }
  const onClose = () =>{
    console.log('onClose');
  }




  return (
  <>
    <Dropdown
      menuData={menuData}
      groupOptions={groupOptions}
      // multiple={6}
      // single
      update={update}
      // onSelect={onSelect}
      // onOpen={onOpen}
      // onClose={onClose}
    >
        <button className="DropdownButton">
          Dropdown
        </button>
    </Dropdown>
    {selectedOptions&&selectedOptions.map((s:any)=><div key={s.id.toString()+'56'} ><p key={s.id.toString()+'34'}>{s.name}</p><h1 key={s.id.toString()+'44'}>{JSON.stringify(s.selected)}</h1></div>)}
  </>
  )
}

export default App;
