

//    profile dropdown 
    var dropDown = document.getElementById('profile-dropdown');
    dropDown.style.display = 'none';
    function profileDrop(){

    if( dropDown && dropDown.style.display == 'block'){
        dropDown.style.display = 'none';
    } 
    else {
        dropDown.style.display = 'block';
    }
}

