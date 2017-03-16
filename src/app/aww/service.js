export const AwwServiceName = 'aww';
export const AwwService = [
  '$http',
  class AwwService{
    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/aww.json';
    }
    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];