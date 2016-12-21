window.onload = function(){
    let collect = document.getElementById('collect');
    let notify = document.getElementById('notify');
    let policy = document.getElementById('policy');
    let joint = document.getElementById('joint');
    function showmore(articles){
       let index = 4;
       let count = 0;
       let nodes = articles.children;
       // alert(nodes.length);
       for(let i = 0; i<nodes.length-1;i++){
       		nodes[i].style.display = "none";
       }
       for(let i = index;i<(nodes.length-1)&&i<index+4;i++){
       		nodes[i].style.display = "block";
       		count++;
       }
       index+=count;
       count = 0;

    }

    let show1 = collect.children
    show1[show1.length-1].onclick = function(){
    	showmore(collect);
    }

    // let show2 = notify.children
    // show2[show2.length-1].onclick = function(){
    // 	showmore(notify);
    // }

    let show3 = policy.children
    show3[show3.length-1].onclick = function(){
    	showmore(policy);
    }

    // let show4 = joint.children
    // show4[show4.length-1].onclick = function(){
    // 	showmore(joint);
    // }
}