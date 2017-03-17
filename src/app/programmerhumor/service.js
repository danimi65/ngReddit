export const ProgServiceName = 'ProgService';
export const ProgService = [
  '$http',
  class ProgService{
    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/ProgrammerHumor.json';
    }
    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];