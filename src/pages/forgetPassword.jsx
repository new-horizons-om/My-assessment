

const ForgetPassword = () => {
  return (
    <div className="space-y-5 w-full lg:w-6/12">
      <div>
        <h2 className="text-2xl font-semibold">Forget password</h2>
      </div>
      <form className="space-y-5 mt-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Provide your account email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border-2 border-gray-500 focus-within:border-orange-400 outline-none p-2 rounded-md focus-within:shadow-md"
          />
        </div>
        
        <button className="w-full p-2 rounded-md bg-orange-400 text-white font-semibold text-lg hover:opacity-90 transition cursor-pointer hover:shadow-md">
          Send email
        </button>
      </form>
    </div>
  )
}

export default ForgetPassword