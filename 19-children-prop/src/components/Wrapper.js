function Wrapper(props) {
  const styles = {
    backgroundColor: props.color,
    width: '17rem',
    height: '7rem',
    textAlign: 'center',
    margin: '2.2rem auto',
    padding: '2rem',
  }
  return <div style={styles}>{props.children}</div>
}
export default Wrapper
