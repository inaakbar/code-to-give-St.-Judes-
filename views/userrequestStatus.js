window.onload = function() {
    console.log('window loaded');
    AddButtons();
}

var userTable = document.getElementById('userTable');
console.log(userTable);

function AddButtons()
{
    for(let i = 1, row; row = userTable.rows[i]; i++)
    {
        let col = row.cells[3];
        console.log(col);

        // document status can be -> waiting, upload, uploaded
        if(col.innerText === "Upload"){
            col.innerText = "";
            const btn = document.createElement("button");
            btn.innerText = "Upload";
            btn.classList.add("btn");
            btn.classList.add("btn-dark");
            btn.type = "button";
            // btn.addEventListener()
            col.appendChild(btn);
        }
    }
}