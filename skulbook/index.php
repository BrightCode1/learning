<?php

function count_pages($pdfname) {

  $pdftext = file_get_contents($pdfname);
  $num = preg_match_all("/\/Page\W/", $pdftext, $dummy);

  return $num;
}

$pdfname = 'mth.pdf';
$pages = count_pages($pdfname);

echo $pages;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        
    </form>
</body>
</html>