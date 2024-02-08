// react + ts

// type Props = {
//   className:string
// }

interface Props {
  className:string,
  title?:string

}

function Button(props:Props) {
  const { className } = props
  return <button>click me</button>
}

function App() {
  return <><Button className="test" title="this is a title"></Button></>
}

export default App