<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Random Chance</title>
  </head>
  <body>
    <script type="text/javascript">
      function chance(quarters){
        var chance = 1/100;
        while (quarters > 0){
          var slotmachine = Math.floor(Math.random() * 50) + 50;
          if(Math.random() < chance){
            quarters += slotmachine;
            break;
          }
          quarters --;
        }
        console.log(quarters);
        return quarters;
      }
      chance(100000);
    </script>
  </body>
</html>
