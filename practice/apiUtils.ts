async function fetchData<T>(url:string) : Promise<T> {
  try{
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('네트워크 응답 실패');
  }

  const data: T = await response.json();
  return data; // 데이터 반환
} catch (error) {
  throw new Error('데이터를 가져오는 중 오류 발생: ' + error);
}
}

interface UserData {
  name: string;
  age: number;
}

const userDataPromise: Promise<UserData> = fetchData<UserData>('https://jsonplaceholder.typicode.com/users/');

userDataPromise
  .then((data: UserData) => {
      console.log('사용자 데이터:', data);
  })
  .catch((error) => {
      console.error(error.message);
  });

  export {fetchData};