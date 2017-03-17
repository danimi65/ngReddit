import { AwwServiceName } from './service';
export const AwwCtrl = ['$scope', AwwServiceName, class AwwCtrl {
  constructor($scope, AwwService){
    $scope.posts = [];
    this.title = "Aww so cute";
     AwwService.getPosts()
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