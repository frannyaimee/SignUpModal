const baseUrl = "http://localhost:3000/";

export const postInfo = (
  firstname,
  lastname,
  telnum,
  email,
) => dispatch => {
  const newCustomer = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
  };
  return fetch(baseUrl + "customer", {
    method: "POST",
    body: JSON.stringify(newCustomer),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => response.json())
    .then(response =>
      alert("Thank you for your interest" + JSON.stringify(response))
    )
    .catch(error => {
      console.log("New customer info error", error.message);
      alert("Your information could not be saved\nError: " + error.message);
    });
};