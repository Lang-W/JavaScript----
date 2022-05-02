
$.ajax({
  type: "get",
  url: "https://h5.sosho.cn/server/api/community/articles?com_id=545&category_id=1&per_page=15&page=1",
  restype: "JSON", //预期设定返回类型
  success: function (res) {
    //res形参名，代表的是返回的数据
    console.log("请求成功！")
    // console.log(res) //怎么jQuery可以直接变成数组
    //DOM操作
    // console.log(res.items)
    var data = res.data.items
    var li = [],
      ul = []
    // con=[]
    $("#btn-start").click(function () {
      var data = res.data.items
      var li = [],
        ul = []
      // = $("<ul></ul>")
      //存储img地址

      var im = []
      for (l = 0; l < data.length; l++) {
        im[l] = data[l].img_path
        console.log("img地址" + im[l])

      }
      for (var i = 0; i < data.length; i++) {
        var k = 0;

        ul[k] = $("<ul></ul>")
        li[0] = "<li>" + data[i].title + "</li>"
        li[1] = "<li>" + data[i].intro + "</li>"
        li[2] = "<li>" + "点赞数： " + data[i].hits_num + "</li>"
        li[3] = "<li>" + "评论数： " + data[i].comment_num + "</li>"
        li[4] = "<li>" + "转发数： " + data[i].share_num + "</li>"
        li[5] = "<li>" + "最后更新： " + data[i].update_at + "</li>"
        li[6] = "<img src=''>" + "</img>"

        // var con = data[i].img_path
        // $('img').attr('src', data[i].img_path)

        //把li加入到ul中
        for (j = 0; j < li.length; j++) {

          ul[k].append(li[j])
          $('ul[k]').addClass('ucont')
          // console.log($('img').attr('src'));

        }

        $("div").append(ul[k])
        console.log(ul[k])
        console.log($('.con'))
        console.log($('.ucon'))
        k++
        //下面的这种直接获取没有加ul
        // for (m = 0; m < li.length; m++) {
        //   $("body").append(li[m])
        // }
        //给img加src地址

      }
      for (m = 0; m < 15; m++) {
        $('ul img').eq(m).attr('src', im[m])
        console.log($('img').eq(m).attr('src'))
      }
      // console.log($('img').attr('src'));
      // console.log($('image').attr('src'));
      // $('image').src = $('image').text();
      // console.log($('image').attr('src'))
      // $('image').text()




    })
  }
})





