import React, { useState } from "react";
import axios from "axios";
import Style from "./Style.module.css";
import Profile from "./Assets/Profile.jpg";

const App = () => {
  const [state, setstate] = useState({gituser: "", username:'',
  avatar: "",
  name: "",
  publicRepos: "",
  publicGits: "",
  creationTime: "", });
  

  const OnChangeHandler = (e) => {
    setstate({ [e.target.name]: e.target.value });
  };

  const OnSearchData = () => {
    axios
      .get(`https://api.github.com/users/${state.gituser}`)
      .then((response) => {
        console.log(response.data.login,response.data.name, response.data.avatar_url,response.data.public_repos,response.data.public_gists,response.data.updated_at);
        let Name = response.data.name;
        let Username = response.data.login;
        let Avatar = response.data.avatar_url;
        let PublicRepos = response.data.public_repos;
        let PublicGits = response.data.public_gists;
        let CreationTime = response.data.updated_at;
setstate({name:Name,username:Username,avatar:Avatar,publicRepos:PublicRepos, publicGits:PublicGits,creationTime:CreationTime})
       
      })
      .catch((error) => {
      console.log("dikkat aa gyi")
      });
      state.show = true;
  };

  // let gitUser = state.

  return (
    <>
    <div className={Style.back}>
    <div className={Style.logoContainer}>
          <h2 className={Style.assesmentHead}>MtechZilla Assesment-2</h2>
          <img className={Style.assesmentLogo} src={"https://mtechzilla.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"} alt="pic" />
        </div>
        <div className={Style.credits}>
          <h2 className={Style.creditText}>Created By <br /> Kuldeep Rathore</h2>
          <img className={Style.creditLogo} src={Profile} alt="logo" />
        </div>
      <div className={Style.searchBar}>
      <input
      className={Style.input}
        onChange={(e) => OnChangeHandler(e)}
        type="text"
        placeholder="Git Username"
        name="gituser"
      />
      <button className={Style.btn} onClick={OnSearchData}>Search Git User</button>
      </div>
      <div className={Style.gitIdBack}>
      <div className={Style.gitId}>
        <h2>User Details Will Show Here</h2>
      <img className={Style.gitAvatar} src={state.avatar} alt="Profile pic" />
      <p className={Style.gitName}>username: {state.username}</p>
      <p className={Style.gitName}>name:     {state.name}</p>
      <p className={Style.gitName}>publicRepos:   {state.publicRepos}</p>
      <p className={Style.gitName}>publicGits:    {state.publicGits}</p>
      <p className={Style.gitName}>creationTime:  {state.creationTime}</p>
      </div>
      </div>
      </div>
    </>
  );
};

export default App;
