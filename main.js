const links = [
    { 
      label: "Week1",
      url: "week1/index.html",
    },
    {
      label: "Week2",
      url: "week2/index.html"
    }
  ]

function create_List(){
    links.forEach(create_List_Item)
}
function create_List_Item(item){
    let theList = document.getElementById("the_list").innerHTML;
    theList += '<li> <a href="' + item.url + '"> ' + item.label + '</a> </li>'
    document.getElementById("the_list").innerHTML = theList;
}