import Person from './person';

// TODO 17: 在这里写实现代码
export default class Worker extends Person {
  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
