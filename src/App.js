
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos,setToDos]= useState([]);
  const [toDo,setToDo]= useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>PSJ<br></br> TODO List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>â ðHave a great day ð â </h2>
      </div>
      <div className="input">
        <input obj={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="ðï¸ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:  toDo,status:false}])} className="fas fa-plus"></i>
      </div>
       <div className="todos">
      { toDos.map((obj)=>{
       
      
      
     return ( <div className="todo">
          <div className="left">
           
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDo(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
                
              }))
            }} obj={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
               
          <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index= toDos.findIndex(obj=>{return obj.id==e.target.id})
              var ask = window.confirm("Do you want to delete the task?");

              if (index !== -1) {
                toDos.splice(index, 1);
                setToDos([...toDos]);
              }else {
                console.log("Don't delete");
              }
            }}>
</i>
          </div>
        </div>)
        }) }
         <h1>Completed Task</h1>
        {toDos.map((obj)=>{
          if(obj.status){
            
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
