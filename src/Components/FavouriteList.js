import React , {useState, useEffect} from 'react';
import Dexie from "dexie";
import {connect} from 'react-redux';
import styled, { keyframes } from 'styled-components';
import {NavLink} from "react-router-dom";
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
@media(max-width:310px){
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
min-width:150px;
@media(max-width:370px){
  margin-right:2px;
margin-left:2px;
}
@media(max-width:330px){
  min-width:140px;
}
`;
const CarMainElement = styled.li`
text-align:center;
padding-top:4px;
padding-bottom:4px;
`;
const Buttons = styled.div`
width:100%;
display: flex;
flex-direction:column;
justify-content: center;
`;
const SeeOffer = styled.button`
cursor: pointer;
`;
const CarMain = styled.ul`
list-style:none;
background-color:#f5f5f5;
${CarMainElement}:nth-of-type(odd)  {
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
  &:hover {
    background-color: black;

  } 
    text-decoration:none;
    color:white;
`;
const CarImage = styled.img`
  height:auto;
  max-width:100%;
`;
const FavouriteList = ({ id,cars }) => {
    
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
      let canUpdate=true;
      posts.forEach((idPost)=>{

if(idPost.id===window.location.href.slice(21).replace(/\D/g, "")){
  canUpdate=false;


}

}
    )

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
    useEffect(() => {

        //get all posts from the database
        const getPosts = async() => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
            console.log(allPosts);
        }
        getPosts();
  
    }, [])


    let postData;
  
  
    if(posts.length > 0) {
      
        postData = <Cars>
                    {
                        posts.map(post => {
                         
                             return <Car key={post.id}>
                                      <CarHeader><CarHeaderMaker>{cars[post.id].brand}</CarHeaderMaker><CarHeaderModel>&nbsp;{cars[post.id].model}</CarHeaderModel></CarHeader>
                                      <CarImage src={cars[post.id].image1}></CarImage>
                                      <CarMain>
                                        <CarMainElement>{cars[post.id].price} PLN</CarMainElement>
                                        <CarMainElement>{cars[post.id].power} KM</CarMainElement>
                                        <CarMainElement>{cars[post.id].torque} Nm</CarMainElement>
                                        <CarMainElement>{cars[post.id].displacement} cm3</CarMainElement>
                                        <CarMainElement>{cars[post.id].color}</CarMainElement>
                                        <CarMainElement>{cars[post.id].gearBox}</CarMainElement>
                                        <CarMainElement>{cars[post.id].price} PLN</CarMainElement>
                                        <CarMainElement>{cars[post.id].fuel}</CarMainElement>
                                      </CarMain>
                                      <Buttons>
                                      <StyledLink to={{ pathname: '/Offer/Vehicle-Features/'+post.id}}> See Offer</StyledLink>
                                        
                                        <CarDetailOrange onClick={() => deletePost(post.id)}>Remove</CarDetailOrange>
                                      </Buttons>
                                        </Car>       
                        })
                    }
                   </Cars>
    }else{
        postData = <div className="message">
                     <p>There are no posts to show</p>
                   </div>
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
      id:state.id,
      cars:state.cars

    };
  } 
export default connect(mapStateToProps)(FavouriteList);