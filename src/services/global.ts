

export async function queryMenus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {"obj":
          {
            "projectName":"antd pro",
            "menuList":[
              {
                "name":"控件",
                "code":null,
                "icon":"folder",
                "path":"control",
                "children":[
                  {"name":"下拉菜单","code":null,"icon":null,"path":"dropdown","children":null},
                  {"name":"Cascader级联选择","code":null,"icon":null,"path":"cascader","children":null},
                  {"name":"Select选择器","code":null,"icon":null,"path":"select","children":null},
                  {"name":"Table表格","code":null,"icon":null,"path":"table","children":null},
                  {"name":"DataPicker日期选择框","code":null,"icon":null,"path":"dataPicker","children":null},
                ]
              },
              {
                "name":"订阅消息管理",
                "code":null,
                "icon":"folder",
                "path":"message",
                "children":[
                  {"name":"订阅通知列表","code":null,"icon":null,"path":"list","children":null},
                  {"name":"新增订阅通知","code":null,"icon":null,"path":"new","children":null}
                ]
              },
              {
                "name":"App配置管理",
                "code":null,
                "icon":"folder",
                "path":"version",
                "children":[
                  {"name":"App更新管理","code":null,"icon":null,"path":"list","children":null}
                ]
              },
              {
                "name":"商户管理",
                "code":null,
                "icon":"folder",
                "path":"merchant",
                "children":[
                  {"name":"创建商户","code":null,"icon":null,"path":"create","children":null}
                ]
              }
            ]
          },
          "msg":"成功",
          "status":200
        }
      )
    }, 1000)
  })
};