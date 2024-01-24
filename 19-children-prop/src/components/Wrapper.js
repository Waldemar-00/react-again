function Wrapper(props) {
  return (
    <div>
      <h1>Have a good day says Wrapper.</h1>
      {props.children}
    </div>
  )
}
export default Wrapper
