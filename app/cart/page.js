"use client";
//next js는 server component와 client component 두가지 사용 가능
//기본적으로 별도 선언 안되어 있는 경우 server component
//위와 같이 'use client' 선언할 경우 client component로 사용
//server component : 자바스크립트 기능(onClick) 넣기 불가능, 로딩속도 빠름, 검색엔진 노출 유리
import { age } from "./data";
// export를 중괄호를 사용해서 한 경우 import 시에도 중괄호 사용 필수(변수명 동일하게 사용)
// ./ => 현재경로, ./../ => 상위폴더이동, ./폴더명 => 하위폴더이동

export default function List() {
  return (
    <div>
      <h1>장바구니 {age}</h1>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export function CartItem() {
  return (
    <div>
      <p>상품명</p>
      <p>4,000원</p>
      <p>1개</p>
    </div>
  );
}
