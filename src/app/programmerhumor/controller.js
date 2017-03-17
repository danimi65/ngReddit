import { ProgServiceName } from './service';
export const ProgCtrl = ['$scope', ProgServiceName, class ProgCtrl {
  constructor($scope, ProgService){
    $scope.posts = [];
    this.title = "Programmer Humor";
     ProgService.getPosts()
        .then( ({
          status,
          data : {
            data : {
              children
            }
          }
        }) => {
          if( status !== 200 ){
            $scope.error = `Error fetching /r/aww.json\nStatus: ${status}`;
          }
          $scope.posts = children
            .filter( child => child.data.preview )
            .map( child => child.data );
        })
        .catch( err => console.error(err) );
  }
}];