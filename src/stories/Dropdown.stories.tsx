import { uptime } from "process"
import { ReactChild, ReactFragment, ReactPortal, useState } from "react"
import { Dropdown } from "../components/Dropdown/Dropdown"
export default {
    title:"Dropdown",
    component:Dropdown
}

export const DropdownWithLimitAndGroup = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'}
  ]
  let groupOptions = [{name:'pasirinkti', max:2}]

return(
    <Dropdown
    menuData={menuData}
    groupOptions={groupOptions}
  >
      <button className="DropdownButton">
        Dropdown
      </button>
  </Dropdown>)
}
export const DropdownWithTwoSections = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:5,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:6,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:7,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'}
  ]
  let groupOptions = [
    {name:'pasirinkti', max:2},
    {name:'no-group', max:2},
]


return(
    <Dropdown
    menuData={menuData}
    groupOptions={groupOptions}
  >
      <button className="DropdownButton">
        Dropdown
      </button>
  </Dropdown>)
}

export const DropdownDivChildrenWithData = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:5,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:6,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:7,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'}
  ]
  let groupOptions = [
    {name:'pasirinkti', max:2},
    {name:'no-group', max:2},
  ]
  const [selectedOptions, setSelectedOptions] = useState<any>(menuData)

  const update = (info:any) =>{
    setSelectedOptions(info)
  }

return(
    <Dropdown
    menuData={menuData}
    groupOptions={groupOptions}
    update={update}
  >
      <button className="DropdownButton">
        {selectedOptions.map((s:any)=>(<p>{s.name}:{JSON.stringify(s.selected)} </p>))}
      </button>
  </Dropdown>)
}

export const SingleSelectionOutOfText = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:5,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:6,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:7,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'}
  ]

return(
    <Dropdown
    menuData={menuData}
    single
  >
      <p>
        Paspausk ant teksto
      </p>
  </Dropdown>)
}

export const DropdownWithTwoLimitedSections = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:4,  name:'Klaipėda', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:5,  name:'Marijampolė', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:6,  name:'Šiauliai', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:7,  name:'Alytus', value:'pasirinkimas', selected: false, group:'Miestas'}
  ]
  let groupOptions = [
    {name:'pasirinkti', max:2},
    {name:'Miestas', max:4},
]


return(
    <Dropdown
    menuData={menuData}
    groupOptions={groupOptions}
    // multiple={6}
    // single
  >
      <button className="DropdownButton">
        Dropdown
      </button>
  </Dropdown>)
}


export const DropdownWithoutLimitsWithGroups = () =>{
  
  let menuData = [
    {id:1,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'pasirinkimas'},
    {id:2,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'pasirinkimas'},
    {id:3,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'pasirinkimas'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'pasirinkimas'},
    {id:5,  name:'Klaipėda', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:6,  name:'Marijampolė', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:7,  name:'Šiauliai', value:'pasirinkimas', selected: false, group:'Miestas'},
    {id:8,  name:'Alytus', value:'pasirinkimas', selected: false, group:'Miestas'}
  ]

return(
    <Dropdown
    menuData={menuData}
    multiple={8}
    >
      <button className="DropdownButton">
          Dropdown
      </button>
  </Dropdown>)
}
export const DropdownWithoutLimitsAndGroups = () =>{
  
  let menuData = [
    {id:1,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:2,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:3,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'}
  ]

return(
    <Dropdown
    menuData={menuData}>
      <button className="DropdownButton">
          Dropdown
      </button>
  </Dropdown>)
}

export const DropdownWithOnSelectAlert = () =>{
  
  let menuData = [
    {id:1,  name:'lengvas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:2,  name:'tvirtas', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:3,  name:'pigus', value:'pasirinkimas', selected: false, group:'pasirinkti'},
    {id:4,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:5,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:6,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'},
    {id:7,  name:'pasirinkimas', value:'pasirinkimas', selected: false, group:'no-group'}
  ]
  let groupOptions = [
    {name:'pasirinkti', max:2},
    {name:'no-group', max:2},
]


return(
    <Dropdown
    menuData={menuData}
    groupOptions={groupOptions}
    onSelect={()=>alert('Buvo įvykdytas pasirinkimas')}
  >
      <button className="DropdownButton">
        Dropdown
      </button>
  </Dropdown>)
}


