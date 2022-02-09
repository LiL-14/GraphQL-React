import { useQuery } from "@apollo/client";
import INFO_PERSON from "./query";
import  "./App.css";

function app(){
  const { loading, error, data } = useQuery(INFO_PERSON);

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    <p>an error occured...</p>
  }

  return(
    <section className="parent">
      {data.characters.results.map((person, index) => (
        <div className="card" kay={person.name}>
          <img src={person.image} alt="Avatar" style={{width: "100%"}}/>
          <div className="container">
              <h4><b>{person.name}</b></h4>

              <p><b>GENDER:</b></p> {person.gender}
              <p><b>SPECIES:</b></p> {person.species}
              
          </div>
        </div>
      ))}
    </section>
  )
}

export default App;
