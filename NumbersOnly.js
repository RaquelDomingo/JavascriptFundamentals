<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Numbers Only</title>
  </head>
  <body>
    <script type="text/javascript">
      function numbersOnly(arr){
        var keep = [];
        for(var i = 0; i < arr.length; i++){
          if(typeof arr[i] === "number"){
            keep.push(arr[i]);
          }
        }
        return keep;
      }
      console.log(numbersOnly([1, "apple", -3, "oranges", 0.5]));
    </script>
  </body>
</html>
