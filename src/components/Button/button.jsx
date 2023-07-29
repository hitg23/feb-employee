const Button = ({handleChange})=>{
    return <input type= 'button' value='change value' onClick = {()=>{handleChange()}}/>
}
export default Button