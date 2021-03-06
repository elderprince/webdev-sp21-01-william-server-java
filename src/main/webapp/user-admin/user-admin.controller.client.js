var $userFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var $updateBtn
var $theTableBody
var userService = new AdminUserServiceClient()

var users = [];
function createUser(user) {
    userService.createUser(user)
        .then(function (actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })
}

var selectedUser = null
function selectUser(event) {
    var selectBtn = jQuery(event.target)
    var theIndex = selectBtn.attr("id")
    selectedUser = users[theIndex]
    $userFld.val(selectedUser.user)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)
}

function deleteUser(event) {
    var deleteBtn = jQuery(event.target)
    var theIndex = deleteBtn.attr("id")
    var theId = users[theIndex]._id
    userService.deleteUser(theId)
        .then(function (status) {
            users.splice(theIndex, 1)
            renderUsers(users)
        })
}

function renderUsers(users) {
    $theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $theTableBody
            .prepend(`
                    <tr>
                        <td>${user.user}</td>
                        <td>${user.password}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.role}</td>
                        <td>
                            <i class="fa fa-times fa-2x wbdv-user-remove" id="${i}"></i>
                            <i class="fa fa-pencil fa-2x wbdv-user-edit" id="${i}"></i>
                        </td>
                    </tr>
                    `)}
    jQuery(".wbdv-user-remove")
        .click(deleteUser)
    jQuery(".wbdv-user-edit")
        .click(selectUser)
}

function updateUser() {
    selectedUser.user = $userFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    $userFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
}

function init() {
    $userFld = $(".wbdv-user-admin-username-fld")
    $passwordFld = $(".wbdv-user-admin-password-fld")
    $firstNameFld = $(".wbdv-user-admin-firstname-fld")
    $lastNameFld = $(".wbdv-user-admin-lastname-fld")
    $roleFld = $(".wbdv-user-admin-role-fld")
    $createBtn = $(".wbdv-user-create-btn")
    $updateBtn = $(".wbdv-user-update-btn")
    $theTableBody = jQuery("tbody")
    $updateBtn.click(updateUser)
    $createBtn.click(() => {
            createUser({
                user: $userFld.val(),
                password: $passwordFld.val(),
                firstName: $firstNameFld.val(),
                lastName: $lastNameFld.val(),
                role: $roleFld.val()
            })
            $userFld.val("")
            $passwordFld.val("")
            $firstNameFld.val("")
            $lastNameFld.val("")
        }
    )
    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })
}

jQuery(init)