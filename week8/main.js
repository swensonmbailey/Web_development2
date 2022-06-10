const links = [
    {
        label: "Week8 notes",
        url: "notes.txt"
    },
    {
        label: "Week8 team activity",
        url: "../team-activity-week8/index.html"
    }
    
]
var theList = "";

function create_List(){
    links.forEach(create_List_Item)
}
function create_List_Item(item){
    
    theList += '<li> <a href="' + item.url + '"> ' + item.label + '</a> </li>'
    document.getElementById("the_list").innerHTML = theList;
}