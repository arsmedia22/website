$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);
          
            $.ajax({
                url: "https://mailthis.to/hr@arsmedia.co.in",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    // $("#cvSendForm input, #cvSendForm textarea").jqBootstrapValidation({
    //     preventSubmit: true,
    //     submitError: function ($form, event, errors) {
    //     },
    //     submitSuccess: function ($form, event) {
    //         event.preventDefault();
    //         var name = $("input#name").val();
    //         var email = $("input#email").val();
    //         var contact = $("input#phn").val();
    //         var education = $("input#edu").val();
    //         var cv = $("textarea#cv").val();
            
    //         var formData = new FormData()
    //         formData.append("name",name)
    //         formData.append("email",email)
    //         formData.append("contact",contact)
    //         formData.append("education",education)
    //         formData.append("cv",cv)
    //         console.log(formData)
    //         $this = $("#sendMessageButton");
    //         $this.prop("disabled", true);
          
    //         $.ajax({
    //             url: "https://mailthis.to/hr@asrmedia.co.in",
    //             type: "POST",
    //             data: formData,
    //             contentType:false,
    //             processDate:false,
    //             cache: false,
    //             success: function () {
    //                 $('#success').html("<div class='alert alert-success'>");
    //                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                 $('#success > .alert-success')
    //                         .append("<strong>Your message has been sent. </strong>");
    //                 $('#success > .alert-success')
    //                         .append('</div>');
    //                 $('#contactForm').trigger("reset");
    //             },
    //             error: function () {
    //                 $('#success').html("<div class='alert alert-danger'>");
    //                 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                 $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
    //                 $('#success > .alert-danger').append('</div>');
    //                 $('#contactForm').trigger("reset");
    //             },
    //             complete: function () {
    //                 setTimeout(function () {
    //                     $this.prop("disabled", false);
    //                 }, 1000);
    //             }
    //         });
    //     },
    //     filter: function () {
    //         return $(this).is(":visible");
    //     },
    // });
    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});

