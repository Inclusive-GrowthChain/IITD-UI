
const strongStyle = {
  width: "12rem",
  display: "inline-block"
}

function RepaymentContentTitle({ title, val }) {
  return (
    <p>
      <strong style={strongStyle}>{title}</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {val}
    </p>
  )
}

export default RepaymentContentTitle