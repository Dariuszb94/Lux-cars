import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import { connect } from "react-redux";
import CARS from "../Const/carsDefaultData";
import {
  Container,
  Header,
  CarHeader,
  Car,
  CarMainElement,
  Message,
  Buttons,
  CarMain,
  CarHeaderMaker,
  CarHeaderModel,
  Cars,
  CarDetailOrange,
  StyledLink,
  CarImage,
  Error,
} from "./FavouriteListStyle";

/**
 * List of favourites cars stored in indexedDB
 * @param {array} CARS list of cars
 * @param {string} id id of car
 */
const FavouriteList = () => {
  // set the database
  const db = new Dexie("CarsIds");
  // create the database store
  db.version(1).stores({
    posts: "id",
  });
  db.open().catch(() => {
    document.getElementById("error").innerHTML = "Problem with database";
  });

  // set the state and property
  const [posts, setPosts] = useState("");

  const deletePost = async (id) => {
    db.posts.delete(id);
    const allPosts = await db.posts.toArray();
    // set the posts
    setPosts(allPosts);
  };
  useEffect(() => {
    let unmounted = false; // set false for later unmounting (prevent data leak)
    // get all posts from the database
    const getPosts = async () => {
      const allPosts = await db.posts.toArray();
      if (!unmounted) {
        setPosts(allPosts);
      }
    };
    getPosts();
    return () => {
      unmounted = true;
    };
  });

  let postData;

  if (posts.length > 0) {
    postData = (
      <Cars>
        {posts.map((post) => (
          <Car key={post.id}>
            <CarHeader>
              <CarHeaderMaker>{CARS[post.id].brand}</CarHeaderMaker>
              <CarHeaderModel>{CARS[post.id].model}</CarHeaderModel>
            </CarHeader>
            <CarImage src={CARS[post.id].image1} />
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
              <StyledLink
                to={{ pathname: `/Offer/Vehicle-Features/${post.id}` }}
              >
                See Offer
              </StyledLink>
              <CarDetailOrange onClick={() => deletePost(post.id)}>
                Remove
              </CarDetailOrange>
            </Buttons>
          </Car>
        ))}
      </Cars>
    );
  } else {
    postData = <Message>There are no cars to compare</Message>;
  }

  return (
    <Container>
      <Header>Compare</Header>
      {postData}
      <Error id="error" />
    </Container>
  );
};
function mapStateToProps(state) {
  return {
    chosenId: state.chosenId,
  };
}
export default connect(mapStateToProps)(FavouriteList);
