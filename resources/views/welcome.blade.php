<!DOCTYPE html>
<html>
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <link rel="stylesheet" type="text/css" href="css/app.css" media="screen"/>
        <script>
            window.user = {!! $user !!}
        </script>

        <title>Twitter Test</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="js/app.js"></script>
    </body>
</html>
