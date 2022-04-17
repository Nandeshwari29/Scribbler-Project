var editMode=false;
function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('comment').innerHTML = "<p style='background-color:white; margin-right:10px; margin-top:10px; padding:10px'>"+addEventName+'</p>'+ document.getElementById('comment').innerHTML;          
    a.value=a.defaultValue;
}
//Enter your code here
var like = 0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
    like = like+1;
    if(like == 1){
        document.getElementById("commentCount").innerHTML=1 + " person likes this!";
    }
    else{
        document.getElementById("commentCount").innerHTML=like + " people have liked this!";
    }
    
    
}
var num=0;
function edit(){
    if(!editMode){
        var savebutton= 'Save<i class="fa fa-save"></i>';
        document.getElementById('text-h3').style.borderColor='pink';
        document.getElementById('text-h3').style.borderStyle='solid';

        document.getElementById('paraText').style.borderColor='pink';
        document.getElementById('paraText').style.borderStyle='solid';
        document.getElementById('edit-button').innerHTML= savebutton;
        editMode=true;
    }
    else{
        var value = document.getElementById('text-h3');
        document.getElementById('text-h3').style.border="none";
        document.getElementById('paraText').style.border="none";
        var editbutton= 'Edit<i class="fa fa-edit"></i>';
        document.getElementById('edit-button').innerHTML= editbutton;

    }
}