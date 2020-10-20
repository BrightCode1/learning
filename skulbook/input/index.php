<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/paragraph@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script><!-- Header -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/image@latest"></script><!-- Image -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"></script><!-- Delimiter -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script><!-- List -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest"></script><!-- Checklist -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"></script><!-- Quote -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/code@latest"></script><!-- Code -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script><!-- Embed -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/table@latest"></script><!-- Table -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"></script><!-- Link -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/warning@latest"></script><!-- Warning -->

    <script src="https://cdn.jsdelivr.net/npm/@editorjs/marker@latest"></script><!-- Marker -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest"></script><!-- Inline Code -->
    <style>
        body {
            font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
        }

        .btn {
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            background: rgb(119, 206, 119);
            padding: .4rem;
            width: 20%;
            margin: auto;
            border-radius: 8px;
            color: white;
            cursor: pointer;
        }

        .btn:hover {
            background: rgb(17, 170, 17);
        }
    </style>
  
</head>

<body>
    <h1>EditorJS</h1>
    
    <div class="container">
        <div id="editorjs"></div>
    </div>
   
    <button id="saveButton" class="btn">Save</button>
    <button onclick="btnClick()" id="Button" class="btn">Add</button>
    <div id="outputData"></div>
    
    <script src="./index.js"></script>
    <script>
        // var obj = JSON.parse(localStorage.getItem('Data'));
        // for (x in obj.blocks) {
        //     console.log(obj.blocks[x].data.text);
        // }

       
    </script>
      <script>
        function btnClick() {
            // document.querySelectorAll(".editorjs svg").remove();
            $("#editorjs svg").remove();
            document.getElementById("outputData").textContent = document.getElementById("editorjs").innerHTML;
        }
    </script>
</body>

</html>