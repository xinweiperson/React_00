import image from './logo192.png'
//flexible to fill properties
function App() {

  // const imgStyleObj = {
  //         width: 200,
  //         height: 200,
  //         backgroundColor: 'grey'
  //       }

  // return (
  //   <div>
  //     <img
  //     src={image}
  //     alt="aa" 
  //     className="small"
  //     style={
  //       {
  //         imgStyleObj
  //       }
  //     }
  //     />
  //   </div>
  // )

    const imgData = {
      className: "small",
      stype: {
         width: 200,
          height: 200,
          backgroundColor: 'grey'
      }
  }

  return (
    <div>
      <img
        src={image}
        alt="hey"
        {...imgData}// react grammer not es6.  {} is react mark, react do something when loading this || one point of interview
        //https://www.bilibili.com/video/BV1xM41197cZ?spm_id_from=333.788.videopod.sections&vd_source=0639e655c5231e8d5460752b266e84f2
      />
    </div>
  )
}

export default App;
