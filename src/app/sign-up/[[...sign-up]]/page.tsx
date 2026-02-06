import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <>
    <div className='w-full py-12 flex justify-center items-center'>
      <SignUp />
    </div>
    </>
  )
}