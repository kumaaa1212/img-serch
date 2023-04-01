import { useRef, useState } from 'react';
import './App.css';
import ImageGrally from './ImageGrally';

function App() {
  const [fetchext,setfetchtext] =useState([]);
  const ref =useRef();
  const handlesubmit = (e) =>{
    e.preventDefault()
    console.log(ref.current.value);

    const endpointURL =`https://pixabay.com/api/?key=34942190-272a2c9a1e3bbdc809b30790c&q=${ref.current.value}&image_type=写真`
    fetch(endpointURL).then((res) => {
      return res.json();
    }).then((data) =>{
      setfetchtext(data.hits)});
  }
  return (
    <div className='container'>
      <h2>My pixabay</h2>
      <form action="" onSubmit={(e) =>handlesubmit(e)}>
        <input type="text" placeholder='画像を検索' ref={ref}/>
      </form>
      <ImageGrally fetchext={fetchext}/>
    </div>
  );
}
export default App;
