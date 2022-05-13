const links = [
    {
        label: "Quiz Ninja Project",
        url: "quizninja/index.html"
    },
    {
        label: "Chapter 8 Search",
        url: "search.html"
    },
    {
        label: "Chapter 8 hero",
        url: "chapter8/hero.html"
    },
    {
        label: "notes",
        url: "notes.txt"
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