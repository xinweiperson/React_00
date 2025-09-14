import { Fragment, useState } from "react";

function App() {


  const [data, setData] = useState([{id: 1, name: 'jacy'}, {id: 2, name: 'Lucy'}])

  const listData = data.map(item => (
    <li key={item.id}>{item.name}</li>
  ))

  function handlerClick() {
    setData(data.filter(item => item.id !== 2))
  }

  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handlerClick}>button</button>
    </>

    // <>
    //   <div title={data.title}>{data.content}</div>
    //   <button onClick={handlerClick}>button</button>
    // </>
    // <ul>{listContent}</ul>
    // <>
    // <Fragment>
    //   <div>{content}</div>
    //   <button onClick={handlerClick}>button</button>
    // </Fragment>

    // </>
  )
}

export default App;
