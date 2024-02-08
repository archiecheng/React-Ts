// props + ts

type Props = {
  className:string,
  children: React.ReactNode
}

function Button(props:Props) {
  const { className, children } = props
  return <button className={className}>{children}</button>
}

function App() {
  return <><Button className="test" >click me!</Button></>
}

export default App