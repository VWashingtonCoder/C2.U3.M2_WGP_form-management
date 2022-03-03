import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = {
  petName: "",
  petType: ""
}

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pets, setPets] = useState(petsList);

  const change = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newPet = {
      petName: formValues.petName,
      petType: formValues.petType
    }
    setPets(pets.concat(newPet));
    setFormValues(initialFormValues);

    // axios.post("https://www.caseyharding.com", newPet)
    //   .then(res => {
    //     setPets(pets.concat(newPet));
    //     setFormValues(initialFormValues);
    //   })
  }

  return (
    <div className="container">
      <h1>Simple Form App</h1>
      { pets.map((pet, index) => {
        return <p key={index}>{pet.petName} is a {pet.petType}</p>
      })}
      <form onSubmit={submit}>
        <input
          name="petName"
          type="text"
          value={formValues.petName}
          onChange={change}
          placeholder="Pet Name"
        />
        <input
          name="petType"
          type="text"
          value={formValues.petType}
          onChange={change}
          placeholder="Pet Type"
        />
        <input type="submit" value="Create A Pet" />
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
