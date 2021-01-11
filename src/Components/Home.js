import React, { useState } from "react"
import { Card, Button, Alert, Jumbotron } from "react-bootstrap"
import { useAuth } from "./SignUp/Context/AuthContext"
import { useHistory } from "react-router-dom"
import Navbar from "./NavBar/Navbar"
import '../Home.scss'

export default function Dashboard() {
  //Def consts.
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  //For logout.
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  //For user status.
  function showUserStatus(){
    if(currentUser=== null){
      return(
        <>
         <div className="w-100 text-center mt-2">
        <strong>You must to logged to continued</strong>
        <p>
        <Button variant="link" onClick={()=> history.push("/login")}>
          Log In
        </Button>
        </p>
        </div>
        </>
      )
    }else{
      return(
        <>
        <div className="w-100 text-center mt-2">
        <h6>Now you can add an employee or a medical disability</h6>
        <p>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </p>
        </div>
        </>
      )
    }
  };
  //Return.
  return (
    <>
    <div>
        <Navbar/>
        <div className='hero'>
      <Card>
        <Card.Body>
          <div className='card-transparent'>
              <h1 className="text-center mb-4">Welcome!</h1>
              <h2 className="text-center mb-4">Hi, there!</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {showUserStatus()}
          </div>
        </Card.Body>
      </Card>
      </div>
      </div>
    </>
  );
}