(function(){
    // var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "Anurag@23"
    //   });
      
   var memberservice = function(){
       var members = [
           {
               id : 1,
               member_name : 'Arvind Pathak',
               member_phone : '7867894534',
               member_email : 'arvindpthk@gmail.com',
               member_status : 'Paid'
           },
           {
               id : 2,
               member_name : 'Ankit Tiwari',
               member_phone : '7867675453',
               member_email : 'ankittiw@gmail.com',
               member_status : 'UnPaid'
           },
           {
               id : 3,
               member_name : 'Anwar Ali',
               member_phone : '9087634524',
               member_email : 'anwarali@gmail.com',
               member_status : 'Paid'
           },
           {
               id : 4,
               member_name : 'Visashree Priyarini',
               member_phone : '8889456344',
               member_email : 'visashree@gmail.com',
               member_status : 'UnPaid'
           },
       ];

       this.getMembers = function(){
        //    alert("I'm checking service")
        // con.query("USE Students", function (err, result) {
        //     if (err) throw err;
        //     con.query("SELECT * from Information", function (err, result) {
        //         if (err) throw err;
        //         console.log("Database created",JSON.stringify(result));
        //       }); 
        //   }); 
        //   return result;
        return members;
       };
   };

   angular.module('myApp').service('memberservice',memberservice);
   
}());