import React from "react";
import { useState } from "react";
import { Dropdown } from "./components/Dropdown/Dropdown";
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
      // update={update}
    >
        <button className="DropdownButton">
          Dropdown
        </button>
    </Dropdown>
  </>
  )
}

export default App;
