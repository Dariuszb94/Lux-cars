import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import { CarDetailOrange, StyledLink, Error } from "./FavouriteSetStyle";

/**
 * Set and delete favourite cars
 * @param {object} props
 */
const FavouriteSet = (props) => {
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
  const [wait, setWait] = useState(false);

  const addFavourite = () => {
    let canUpdate = true;
    if (props.carId === undefined && wait === false) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === window.location.href.slice(21).replace(/\D/g, "")) {
          canUpdate = false;
        }
        if (i === posts.length - 1 && canUpdate === true) {
          setWait(true);
          const post = {
            id: window.location.href.slice(21).replace(/\D/g, ""),
          };
          db.posts.add(post).then(async () => {
            setWait(false);
            // retrieve all posts inside the database
            const allPosts = await db.posts.toArray();
            // set the posts
            setPosts(allPosts);
          });
        }
      }
      if (posts.length === 0 && canUpdate === true) {
        setWait(true);
        const post = {
          id: window.location.href.slice(21).replace(/\D/g, ""),
        };
        db.posts.add(post).then(async () => {
          setWait(false);
          // retrieve all posts inside the database
          const allPosts = await db.posts.toArray();
          // set the posts
          setPosts(allPosts);
        });
      }
    }
    if (props.carId !== undefined && wait === false) {
      posts.forEach((idPost) => {
        if (idPost.id === props.carId) {
          canUpdate = false;
        }
      });
      if (canUpdate === true) {
        setWait(true);
        const post = {
          id: props.carId,
        };
        db.posts.add(post).then(async () => {
          setWait(false);
          // retrieve all posts inside the database
          const allPosts = await db.posts.toArray();
          // set the posts
          setPosts(allPosts);
        });
      }
    }
  };

  useEffect(() => {
    let unmounted = false;
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

  return (
    <>
      <CarDetailOrange onClick={addFavourite}>
        Add to Favourites
      </CarDetailOrange>
      <StyledLink to="/FavouriteList"> View Favourites</StyledLink>
      <Error id="error" />
    </>
  );
};

export default FavouriteSet;
