let a = document.getElementsByClassName("imgs");
let b = document.getElementById("main");

let count = 0;

for (let i = 0; i < a.length; i++) {
    let c = a[i];
    c.addEventListener("click", function () {
        b.src = this.src;
        checkCount(this.src); 
    });
}

function checkCount(src) {
    for (let i = 0; i < a.length; i++) {
        let d = a[i];
        if (d.src === src) {
            count = i+1;
            // console.log("Updated Count: " + count);
            break;
        }
    }
}       



function showinfo(){

    switch (count){
        case 0:
            window.open('https://myanimelist.net/anime/20/Naruto', "ImgInfo1", "width=700px");
            break;
        case 1:
            window.open('https://myanimelist.net/anime/16782/Kotonoha_no_Niwa', "ImgInfo2", "width=700px");
            break;
        case 2:
            window.open('https://myanimelist.net/anime/578/Hotaru_no_Haka', "ImgInfo3", "width=700px");
            break;
        case 3:
            window.open('https://myanimelist.net/anime/457/Mushishi', "ImgInfo4", "width=700px");
            break;
        case 4:
            window.open('https://myanimelist.net/anime/2246/Mononoke', "ImgInfo5", "width=700px");
            break;
        case 5:
            window.open('https://myanimelist.net/anime/11111/Another', "ImgInfo6", "width=700px");
            break;
        case 6:
            window.open('https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi', "ImgInfo7", "width=700px");
            break;
        default:
            window.open('https://myanimelist.net/', "ImgInfo", "width=700px");

    }
}


b.addEventListener("click",showinfo)