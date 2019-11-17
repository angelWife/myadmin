$(function() {
  //加载首页
  loadHtml('mainIframe');

  // 菜单缩小
  $("#menuClick").on("click", function() {
    if ($("#body_left").hasClass('showIcon')) {
      $("#body_left").removeClass("showIcon").animate({
        width: "240px"
      }, 300)
      $(this).find(".glyphicon").addClass('glyphicon-indent-right').removeClass('glyphicon-indent-left');
      $("#menuBox dt i").show();
    } else {
      $("#body_left").addClass("showIcon").animate({
        width: "40px"
      }, 300)
      $(this).find(".glyphicon").addClass('glyphicon-indent-left').removeClass('glyphicon-indent-right');
      $("#menuBox dt i").removeClass('rotate').hide();
      $("#menuBox dd").hide();
    }
  });

  // 菜单的点击
  $("#menuBox dt").on('click', function() {
    var dd = $(this).next('dd');
    var href = $(this).children('a').data('src');
    var title = $(this).children('a').data('name');
    var $this = $(this);
    if ($("#body_left").hasClass('showIcon')) {
      $("#body_left").removeClass("showIcon").animate({
        width: "240px"
      }, 300);
      setTimeout(function() {
        $this.find('i').show();
        if (dd.length > 0) {
          dd.slideToggle()
          $this.find('i').toggleClass('rotate');
        } else {
          $("#menuBox").find('.active').removeClass('active');
          $this.addClass('active');
          addTab(title, href);
        }
      }, 300)
    } else {
      if (dd.length > 0) {
        dd.slideToggle()
        $(this).find('i').toggleClass('rotate');
      } else {
        $("#menuBox").find('.active').removeClass('active');
        $(this).addClass('active');
        addTab(title, href);
      }
    }
  });
  $("#menuBox dd a").on('click', function() {
    $("#menuBox").find('.active').removeClass('active');
    $(this).addClass('active');
    var href = $(this).data('src');
    var title = $(this).data('name');
    addTab(title, href);
  });

  //头部菜单
  $("#headNav li.more").hover(function() {
    $(this).find('.childNav').stop().slideDown();
  }, function() {
    $(this).find('.childNav').stop().slideUp();
  });

  $("#navHome").click(function() {
    loadHtml('mainIframe');
    $(this).addClass('active');
    $("#headTree a").removeClass('active');
  })
});

function addTab(title, href) {
  var htm = '<a class="active" href="javascript:;" data-url="' + href + '" title="' + title + '">' + title + '<i class="closeNav iconfont icon-remove"></i></a>';
  var child = $("#headTree").children("a");
  var hasChild = false
  for (var i = 0; i < child.length; i++) {
    var _a = child.eq(i)
    if (_a.text() == title) {
      hasChild = true;
      _a.addClass('active');
    } else {
      _a.removeClass('active');
    }
  }
  $("#navHome").removeClass("active");
  if (hasChild) {

  } else {
    $("#headTree").append(htm);
  }
  // 头部菜单栏的操作
  $("#headTree .closeNav").off('click').on('click', function() {
    $(this).parent().remove();
  });
  $("#headTree a").off('click').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var title = $(this).text();
    var href = $(this).data('url');
    addTab(title, href);
  });

  loadHtml('mainIframe',href);

}

function loadHtml(dom,url = 'html/home.html', data, callback) {
  $("#"+dom).load(url);
}

function removeTab() {

}