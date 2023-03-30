import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

function Login() {
    const { data: session} = useSession();
    console.log(session, 'hitting session');
    

    if (session) {
        return (
            <div className='flex flex-col gap-4'>
                Signed in as { session!.user!.email } <br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div className='flex flex-col gap-4'>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in!</button>
            </div>
        )
    }

  return (
    <div>Login</div>
  )
}

export default Login