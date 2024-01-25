function sizecheck(){
    let a=1024;
    let c=10*1024*1024;
    let b=document.getElementById("upl").files[0];

    if (!b) {
        alert("No file selected!");
        document.getElementById("err").innerHTML = "Please Upload a file...";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }


    if(b.size<a){
        alert("File Size not Valid!");
        document.getElementById("err").innerHTML = "Please Upload a file larger than 1KB";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }
    else if(b.size>c){
        alert("File Size not Valid!");
        document.getElementById("err").innerHTML = "Please Upload a file smaller than 10MB";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }
    
    return true;

}