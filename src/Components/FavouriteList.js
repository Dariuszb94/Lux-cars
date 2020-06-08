import React , {useState, useEffect} from 'react';
import Dexie from "dexie";
import {connect} from 'react-redux';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {CARS} from '../Components/Const/carsDefaultData'

const Container = styled.div`
  background-color:black;
  padding:8%;
  padding-top:4%;
  padding-bottom:4%;
  @media(max-width:1000px){
    padding:4%;
  }
  @media(max-width:910px){
    padding:2%;
  }
  @media(max-width:450px){
    padding-left:0;
    padding-right:0;
  }
`;

const Header = styled.h1`
  color:#ec6007;
  font-size:1.6rem;
  font-weight:500;
  margin-bottom:16px;
`;

const CarHeader = styled.div`
  color:white;
  display:flex;
  padding-bottom:8px;
  justify-content:center;
  @media(max-width:330px){
    font-size:0.9rem;
  }
`;

const Car = styled.div`
  width:24%;
  max-width:300px;
  margin-right:4px;
  margin-left:4px;
  margin-bottom:16px;
  min-width:160px;
  @media(max-width:370px){
    margin-right:2px;
    margin-left:2px;
  }
`;

const CarMainElement = styled.li`
  text-align:center;
  padding-top:4px;
  padding-bottom:4px;
`;

const Message = styled.p`
  color:white;
`;

const Buttons = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

const CarMain = styled.ul`
  list-style:none;
  background-color:#f5f5f5;
  ${CarMainElement}:nth-of-type(odd){
      background-color:#ffffff;
  };
`;

const CarHeaderMaker = styled.h2`
  font-weight:400;
  @media(max-width:300px){
    font-size:0.9rem;
  }
`;
const CarHeaderModel = styled.h2`
  font-weight:400;
  @media(max-width:300px){
    font-size:0.9rem;
  }
`;

const Cars = styled.div`
  display:flex;
  flex-direction:row;
  background-color:#3a3a3a;
  padding: 16px;
  flex-wrap: wrap;
  @media(max-width:370px){
    padding: 4px;
  }
  @media(max-width:900px){
    justify-content: center;
  }
`;
const CarDetailOrange = styled.div`
  cursor: pointer;
  background-color:#ec6b0c;
  width:100%;
  padding-top:8px;
  margin-top:8px;
  padding-bottom:8px;
  color:white;
  text-align:center;
  border-radius:8px;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  &:hover {
    background-color: black;
  } 
`;
const StyledLink = styled(NavLink).attrs()`
  cursor: pointer;
  background-color:#ec6b0c;
  width:100%;
  padding-top:8px;
  margin-top:8px;
  padding-bottom:8px;
  text-align:center;
  border-radius:8px;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  text-decoration:none;
  color:white;
  &:hover {
    background-color: black;
  } 
`;
const CarImage = styled.img`
  height:auto;
  max-width:100%;
`;
/**
 * List of favourites cars stored in indexedDB
 * @param {array} CARS list of cars
 * @param {string} id id of car
 */
const FavouriteList = ({ id}) => {
  //set the database 
  const db = new Dexie("CarsIds");
  //create the database store
  db.version(1).stores({
      posts: "id"
  })
  db.open().catch((err) => {
      console.log(err.stack || err)
  })
    
  //set the state and property
  const [posts, setPosts] = useState("");

  const deletePost = async(id) => {
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }
    useEffect(() => {
      let unmounted = false  //set false for later unmounting (prevent data leak)
      //get all posts from the database
      const getPosts = async() => {
        let allPosts = await db.posts.toArray();
        if(!unmounted)
          setPosts(allPosts);
      }
      getPosts();
      return () => {
        unmounted = true
   }
    })

  let postData;

  if(posts.length > 0) {
      postData = 
      <Cars>
        {posts.map(post => {
          return <Car key={post.id}>
                    <CarHeader><CarHeaderMaker>{CARS[post.id].brand}</CarHeaderMaker><CarHeaderModel>&nbsp;{CARS[post.id].model}</CarHeaderModel></CarHeader>
                    <CarImage src={CARS[post.id].image1}></CarImage>
                    <CarMain>
                      <CarMainElement>{CARS[post.id].price} PLN</CarMainElement>
                      <CarMainElement>{CARS[post.id].power} KM</CarMainElement>
                      <CarMainElement>{CARS[post.id].torque} Nm</CarMainElement>
                      <CarMainElement>{CARS[post.id].displacement} cm3</CarMainElement>
                      <CarMainElement>{CARS[post.id].color}</CarMainElement>
                      <CarMainElement>{CARS[post.id].gearBox}</CarMainElement>
                      <CarMainElement>{CARS[post.id].price} PLN</CarMainElement>
                      <CarMainElement>{CARS[post.id].fuel}</CarMainElement>
                    </CarMain>
                    <Buttons>
                    <StyledLink to={{ pathname: '/Offer/Vehicle-Features/'+post.id}}>See Offer</StyledLink>
                      <CarDetailOrange onClick={() => deletePost(post.id)}>Remove</CarDetailOrange>
                    </Buttons>
                  </Car>       
          })}
      </Cars>
  }
  else{
      postData = <Message>There are no cars to compare</Message>
  }

  return (
    <Container>
      <Header>Compare</Header>
      {postData}
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    chosenId:state.chosenId,
  };
} 
export default connect(mapStateToProps)(FavouriteList);