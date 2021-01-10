$(document).ready(function(){

    function showdata(){
        output = "";
        $.ajax({
            url: "retrieve.php",
            method:"GET",
            dataType:"json",
            success:function(data){
                if(data){
                    x = data;
                }else {
                    x= "";
                }
                for(i = 0;i < x.length; i++){
                 output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name
                 + "</td><td>" + x[i].email + "</td><td>" + x[i].password
                 + "</td><td> <button>Edit</button> <button>Delete</button></td></tr>";
                }
                $("#tbody").html(output);
            },
        });
    }
    showdata();

$("#btnadd").click(function(event) {
    event.preventDefault();
    console.log("Save Button");
    let nm = $("#nameid").val();
    let em = $("#emailid").val();
    let pw = $("#passwordid").val();
    mydata = { name: nm, email: em, password: pw };
    console.log(mydata);
    $.ajax({
        url:"insert.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function(data){
            console.log(data);
            msg = "<div class='alert alert-dark mt-3'>" +data+"</div>";
            $("#msg").html(msg);
            $("#myform")[0].reset();
            showdata();
        },
    });
});

});