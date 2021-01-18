//function getListProject() {
//    $.ajax({
//        url: "/Project/getAllProject",
//        type: "POST",
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//        success: function (res) {
//            console.log(res)
//        },
//        error: function (xhr) {
//            //debugger;  
//            console.log(xhr.responseText);
//        }
//    }); 
//}

$("#subProject").click(function () {
    var formData = $("#projectform").serialize();
    var idP = $("#idProject").val();

    if (idP) {
        //update project
        $.ajax({
            url: "/Project/UpdateProject",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: formData,
            success: function (result) {
                if (result) {
                    resetModal();
                    Notiflix.Notify.Success('Update success');
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            },
            error: function (xhr) {
                //debugger;  
                console.log(xhr.responseText);
            }
        });  
    } else {
        //create project
        $.ajax({
            url: "/Project/AddProject",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: formData,
            success: function (result) {
                if (result) {
                    Notiflix.Notify.Success('Add success');
                    resetModal();
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            },
            error: function (xhr) {
                //debugger;  
                console.log(xhr.responseText);
            }
        });  
    }

    $('#modalProject').modal('hide');
    
});


$("#addProject").click(function () {
    resetModal();
});

$(".edit-project").click(function () {
    let id = this.id;
    $.ajax({
        url: "/Project/EditProject",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: {id: id},
        success: function (res) {
            $('#titleModalLabel').text("Edit Project");
            $('#system_id').val(res[0].SYSTEM_ID);
            $('#system_desc').val(res[0].SYSTEM_DESC);
            $('#sys_url').val(res[0].SYS_URL);
            $('#seqNo').val(res[0].SEQNO);
            $('#idProject').val(res[0].ID);

        },
        error: function (xhr) {
            //debugger;  
            console.log(xhr.responseText);
        }
    }); 
});

function resetModal() {
    $('#titleModalLabel').text("Add Project");
    $('#system_id').val('');
    $('#system_desc').val('');
    $('#sys_url').val('');
    $('#seqNo').val('');
    $('#idProject').val('');
}

function deleteProject(id) {
    
    Notiflix.Confirm.Init({
        className: 'notification-project'
    });
    Notiflix.Confirm.Show(
        'Delete project',
        'Do you want continue?',
        'Yes',
        'No',
        function () {
            // Yes button callback 
            $.ajax({
                url: "/Project/DeleteProject",
                type: "POST",
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: { id: id },
                success: function (res) {
                    if (res) {
                        Notiflix.Notify.Success('Deleted');
                        setTimeout(function () {
                            location.reload();
                        }, 1000);

                    }
                },
                error: function (xhr) {
                    //debugger;  
                    console.log(xhr.responseText);
                }
            }); 
            
        },
        function () {
            // No button callback 
            Notiflix.Notify.Info('Canceled');
        });
}