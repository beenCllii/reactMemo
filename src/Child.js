import { memo } from "react";

const Child = ({name,tellMe}) => {
  console.log('아이 호출');
    return (
        <div>
            <h1>자녀</h1>
            <p>이름:{name}</p>
            <button onClick={tellMe} >asdf</button>
        </div>       
    )
}

export default memo(Child)