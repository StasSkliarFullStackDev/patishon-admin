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
      {data?.map((value,index)=><option key={index} value={value._id} >{value.size}</option>)}
     </select>
      {<span className='login-error'>{error ? error : ''}</span>}
    </div>
  )
}
