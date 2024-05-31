
const Title =({ label, text, ...rest })=> {
    return (
      <h2 {...rest}>{label} <small>{text}</small></h2>
    )
  }
  

export default Title