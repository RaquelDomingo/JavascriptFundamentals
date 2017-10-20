<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Fancy Array</title>
  </head>
  <body>
    <script type="text/javascript">

      var array = ["James", "Jill", "Jane", "Jack"];

      for (var i = 0; i < array.length; i++) {
        array[i] = i + " -> " + array[i];
      }
        console.log(array);

    </script>
  </body>
</html>
