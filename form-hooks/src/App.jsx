import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

export default function App() {

 const [email,setEmail] = useState("") 

 function handleSubmit(event)
 {
 event.preventDefault();

 if()
 }

  return <form onSubmit={handleSubmit}>
  <input   type="text" placeholder="email" name="email" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>

  </form>;
}
