import React , {useState, useEffect} from 'react';
import Dexie from "dexie";
import {connect} from 'react-redux';
import styled, { keyframes } from 'styled-components';
import {NavLink} from "react-router-dom";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
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
`;
const StyledLink = styled(NavLink).attrs()`
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
  color:white;
  &:hover {
    background-color: black;
    text-decoration:none;
  }
`;

const FavouriteSet = (props) => {
    
    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        posts: "id"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    
    //set the state and property
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [postFile, setFile] = useState("");
    const [posts, setPosts] = useState("");

    const [count, setCount] = useState(0);


    const deletePost = async(id) => {
        console.log(id);
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }


    //submit 
    const getPostInfo = (e) => {
        e.preventDefault();
        if(postTitle !== "" && postContent !== "" && postFile !== ""){
            let post = {
                title: postTitle,
                content: postContent,
                file: postFile
            }
           
    
            db.posts.add(post).then(async() => {
                //retrieve all posts inside the database
                let allPosts = await db.posts.toArray();
                //set the posts
                setPosts(allPosts);
            });
            
        }
        
        
    }


    const addFavourite = () => {
      console.log(props.carId);
      let canUpdate=true;
      if(props.carId===undefined){
        posts.forEach((idPost)=>{
          if (idPost.id===window.location.href.slice(21).replace(/\D/g, "")){
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
          if (idPost.id==props.carId){
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

        //get all posts from the database
        const getPosts = async() => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
            console.log(allPosts);
        }
        getPosts();
  
    }, [])




  


    return (
    <React.Fragment>



<CarDetailOrange onClick={e => addFavourite()}>Add to Favourites</CarDetailOrange>
<StyledLink to="/FavouriteList">  View Favourites</StyledLink>

    </React.Fragment>
  );
}

  function mapStateToProps(state) {
    return { id:state.id };
  } 
export default connect(mapStateToProps)(FavouriteSet);