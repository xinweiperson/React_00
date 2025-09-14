//prors in react components 
function Article({title, content, active}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>status: {active ? 'displaying' : 'disapear'}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Article title="title1" content="content1" active/>
      <Article title="title2" content="content2"/>
      <Article title="title3" content="content3"/>
    </>
    )
}

export default App;
