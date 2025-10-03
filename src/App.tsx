import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client'

function kwtop(kw) {
  return kw * 1.34102;
}

function Car(props) {
  return (
    <h2>I am a Car {props.brand}!</h2>
  );
}
class Cars extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h4>Who lives in my Garage?</h4>
      <Cars />
      </div>
    );
  }
}

function App() {
  const x = "myclass";
  const hp = 2000+10;
  const myobj = {name: "Ford", model: "Mustang", year: 1969};
  const mystules = {
        color: "blue", 
        fontSize: "30px", 
        border: "2px solid red",
        backgroundColor: "yellow",
        marrgin: "10px",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        textTransform: "uppercase",
      };
      const xt = 5;
      let y = "Apple";
      if (xt < 10) {
        y = "Orange";
      } else {
        y = "Banana";
      }

      const val = 5;
      const shoot = () => {
        alert("Great Shot!");
      }
      const shooter = (a, b) => {
        alert(b.type);
      }
      const voiture = [
        {id: 1, name: "Ford"},
        {id: 2, name: "BMW"},
        {id: 3, name: "Audi"}
      ];
const bus = ['Volvo', 'BMW', 'Ford', 'Mazda'];
const [name, setName] = useState("James");
const [age, setAge] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  alert(`Your name is ${name} and you are ${age} years old`);
}

const [message, setMessage] = useState("Votre messsage ici!");
const [voitures, setVoitures] = useState("Volvo");
const [inputs; setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}
  return (
    <> 
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor=""> First Name:
        <input type="text" name="firstname" 
        value={inputs.firstname}
        onChange={handleChange}
        />
      </label>
      <label htmlFor="">Last Name:
        <input type="text"
          name='lastname'
          value={inputs.lastname}
          onChange={handleChange} 
        />
      </label>

      Deuxieme formulaire <br />
      <label htmlFor=""> Voiture:
        <select name="" id=""
          value={voitures}
          onChange={(e) => setVoitures(e.target.value)}>
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
      </label> <br />      
      <label htmlFor=""> Enter your name : 
        <input type="text"
          value={age} 
          onChange={(e) => setAge(e.target.value)}
          />
      </label> <br />
      <label htmlFor=""> Enter your name : 
        <input type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               />
      </label> <br />
      <label htmlFor=""> Votre message de suggestion
        <textarea name="" id="" cols="10" rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <p>Current voiture: {voitures}</p>
      <p>Current age: {age}</p>
      <p>Current value: {name}</p>
      <p>Current message: {message}</p>
      <input type="submit" />
    </form>
    <ul>
      {bus.map((buss, index) => <li key={index}>{buss}</li> )}
    </ul>
    <ul>
      {voiture.map((v) => <li key={v.id}>I am a {v.name}!</li> )}
    </ul>
     <button onClick={shoot}>Take the shot!</button>
      <Garage />
     <button onClick={(event) => shooter("Goal!", event)}>Take the shot!</button>
      <Car  brand = "BMW"/>
      <h1 className={x}>{x}Hello World *</h1>
      <p style={mystules}> It has {x} horsepower</p>
      <p className="myclass">{y} -- </p>
      <p className="myclass">{(val) < 41 ? (xt) : "Apple"}</p>
      <h1> Bon jour</h1>
      <p> It has {2000/5} horsepower</p>
      <p> It has {hp} horsepower</p>
      <p> It has {kwtop(2)} horsepower</p>
      <h1>my name is {myobj.name} {myobj.model} and I {myobj.year} Year</h1>
      <p> It has {Math.random()*10} horsepower</p>
    </>
  );
}

export default App;
