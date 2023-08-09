function Timer() {
  return (
    <div>
          <span className="countdown font-mono text-2xl text-white">
              <span style={{ "--value": 10 }}>05</span>:
              <span style={{ "--value": 24 }}>01</span>:
              <span style={{ "--value": 55 }}>04</span>
          </span>
    </div>
  )
}
export default Timer