import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"




function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  //const onSubmit = async (data) => {
    // await delay(2)
    //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
    //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)

}

return (
  <>
    {isSubmitting && <div>Loading...</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username'{...register("username")} type="text" name="username" id="" />
        <br />
        <input placeholder='password'{...register("password")} type="text" name="password" id="" />
        <input disabled={isSubmitting} type="submit" value="submit" />
      </form>
    </div>
  </>
)
}

export default App
