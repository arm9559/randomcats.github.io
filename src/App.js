/* Styles */
import './App.css';
import "./Style/documentStyle.scss";
/* Redux Hooks */
import { useSelector,useDispatch } from 'react-redux';
/* React Hook */
import { useState } from 'react';
/* Router */
import { Link, Routes,Route } from "react-router-dom";
/* Functions */
import { newPosts, fetchPosts , hatsPosts , boxesPosts,clothesPosts,sinksPosts,spacePosts,sunglasessPosts,tiesPosts} from './redux/Actions/action';
/* Components */
import Hats from './Components/Hats';
import Boxes from './Components/Boxes';
import Clothes from './Components/Clothes';
import Sinks from './Components/Sinks';
import Space from './Components/Space';
import Sunglasess from './Components/Sunglasess';
import Ties from './Components/Ties';
import SectionBottom from './Components/Article/SectionBottom';

function App() {
  const [disableButton,SetDisableButton] = useState(true);
  const {posts,loading} = useSelector((state) => ({...state.data}));
  const dispatch = useDispatch()
  const getNewState = useSelector(function(newinitialState){
    return newinitialState.new.newPost
  })
  const handleHats = () =>{
    dispatch(hatsPosts())
    SetDisableButton(!true)
  }
  const handleBoxes = () =>{
    dispatch(boxesPosts())
    SetDisableButton(!true)
  }
  const handleClothes = () =>{
    dispatch(clothesPosts())
    SetDisableButton(!true)
  }
  const handleSinks = () =>{
    dispatch(sinksPosts())
    SetDisableButton(!true)
  }
  const handleSpace = () =>{
    dispatch(spacePosts())
    SetDisableButton(!true)
  }
  const handleSunglasess = () =>{
    dispatch(sunglasessPosts())
    SetDisableButton(!true)
  }
  const handleTies = () =>{
    dispatch(tiesPosts())
    SetDisableButton(!true)
  }
  return (
    <div className="App">
      <header>
        <div className="buttons-group">
          <button onClick={()=> dispatch(fetchPosts())} className="route-button">Random Cats</button>
          <Link to="hats" onClick={handleHats} className="route-button">Hats</Link>
          <Link to="boxes" onClick={handleBoxes} className="route-button">Boxes</Link>
          <Link to="clothes" onClick={handleClothes} className="route-button">Clothes</Link>
          <Link to="sinks" onClick={handleSinks} className="route-button">Sinks</Link>
          <Link to="space" onClick={handleSpace} className="route-button">Space</Link>
          <Link to="sunglasess" onClick={handleSunglasess} className="route-button">Sunglasess</Link>
          <Link to="ties" onClick={handleTies} className="route-button">Ties</Link>
        </div>
      </header>
      <article>
        <section className="cats-parent">
          <Routes>
            <Route path="hats" element={<Hats/>} posts={posts} loading={loading}></Route>
            <Route path="boxes" element={<Boxes/>} posts={posts} loading={loading}></Route>
            <Route path="clothes" element={<Clothes/>} posts={posts} loading={loading}></Route>
            <Route path="sinks" element={<Sinks/>} posts={posts} loading={loading}></Route>
            <Route path="space" element={<Space/>} posts={posts} loading={loading}></Route>
            <Route path="sunglasess" element={<Sunglasess/>} posts={posts} loading={loading}></Route>
            <Route path="ties" element={<Ties/>} posts={posts} loading={loading}></Route>
          </Routes>
        </section>
        <SectionBottom getNewState={getNewState} dispatch={dispatch} newPosts={newPosts} disableButton={disableButton}/>
      </article>
    </div>
  );
}

export default App;
