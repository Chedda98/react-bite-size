import React, {useState} from "react";

const Counter = () => {

  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태
  // h2 부분을 동적으로 변화시키고자 함

  console.log("counter 호출!");

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter;
