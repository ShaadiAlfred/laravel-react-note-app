<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

        <title>Notes</title>
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
