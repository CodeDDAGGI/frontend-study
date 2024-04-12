import {User,Post} from './model'
namespace Utils {
  import User = UserInterface.User;
  import Post = PostInterface.Post;

  export function printUserInfo(user: User): void {
      console.log('사용자 정보:');
      console.log('이름:', user.name);
      console.log('나이:', user.age);
      // 기타 사용자 정보 출력
  }
}