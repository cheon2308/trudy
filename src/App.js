import './App.css';
import { useState } from 'react';

function App() {

  let logo = 'Trudy'
  let [postName, changePostName] = useState(['Seoul','Busan','Daegu'])
  let [likeCount, setLikeCount] = useState([0,0,0]);
  let [postModal, setPostModal] = useState([false,false,false]);

  return (
    <div className="App">
      <div className="nav">
        <div>{logo}</div>
        <div>Map</div>
        <div>Forum</div>
        <div>Trudy Square</div>
      </div>

      <button onClick={ ()=>{
        let copy = [...postName];
        copy.sort();
        changePostName(copy)
      }}>정렬하기</button>
      

      <button onClick={()=>{
        let copy = [...postName];
        copy[0] = 'Incheon';
        changePostName(copy);
      }}>글 수정</button>

      {
        postName.map((postInfo, i)=>{
          return (
            <div className="postList">
              <h4 onClick={()=> { setPostModal(!postModal) }}>
                { postInfo }  
                <span onClick={() =>{ 
                  let copy = [...likeCount]
                  copy[i] = copy[i] + 1
                  setLikeCount( copy ) }}>👍</span> { likeCount[i] }</h4>
              <p>01 24 테스트</p>
            </div>
          )
        })
      }

      {/* '' 에 null도 가능 */}
      {
        postModal === true ? <Modal/> : '' 
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="postModal">
      <h4>제목 :</h4>
      <p>카테고리 :</p>
      <p>주소 :</p>
      <p>상세내용 :</p>
    </div>
  )
}

export default App;
