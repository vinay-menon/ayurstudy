$(function () {    
  $("#free-call-form").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize(); 
    $.ajax({
      type: "POST", 
      url: "call-form.php",
      dataType: "json", // Add datatype
      data: form_data
    }).done(function (data) {
        console.log(data);
        alert("It's OK!");
    }).fail(function (data) {
        console.log(data);
        alert("It's SAD!");
    });
  }); 
});