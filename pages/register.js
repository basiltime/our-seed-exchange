import Head from 'next/head'

export default function Register() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      first: event.target.first.value,
      last: event.target.last.value,
      zone: event.target.zone.value,
      pw: event.target.pw.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/register'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
    
  }
  return (
    <>
    <Head>
      <title>Create an Account</title>
    </Head>
    <div className="container">
      <div className="w-full md:w-9/12 mx-auto mt-5 bg-neutral-50 p-10 md:p-20 rounded">
        <h1 className="text-2xl mb-5">Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="first" className="w-full">First Name</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="text" id="first" name="first" required />
          </div>
          <div className="mb-5">
            <label htmlFor="last" className="w-full">Last Name</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="text" id="last" name="last" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="w-full">Email</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="email" id="email" name="email" required />
          </div>
          <div className="mb-5">
            <label htmlFor="zone" className="w-full">Growing Zone</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="text" id="zone" name="zone" required />
          </div>
          <div className="mb-5">
            <label htmlFor="pw" className="w-full">Password</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="text" id="pw" name="pw" required />
          </div>
          <div className="mb-5">
            <label htmlFor="pw2" className="w-full">Confirm Password</label>
            <input className="form-input rounded w-full border-slate-300 focus:border-lime-600 focus:ring-0" type="text" id="pw2" name="pw2" required />
          </div>
          <button className="rounded bg-lime-600 text-white py-2 px-4 my-2" type="submit">Submit</button>
        </form>
      </div>
    </div>

    </>
  )
}