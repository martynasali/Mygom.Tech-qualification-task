type data = {
    name: string;
    id: number;
    value: string;
    selected: boolean;
    group: string;
}[]

type groupOptions = {
    name: string;
    max: number;
}[] 


export const dropdownValidation = (data:data, groupOptions:groupOptions) =>{

    function findDifferentGroups(){
        let groupSet:any = new Set()
        for (let group of data){
            groupSet.add(group.group)
        }
        groupSet = Array.from(groupSet);
        return groupSet
    }
    function countSelectedOfeachGroup(groups:string[]){
        let groupAndCount:any = {}
        for(let group of groups){
            groupAndCount[group] = 0
            data.map(d=>{
                if(group === d.group){
                    d.selected&&groupAndCount[group]++
                }
            })
        }
        return groupAndCount
    }
    function leftSelections(groupAndCount:any, groupOptions:groupOptions, ){
        let returnObject:any= {};
        for(let group of  groupOptions){
            returnObject[group.name] = [groupAndCount[group.name], group.max]
        }
        return returnObject
    }

    let groups = findDifferentGroups()
    let groupAndCount = countSelectedOfeachGroup(groups)
    return leftSelections(groupAndCount, groupOptions);
}
