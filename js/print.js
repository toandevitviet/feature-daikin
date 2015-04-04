function printContent(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    //settimeout refresh, conflix code print reload page ( next, prev )
    var timeout = setTimeout("location.reload(true);",100);
}
