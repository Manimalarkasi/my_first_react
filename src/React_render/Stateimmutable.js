import React,{useState} from 'react'


const initState = {
    fName:'mani',
    lName:'malar'
}
function Stateimmutable() {
    const [person, setPerson] = useState(initState)
    const changeName=()=>{
        // person.fName='manimalar'
        // person.lName='kasi'
        // setPerson(person)
        const newPerson ={...person}
        newPerson.fName='manimalar'
        newPerson.lName='kasi'
        setPerson(newPerson)
    }
    console.log('objectuseState is renderde');
  return (
    <div>
      <b>State Immutability - objectuseState</b>
      <button onClick={changeName}>{person.fName} {person.lName}</button>
    </div>
  )
}

export default Stateimmutable


const initarr=['mani','malar']

export function Stateimmutable1() {
  const [persons,setPersons] = useState(initarr)
const handleclick = ()=>{
  // persons.push('manimalarkasi')
  // persons.push('kasi')
  // setPersons(persons)
  const newPersons =[...persons]
        newPersons.push('manimalar')
        newPersons.push('kasi')
        setPersons(newPersons)
}
console.log('ArrayUseState is rendered');
  return (
    <div>
      <b>State Immutability - ArrayUseState</b>
      <button onClick={handleclick}>click</button>
      {persons.map((person)=>
        <div key={person}>{person}</div> )}
    </div>
  )
}


