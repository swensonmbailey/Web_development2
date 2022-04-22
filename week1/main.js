const links = [
    { 
      label: "Week1 story Editor",
      url: "storyEditor.html",
    },
    {
        label: "Week1 notes",
        url: "notes.txt"
    }
  ]

function create_List(){
    links.forEach(create_List_Item)
}
function create_List_Item(item){
    let theList = "";
    theList += '<li> <a href="' + item.url + '"> ' + item.label + '</a> </li>'
    document.getElementById("the_list").innerHTML = theList;
}