import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";

import a from "../../Images/1.png";
import b from "../../Images/2.png";
import c from "../../Images/3.png";
import d from "../../Images/4.png";

import Skills from "../../Images/skills.png";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import mine from "../../Images/meeh.jpg";


const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

   
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });


    
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(4, 0, 3);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(3, 1, 1);
    pointLight2.position.set(-3, -2, -1);

    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
    
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
       
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
       
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
  
 
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
   
    
  }, []);


  return (
    <div className="home">

      <canvas className="homeCanvas"></canvas>
      
      <div className="skills">
      <div className='photo'>
    <img className="myy" src={mine} alt=''/>
</div>
        <h1 className="ms">MAIN SKILLS</h1>
        <p className="p1">BACKEND</p>
        <p className="p2">DSA</p>
        <p className="p3">FRONTEND</p>
        <p className="p4">ML & DL</p>
        <img className="skillimg" src={Skills}  alt=""/>

     
      </div>
    <div className="homeSkills">
     
    
      <div className="homeCubeSkills">
        <div className="box">
          <div className="back">
              <p>NODE JS</p>
          <p>REACT JS</p>
          <p>MONGO DB</p>
          <p>ML</p>
          <p>DL</p>
      
       
        
          </div>
          
        </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src='https://tse1.mm.bing.net/th?id=OIP.dun8UyC1Mf8RduNsZ-Mz1QHaE8&pid=Api&P=0&h=220' alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src='https://tse1.mm.bing.net/th?id=OIP.dun8UyC1Mf8RduNsZ-Mz1QHaE8&pid=Api&P=0&h=220' alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src='https://www.dreamstertech.com/wp-content/uploads/2020/04/reactjs.png' alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src='http://howtodoinjava.com/wp-content/uploads/2014/05/MongoDB_Logo.png' alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src='https://www.techupdatesdaily.com/wp-content/uploads/2019/12/What-Is-Machine-Learning1.jpg' alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src='https://cdn.educba.com/academy/wp-content/uploads/2020/01/Deep-Learning.jpg' alt="Face6" />
          </div>
</div>
<div className="cubeShadow"></div>
</div>
<div className="homeYoutube">
  <Typography variant="h3">YOUTUBE VIDEOS</Typography>
 <div className="homeYoutubeWrapper">
  <YoutubeCard
  image={a}
  title="A DAY IN IIT/NIT"
  />
   <YoutubeCard
  image={b}
  title="NIT KI DIWALI"
  />
   <YoutubeCard
  image={c}
  title="A DAY IN A LIFE OF NITKKR STUDENT"
  />
   <YoutubeCard
  image={d}
  title="SHIMLA"
  />
 </div>
    </div>
    </div>
  )
}

export default Home;
