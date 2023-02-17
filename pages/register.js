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
    {/* We pass the event to the handleSubmit() function on submit. */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="zone">Growing Zone</label>
      <input type="text" id="zone" name="zone" required />

      <label htmlFor="pw">Password</label>
      <input type="text" id="pw" name="pw" required />

      <label htmlFor="pw2">Confirm Password</label>
      <input type="text" id="pw2" name="pw2" required />
      
      <button type="submit">Submit</button>
    </form>
    </>
  )
}