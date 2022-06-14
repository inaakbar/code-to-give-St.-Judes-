window.onload = function() {
    console.log('window loaded');
    var userTable = document.getElementById('userTable');
    UploadButton();
}

function UploadButton(){
    console.log(userTable);
    for(let i = 1, row; row = userTable.rows[i]; i++)
    {
        let formStatus = row.cells[2].innerText;
        let docStatus = row.cells[3].innerText;
        let uploadDoclink = row.cells[5];
        console.log(uploadDoclink);
        console.log(formStatus);
        if(formStatus === "Approved" && docStatus !== "Uploaded"){
            uploadDoclink.style.display = "block";
        }else{
            uploadDoclink.style.display = "none";
        }
    }
}
// userTable.addEventListener('load', ()=>)