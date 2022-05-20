import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BsGithub} from 'react-icons/bs';
import {SiVercel, SiHeroku} from 'react-icons/si';

import restrauntImg from './repoImages/dashboard.PNG';
import flashcardImg from './repoImages/flashcardSiteView.PNG';
import recipeImg from './repoImages/recipeSiteView.PNG';
import githubImg from './repoImages/githubRepos.PNG';

const Project = () => {

  return (
    <div className='project'>
      <hr/>
      <h3 className='projects-title'>Projects</h3>
      <hr/>
      <div className='projects'>
        <Card className='project-card'>
          <Card.Img variant="top" src={restrauntImg} />
          <Card.Body>
            <Card.Title>Restaurant Reservation</Card.Title>
            <Card.Text>
              The restaurant reservation system is inteded for the use of a restaurant to track the tables, 
              and to track the reservations and details for any given night.
            </Card.Text>
            <div className='repo-buttons'>
              <Button className='card-link' href='https://github.com/dylan-bruce/restaurant-reservation' target="_blank" rel="noopener noreferrer">Repo <BsGithub/></Button>
              <Button className='card-link' href='https://restres-frontend.herokuapp.com/dashboard' target="_blank" rel="noopener noreferrer">Live Deployment <SiHeroku/></Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='project-card'>
          <Card.Img variant="top" src={flashcardImg} />
          <Card.Body>
            <Card.Title>Flashcard App</Card.Title>
            <Card.Text>
              The restaurant reservation system is inteded for the use of a restaurant to track the tables, 
              and to track the reservations and details for any given night.
            </Card.Text>
            <div className='repo-buttons'>
              <Button className='card-link' href='https://github.com/dylan-bruce/Flashcard-App' target="_blank" rel="noopener noreferrer">Repo <BsGithub/></Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='project-card'>
          <Card.Img variant="top" src={recipeImg} />
          <Card.Body>
            <Card.Title>Delicious Food Recipes</Card.Title>
            <Card.Text>
              The Delicious Food Recipes app is a recipe tracker.  
              You can enter in the name, type of cuisine, a photo, the ingredients, and how to prepare it.  
              You can also delete recipes you no longer need.
            </Card.Text>
            <div className='repo-buttons'>
              <Button className='card-link' href='https://github.com/dylan-bruce/recipe-tracking-app' target="_blank" rel="noopener noreferrer">Repo <BsGithub/></Button>
              <Button className='card-link' href='https://recipe-tracking-app-m4dsc8u83-dylan-bruce.vercel.app/' target="_blank" rel="noopener noreferrer">Live Deployment <SiVercel/></Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='project-card'>
          <Card.Img variant="top" src={githubImg} />
          <Card.Body>
            <Card.Title>All Repos</Card.Title>
            <Card.Text>
              Here you will be able to view all of my github repos.
            </Card.Text>
            <div className='repo-buttons'>
              <Button className='card-link' href='https://github.com/dylan-bruce?tab=repositories' target="_blank" rel="noopener noreferrer">Repos <BsGithub/></Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Project