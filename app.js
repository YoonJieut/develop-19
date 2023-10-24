/**
 * 
 * 객체 리터럴인 capsule은 3개의 key와 정보를 갖고 있음
 * 실용적인 측면에서 전혀 사용하지 않는 방식
 * 직관적인 코드 가해를 위해 작한 예시
 * 
 * 객체 capsule은 세개의 key 하나의 메서드를 가지고 있는 것을 활용하면
 * 마치 '하나의 묶음'뿐만 아니라, 기능도 포함되어있는 객체를 만들 수 있다.
 * 
 * 이러한 wrapping 기법, 혹은 개념을 '캡슐화(encapsulation)'라고 함
 * 마치 캡슐처럼 다루겠다는 의미, 여러 유형이 존재
 * 상징인 capsule 이라는 전제하에 모든 의미가 함축, 추상(abstract) 되어있다.
 */

const capsule = {
  id : "junhyeon",
  pw : "305",
  email : "asd@example.com",
  getTotalDataString : function(){
    return `id ${this.id}, pw: ${this.pw}, email : ${this.email}`
  }
};

console.log(capsule.getTotalDataString());
// 아하 이거, 우리가 알던 메서드와 같은 구조다.
// 메서드란 객체 레터럴로 구성되어 있는 것일 뿐이었다.