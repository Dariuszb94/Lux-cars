import React , {useState, useEffect} from 'react';
import Dexie from "dexie";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const CarDetailOrange = styled.div`
  cursor: pointer;
  background-color:#ec6b0c;
  width:80%;
  padding-left:16px;
  padding-right:16px;
  margin-bottom:16px;
  padding-top:16px;
  padding-bottom:16px;
  text-align:center;
  border-radius:8px;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  &:hover {
    background-color: black;
  } 
  @media (max-width: 360px) {
    padding-left:8px;
    padding-right:8px;
  }
  @media (max-width: 320px) {
    width:84%;
  }
  @media (max-width: 305px) {
    padding-left:4px;
    padding-right:4px;
  }
`;

const StyledLink = styled(NavLink).attrs()`
  background-color:#ec6b0c;
  width:80%;
  padding-left:16px;
  padding-right:16px;
  margin-bottom:16px;
  padding-top:16px;
  padding-bottom:16px;
  text-decoration: none;
  text-align:center;
  border-radius:8px;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  color:white;
  &:hover {
    background-color: black;
    text-decoration:none;
  }
  @media (max-width: 360px) {
    padding-left:8px;
  padding-right:8px;
  }
  @media (max-width: 320px) {
    width:84%;
  }
  @media (max-width: 305px) {
    padding-left:4px;
    padding-right:4px;
  }
`;

const FavouriteSet = (props) => {
    
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

  const addFavourite = () => {
    let canUpdate=true;
    if(props.carId===undefined){
      posts.forEach((idPost)=>{
        if (idPost.id===window.location.href.slice(21).replace(/\D/g, "")){ //checking if car is already in database
          canUpdate=false;
        }
      })
      if(canUpdate===true){
        let post = {
          id:window.location.href.slice(21).replace(/\D/g, ""),
        }
        db.posts.add(post).then(async() => {
          //retrieve all posts inside the database
          let allPosts = await db.posts.toArray();
          //set the posts
          setPosts(allPosts);
        });
      }
    }
    if(props.carId!==undefined){
      posts.forEach((idPost)=>{
        if (idPost.id===props.carId){
          canUpdate=false;
        }
      })
      if(canUpdate===true){
        let post = {
          id:props.carId,
        }
        db.posts.add(post).then(async() => {
          //retrieve all posts inside the database
          let allPosts = await db.posts.toArray();
          //set the posts
          setPosts(allPosts);
        });
      }
    }
  }
  useEffect(() => {
    let unmounted = false
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

  return (
  <React.Fragment>
    <CarDetailOrange onClick={e => addFavourite()}>Add to Favourites</CarDetailOrange>
    <StyledLink to="/FavouriteList">  View Favourites</StyledLink>
  </React.Fragment>
  );
}

export default FavouriteSet;
