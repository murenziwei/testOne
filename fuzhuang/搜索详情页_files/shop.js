//全局未登陆提示 可修改
var error = function(url) {
  //alert("您还没有登陆！");
  location.href = url + "?for=" + window.location.href;
};

////////////////////////////////////////////////////////////////////////商品页面操作//////////////////////////////////////////////////////////////////////
//加入购物车 numele 是装数量的元素的id 若要使用input请自行修改
function AddBuycar(classid, id, numele, callbak) {

  var num = $("#" + numele).text(); //购买数量
  if ($("#manytype").children().length) {
    var buytype = $("#manytype2 a.on").attr("data");
  }



  var success = function(user) {
    sessionStorage.clear();

    //是否选择规格
    if ($("#manytype").children().length) {

      //库存判断
      getBuycarHas(classid, id, function(maxnum) {
        if (maxnum < Number(num)) {
          alert("超出库存");
        } else {
          //存数据库
          var buyimg = $("#manytype2 a.on").children().attr("src");
          if ($.trim(buyimg) == "")
            buyimg = "no";

          var divimg = $("#divimg:checked").val();
          if (!$.trim(divimg))
            divimg = 0;

          var message = $("#message").val();

          $.ajax({
            type: "post",
            url: "/e/action/shop.php?action=addbuycar",
            data: { //data数据顺序不能修改
              num: num,
              buyimg: buyimg, //类型图片
              divimg: divimg, //定制logo
              message: message, //留言
              id: id,
              classid: classid,
              buytype: buytype, //类型的名称
              userid: user['userid'],
              url: location.href
            },
            success: function(data) {

              if (typeof callbak === "function") {
                callbak(data);
              }

            }
          });
        }
      });

    } else {
      //库存判断
      getBuycarHas(classid, id, function(maxnum) {
        if (maxnum < Number(num)) {
          alert("超出库存");
        } else {
          //存数据库
          var divimg = $("#divimg:checked").val();
          if (!$.trim(divimg))
            divimg = 0;

          var message = $("#message").val();

          $.ajax({
            type: "post",
            url: "/e/action/shop.php?action=addbuycar",
            data: { //data数据顺序不能修改
              num: num,
              buyimg: "no",
              message: message, //留言
              divimg: divimg, //定制logo
              id: id,
              classid: classid,
              userid: user['userid'],
              url: location.href
            },
            success: function(data) {

              if (typeof callbak === "function") {
                callbak(data);
              }

            }
          });
        }
      });
    }


  };

  //缓存数据
  var message = $("#message").val();
  var divimg = $("#divimg:checked").val();
  sessionStorage.message = message;
  sessionStorage.buytype = buytype;
  sessionStorage.classid = classid;
  try {
     sessionStorage.divimg = divimg;
  } catch (e) {

  } finally {

  }

  sessionStorage.hrefurl = location.href;
  sessionStorage.id = id;
  sessionStorage.num = num;
  if (typeof callbak === "function") {
    sessionStorage.qbcat = 1;
  } else {
    sessionStorage.qbcat = 0;
  }



  //判断登陆进行操作
  islogin(success, error);

}

//立即购买
function AddqBuycar(id) {

  //判断购物车是否为空
  getbuycarnum(function(num) {
    if (num == 0) {
      alert("购物车没有数据");
    } else {
      //调用立即购买var checkeds = $('[name="BuycarChoose"]:checked');
      var values = new Array();
      values.push(id);
      //设置为结算商品
      $.ajax({
        type: "post",
        url: "/e/action/shop.php?action=setaccount",
        data: {
          buycarids: JSON.stringify(values)
        },
        success: function(data) {
          if (data == "success")
            location.href = "/e/ShopSys/order/";
        }
      })

    }
  });

}

//收藏商品
function ShouCang(classid, id, callbak) {
  var from = location.href;
  $.ajax({
    type: "post",
    url: "/e/member/doaction.php?enews=ajax_AddFava",
    data: {
      from: from, //收藏页面地址
      classid: classid,
      id: id,
      cid: 0 //默认类别
    },
    success: function(data) {

      if (data == "success") {
        if (typeof callbak === "function") {
          callbak();
        }
      } else {
        alert(data);
      }
    }
  })
}

//查看购物车
function GoBuycar() {
  //判断购物车是否为空
  var success = function() {

    getbuycarnum(function(num) {
      if (num == 0) {
        alert("购物车没有数据");
      } else {
        location.href = "/e/ShopSys/buycar/";
      }
    });
  };

  islogin(success, error);
}


//////////////////////////////////////////////////////////////////////购物车页面操作///////////////////////////////////////////////////////////////////////////////

//获取购物车信息
function getBuycar_show(callbak) {
  $.ajax({
    type: "post",
    url: "/e/template/ShopSys/buycar/buycar_show.php",
    success: function(data) {
      callbak(data);
    }
  })

}


//删除选定商品
function DeleteBuyCar(callbak) {
  var arr = new Array();
  $('[name="BuycarChoose"]:checked').each(function() {
    var value = $(this).val();
    arr.push(value);
  });

  $.ajax({
    type: "post",
    url: "/e/action/shop.php?action=delbuycar",
    data: {
      buycarid: JSON.stringify(arr)
    },
    success: function(data) {
      callbak(data);
    }
  })

}

//删除一个
function DeleteOneBuyCar(value) {

  if (confirm("确认删除?"))
    $.ajax({
      type: "post",
      url: "/e/action/shop.php?action=delonebuycar",
      data: {
        buycarid: value
      },
      success: function(data) {
        //删除后重新加载购物车
        getBuycar_show(function(value) {
          $("#Buycar_show").html(value);
        });
      }
    })

}

//去结算
function BuyCarAccount() {
  //判断购物车是否为空
  getbuycarnum(function(num) {
    if (num == 0) {
      alert("购物车没有数据");
    } else {
      //调用立即购买
      var checkeds = $('[name="BuycarChoose"]:checked');
      var values = new Array();
      if (checkeds.length) {
        checkeds.each(function() {
          values.push($(this).val());
        });
        //设置为结算商品
        $.ajax({
          type: "post",
          url: "/e/action/shop.php?action=setaccount",
          data: {
            buycarids: JSON.stringify(values)
          },
          success: function(data) {
            if (data == "success")
              location.href = "/e/ShopSys/order/";
          }
        })

      } else {
        alert("你没有选择任何商品");
      }
    }

  });
}
////////////////////////////////////////////////////////////////订单页面操作//////////////////////////////////////////////////////////////////////////
//获取订单页面购物车信息
function getBuycar_order(callbak) {
  $.ajax({
    type: "post",
    url: "/e/template/ShopSys/buycar/buycar_order.php",
    success: function(data) {
      callbak(data);
    }
  })
}

//获得用户收货地址
function getAddress(userid, callbak) {
  $.ajax({
    type: "post",
    url: "/e/template/ShopSys/buycar/Address.php",
    data: {
      userid: userid
    },
    success: function(data) {
      callbak(data);
    }
  })
}


//获得礼品卡页面 获得用户收货地址
function getAddress2(userid, callbak) {
  $.ajax({
    type: "post",
    url: "/e/template/ShopSys/buycar/Address2.php",
    data: {
      userid: userid
    },
    success: function(data) {
      callbak(data);
    }
  })
}

//获得支付Api
function getPayApi(callbak) {

  $.ajax({
    type: "post",
    url: "/e/template/ShopSys/buycar/PayApi.php",
    success: function(data) {
      callbak(data);
    }
  })

}
///////////////////////////////////////////////////////////////公共操作/////////////////////////////////////////////////////////////////////////////////



//设置商品数量
function SetBuycar(classid, id, buycarid, num, error, success, salechange) {

  getBuycarHas(classid, id, function(maxnum) {
    if (maxnum < Number(num)) {
      alert("超出库存");
      error(); //超出库存回掉
    } else {

      $.ajax({
        type: "post",
        url: "/e/action/shop.php?action=editbuycar",
        data: { //data数据顺序不能修改
          buycarid: buycarid,
          num: num
        },
        success: function(data) {
          if (typeof success === "function") {
            success(); //修改成功回掉
          }
          if (data == "salechange") {
            if (typeof salechange === "function") {
              salechange(); //折扣变动 或 定制logo价格 变动 回掉
            }
          }
        }
      });
    }
  });
}

//设置临时购物车商品数量
function SetqBuycar(classid, id, num, callbak) {

}


//调取购物车数量
function getbuycarnum(callbak) {
  var success = function() {
    $.ajax({
      type: "post",
      url: "/e/action/shop.php?action=getbuycarnum",
      success: function(data) {
        callbak(data);
      }
    })
  }

  islogin(success, function() {});
}


//获取购物车库存
function getBuycarHas(classid, id, callbak) {
  $.ajax({
    type: "post",
    url: "/e/action/shop.php?action=getBuycarHas",
    data: {
      classid: classid,
      id: id
    },
    success: function(data) {
      callbak(data);
    }
  })
}


//判断用户是否登陆 回掉
function islogin(success, error) {

  $.ajax({
    type: "post",
    url: "/e/action/shop.php?action=islogin",
    dataType: "json",
    success: function(data) {
      if (data['userid'] == null) {
        error('http://www.liyinet.com/e/member/login/');
      } else {
        success(data);
      }
    }
  })

}

//二次支付使用
function AddqBuycar2(id) {


  //判断购物车是否为空
  getbuycarnum(function(num) {
    if (num == 0) {
      alert("购物车没有数据");
    } else {
      //调用立即购买var checkeds = $('[name="BuycarChoose"]:checked');
      var values = new Array();
      values = id.split("|");
      //设置为结算商品
      $.ajax({
        type: "post",
        url: "/e/action/shop.php?action=setaccount",
        data: {
          buycarids: JSON.stringify(values),
          buycarid:id
        },
        success: function(data) {
          if (data == "success")
            location.href = "/e/ShopSys/order/";
        }
      })

    }
  });

}

//序列化为json对象
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
