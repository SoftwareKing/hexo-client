$(function() {
  var index = 0;
  $('figure').each(function() {
    var children = $(this).find('table tbody tr td.code div');
    if (children.length > line_limit) {
      index++;
      var collapse_item = $('<h6><i class="fa fa-chevron-up"></i><span class="collapse-label">收起</span></h6>');
      $(this).prepend(collapse_item);
      var table = $(this).find('table');
      var div = $('<div></div>');
      table.remove();
      div.append(table);
      $(this).append(div);
      $(this).find('h6').click(function() {
        if (div.is(':hidden')) {
          collapse_item.find('i').removeClass('close');
          collapse_item.find('span.collapse-label').html('收起');
        } else {
          collapse_item.find('i').addClass('close');
          collapse_item.find('span.collapse-label').html('展开');
        }
        var slide_time = children.length * 20;
        if (slide_time < 200) slide_time = 200;
        else if (slide_time > 2000) slide_time = 2000;
        div.slideToggle();
      });
    }
  });
})