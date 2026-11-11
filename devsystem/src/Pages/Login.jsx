
import React from 'react'
import "../Styles/Login.scss"

export default function Login() {
   return (
        <>
        <main className='container login'>
         <section className='login-card'>
         
            <form action="#">
               <div className="form-container">

                  <h1>Login</h1>
               <article className='form-control'>
                  <label htmlFor="email">Email</label>
                  <input type="text" id='email' placeholder='Type your email' />
               </article>

               <article className='form-control'>
                    <label htmlFor="password">Password</label>
                  <input type="password" id='password' placeholder='Type your password' />
               </article>
               </div>
               
               <button type="submit">Submit</button>
            </form>
         </section>
        </main>
   
        </>
   )
}
