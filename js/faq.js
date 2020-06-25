$("a.pull-right").click(function(){
  if ($(this).hasClass("collapsed")) {
    iconTag = this.getElementsByTagName("i")[0]
    $(iconTag).addClass("fa-minus")
    $(iconTag).removeClass("fa-plus")
  } else {
    iconTag = this.getElementsByTagName("i")[0]
    $(iconTag).removeClass("fa-minus")
    $(iconTag).addClass("fa-plus")
  }
})
