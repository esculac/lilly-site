<?php 
include "header.php";
?>
<!-- apply our angular app -->
<body ng-app="animateApp">

    <!-- inject our views using ng-view -->
    <!-- each angular controller applies a different class here -->
    <div class="page {{ pageClass }}" ng-view></div>
        
</body>
</html>

<div id="navbutton-wrapper">
 <a class="btn navbutton" href="#about">About</a>
 <a class="btn navbutton" href="#/">Home</a>
 <a class="btn navbutton" href="#gallery">Gallery</a>
</div>