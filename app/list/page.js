export default function List() {
  let 상품 = ["토마토", "키위", "바나나"];
  return (
    <div>
      <h1>상품목록</h1>
      {상품.map((item, i) => {
        return (
          <div>
            <img src={`/food${i}.jpeg`}></img>
            {/* <Image src="/food.jpeg"></Image> */}
            <p key={i}>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
