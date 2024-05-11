import React, { useCallback, useState } from 'react'

//! 장바구니 로직 구현

//& 기능 정리
// - 상품 추가, 상품 수정, 상품 제거

//& 상품 구성
// - 상품 고유 번호 (id), 상품 이름(name), 상품 가격(price), 상품 갯수(quantity)

//! 상품 타입 명시
type CartItemType = {
  id: number;
  name: string;
  price : number;
  quantity: number;
}

//! 장바구니 로직을 구현하는 커스텀 훅
const useCart = () => {
  const [cartItem, setCartItems] = useState<CartItemType[]>([]);
  

  const addItem = useCallback((item : CartItemType) => {
    // 해당 장바구니 내에 해당 아이템이 존재하는 경우
    // : 수량만 증가
    if(item){
      item.quantity + 1;
    }
  }, [])

  const updateItemQuantity = useCallback((updatedItem: CartItemType) => {
    setCartItems(prev => prev.map(item => item.id === updatedItem.id? updatedItem: item))
  }, [])

  const removeItem = useCallback((id:number) => {
    setCartItems(prev => prev.filter(post => post.id !== id))
  }, [])

  return { cartItem , addItem , updateItemQuantity , removeItem}
}

export default function Cart() {
  
  // 사용자 정의 장바구니 로직 가져오기 - 구조 분해 할당
  const { cartItem , addItem , updateItemQuantity , removeItem} = useCart();
  
  const [ selectedItem , setSelectItem] = useState<CartItemType | null>(null);
  
  // 수정을 위한 input 상태 관리 (name, price)

  const handleAddItem = (e: React.FormEvent<HTM>) => {

  }
  const increment = 
  return (
    <div>
      <form onSubmit={handleAddItem}>
        {/* 상품 이름과 가격을 입력 받아서 제품 추가 */}
      </form>

      {/* 장바구니 데이터 출력 */}
      <ul>
        <li>
          아이템 이름 - 아이템 가격 - 아이템 수량
          <button onClick={}>수량 증가</button>
          <button onClick={}>수량 감소</button>
          <button onClick={}>제거</button>
        </li>
      </ul>
    </div>
  )
}
