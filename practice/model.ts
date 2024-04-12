
interface User {
  id : number,
  name : string,
  email : string
};

interface Post {
  userId: number,
  id : number,
  title : string,
  body : string
};

export {User , Post};