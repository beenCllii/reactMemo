import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import Child from './Child';

function App() {

  const [parentsAge,setParentsAge] = useState(0);

  const incrementParentAge = () => {
    setParentsAge(parentsAge => parentsAge + 1);
  }

  console.log('부모 나이 증가');

  // const name = useMemo(()=>{ 
  //   return{
  //     lastName : '홍',
  //     firstName : '길동'
  //   }
  // },[])

  const tellMe = useCallback(() => {
    console.log("I'm 길동");
  },[])

  return (
    <div>
      <h1>부모</h1>
      <p>나이 : {parentsAge}</p>
      <button onClick={incrementParentAge}>나이증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />      
    </div>
  );
}

export default App;
