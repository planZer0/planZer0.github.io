function pressButton(){
       var that = new Audio("buttonpress.mp3");
       that.play();
}

$('#easy').on('click', pressButton);