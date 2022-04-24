
type Props = {
    validation:Number[]
    groupName:string
}

export const ValidationInfo:React.FC<Props>  = ({validation, groupName}:Props) =>{
    return(
        <small className="validation--info"> 
            {groupName+' '+validation[0]+'/'+validation[1]}
        </small>
    )
}