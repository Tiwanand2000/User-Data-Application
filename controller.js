(function () {

   var MyController = function ($scope, memberservice) {

      $scope.btnname = 'ADD';
      $scope.insertOnclick = function () {
         var society_members = {
            id: $scope.member.length + 1,
            member_name: $scope.name,
            member_phone: $scope.phone,
            member_email: $scope.email,
            member_status: $scope.status
         };
         console.log(society_members)
         $scope.member.push(society_members);
      };
      //   alert('you clicked')

      // if ($scope.name == null) {
      //    alert('You forgot to Enter Your Name !!')
      //    return
      // }
      // else if ($scope.phone == null) {
      //    alert('You forgot to Enter Your Phone number !!')
      //    return
      // }
      // else if ($scope.email == null) {
      //    alert('You forgot to Enter Your Email Id !!')
      //    return
      // }
      // else if ($scope.status == null) {
      //    alert('You forgot to select fund status !!')
      //    return
      // }


      $scope.deleteOnclick = function (memberid) {
         console.log(memberid);
         var findIndex = $scope.member.findIndex((_data) =>_data.id == memberid);
         console.log(findIndex);
         alert('Do you want to delete :')
         // // console.log('checked')
         if (findIndex !== -1) {
         //    console.log('checked')
            $scope.member.splice(findIndex, 1);

            // alert('Record deleted Successfully.');
         }
      };

      $scope.init = function () {
         $scope.member = memberservice.getMembers();
         console.log($scope.member);
      }
      $scope.init();

   };

   MyController.$inject = ['$scope', 'memberservice'];

   angular.module('myApp').controller('MyController', MyController);

}());
