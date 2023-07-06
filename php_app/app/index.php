<?php
 header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
 header("Access-Control-Allow-Headers: Content-Type,Origin,x-Auth-Token, Authorization");

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- inculde bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <!--  inculde font-awesome   -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <!-- inculde style.css -->
        <link rel="stylesheet" href="public/style.css">
        <link rel="stylesheet" href="public/style1.css">

        <!-- include socker.io-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.3.2/socket.io.js" integrity="sha512-zN6KYOtONNTOGXz0RkWX2EpavN9VdIs+2w+To+fhciFv83YA9maUpi2lzZWrOfKXdFIZZomWufBznkyHi3a8oQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    </head>
    <body>
        <form class="form search-bar dropdown show" >
        <div class="input-group form-group">
            <div class="input-group-prepend">
                <label class="input-group-text" for="search1">Search:</label>
            </div>    
                <input id="search1"  type="search" name="search" class="form-control" >
            </div>
            <div class="dropdown-menu w-100 mt-2" aria-labelledby="searchBtn1">
                <ul class="list-group" id ="search_list" >
                </ul>
            </div>
        </form>
        </div>
        <script src="public/index.js" charset="utf-8"></script>
    </body>
</html>