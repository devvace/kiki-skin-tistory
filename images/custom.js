$(document).ready(function () {
    var list = $(".list_content");

    /*
    var thumbImg = list.find(".list_img_box");

    if (list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            var current = list.eq(i).find(".list_img_box");
            if (current.find("img").length == 0) {
                var cuttxt = current.next().next().text();
                current.text(cuttxt);
            }

        }

    }
    */

    var toc = $("#detail_page .article .tableofcontents");
    var tableOfContent = $(".article .contents_style");
    let content = $("#detail_page .comment");
    let cb = content.offset().top;
    let tocheight = 100;

    if (tableOfContent.length > 0) {
        tableOfContent.find("h2").addClass("target");
        tableOfContent.find("h3").addClass("target");
        tableOfContent.find("h4").addClass("target");

        var target = tableOfContent.find(".target");
        if (target.length > 0) {

            var targetHight = [];

            for (var i = 0; i < target.length; i++) {
                toc.append("<p>" + target.eq(i).text() + "</p>");
                targetHight.push(target.eq(i).offset().top);
            }
            var targetp = toc.find("p");
            targetp.eq(0).addClass("on");
            tocheight = toc.innerHeight();


            $(targetp).on("click", function () {
                targetp.removeClass("on");
                $(this).addClass("on");
                $('html, body').animate({ scrollTop: targetHight[$(this).index()] }, 500);
            })


            $(window).on("scroll", function () {

                var scroll = $(window).scrollTop();
                if (scroll < cb - tocheight) {
                    toc.css("top", scroll);
                }

                if (scroll <= targetHight[0] - 50 && scroll >= 0) {
                    targetp.removeClass("on");
                    targetp.eq(0).addClass("on");
                }
                for (var i = 1; i < targetp.length; i++) {
                    if (scroll <= targetHight[i] && scroll >= targetHight[i - 1]) {
                        targetp.removeClass("on");
                        targetp.eq(i).addClass("on");
                    }
                }

            });

        }

    }

});
