export const DropDownSelect = props => {
  const {
    error,
    onChange,
    showSearch,
    defaultValue,
    data,
    placeholder,
    value,
    disabled,
    className
  } = props

  return (
    <div>
    <select onChange={onChange} placeholder={placeholder} className={className}>
      {data?.map((item,index)=><option key={index} value={item.value} >{item.label}</option>)}
     </select>
      {<span className='login-error'>{error ? error : ''}</span>}
    </div>
  )
}
