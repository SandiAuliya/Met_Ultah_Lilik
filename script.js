var reason=["Happy Birthday ke-19 Tahun","Be the best version in your self","Proud of Your Parents with Your Achievements","Religious and educational achievements"];
var images=["img3.jpeg","img4.jpeg","img1.jpeg","img2.jpeg"]
var i=0;

function next(){
    if(i<images.length)
    {
        document.getElementById("tree_img").src=images[i];
        document.getElementById("heading2").innerHTML=reason[i];
        document.getElementById("music").play();
        i++;
    }
    else {
        document.getElementById("tree_img").src="img2.jpeg";
        document.getElementById("heading2").innerHTML="HBD Julihah";
        document.getElementById("music").pause();
        i=0;
    }
    
    
}