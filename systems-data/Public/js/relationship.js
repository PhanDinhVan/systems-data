//when click button add
$("#addRelationship").click(function () {
    $.ajax({
        url: "/Project/getAllProject",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function (result) {
            if (result) {
                console.log(result)
                $('#fromSysId')
                    .find('option')
                    .remove()
                    .end()
                    ;
                $('#toSysId')
                    .find('option')
                    .remove()
                    .end()
                    ;
                $('#fromSysId').append(`<option value="">-----</option>`);
                $('#toSysId').append(`<option value="">-----</option>`);
                result.forEach(function (val, ind) {
                    $('#fromSysId').append(`<option value="${val.ID}">${val.SYSTEM_DESC}</option>`);
                    $('#toSysId').append(`<option value="${val.ID}">${val.SYSTEM_DESC}</option>`);
                });
            }
        },
        error: function (xhr) {
            //debugger;  
            console.log(xhr.responseText);
        }
    });  
});

//when click icon edit
$(".edit-realtionship").click(function () {
    let id = this.id;

    $.ajax({
        url: "/Relationship/EditRelationship",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: { id: id },
        success: function (res) {
            if (res.obj.length > 0 && res.listPro.length > 0) {
                let obj = res.obj[0];
                $('#memo').val(obj.MEMO);
                $('#idRelation').val(obj.ID);
                $('#titleLabelRe').text("Edit Relationship");
                $('#fromSysId').find('option').remove().end();
                $('#toSysId').find('option').remove().end();

                res.listPro.forEach(function (val, ind) {
                    $('#fromSysId').append(`<option ${val.ID == obj.FROM_SYSID ? 'selected' : ''} value="${val.ID}">${val.SYSTEM_DESC}</option>`);
                    $('#toSysId').append(`<option ${val.ID == obj.TO_SYSID ? 'selected' : ''} value="${val.ID}">${val.SYSTEM_DESC}</option>`);
                });

            }
        },
        error: function (xhr) {
            //debugger;  
            console.log(xhr.responseText);
        }
    });
});

//save relationship
$("#subRelation").click(function () {
    var formData = $("#relationshipform").serialize();
    var idP = $("#idRelation").val();

    if (idP) {
        //update relation
        $.ajax({
            url: "/Relationship/UpdateRelationship",
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
        //create relation
        $.ajax({
            url: "/Relationship/AddRelationship",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: formData,
            success: function (result) {
                console.log(result);
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

    $('#modalRelationship').modal('hide');

});

function resetModal() {
    $('#titleLabelRe').text("Add Relationship");
    $('#memo').val('');
    $('#idRelation').val('');
}

//delete relationship
function deleteRelationship(id) {
    Notiflix.Confirm.Init({
        className: 'notification-project'
    });
    Notiflix.Confirm.Show(
        'Delete relationship',
        'Do you want continue?',
        'Yes',
        'No',
        function () {
            // Yes button callback 
            $.ajax({
                url: "/Relationship/DeleteRelationship",
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