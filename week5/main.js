const links = [
    {
        label: "Week5 notes",
        url: "notes.txt"
    },
    
]
var theList = "";

function create_List(){
    links.forEach(create_List_Item)
}
function create_List_Item(item){
    
    theList += '<li> <a href="' + item.url + '"> ' + item.label + '</a> </li>'
    document.getElementById("the_list").innerHTML = theList;
}