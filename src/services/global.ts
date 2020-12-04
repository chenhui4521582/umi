

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
                  {"name":"全局modules","code":null,"icon":null,"path":"modules","children":null},
                  {"name":"添加删除菜单","code":null,"icon":null,"path":"manageMenu","children":null},
                ]
              },
              {
                "name":"Hook",
                "code":null,
                "icon":"folder",
                "path":"hook",
                "children":[
                  {"name":"useState","code":null,"icon":null,"path":"state","children":null},
                  {"name":"useEffect","code":null,"icon":null,"path":"effect","children":null},
                  {"name":"useReducer","code":null,"icon":null,"path":"reducer","children":null},
                  {"name":"useMemo","code":null,"icon":null,"path":"memo","children":null}
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

export function queryTreeData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
            "id": null,
            "code": "135fbe1fa5404a1595c4bdf3375add93",
            "name": "技术提供商管理",
            "projectCode": null,
            "projectName": null,
            "url": "/techpro",
            "parentCode": "0",
            "status": null,
            "createTime": null,
            "updateTime": null,
            "sort": 100,
            "type": null,
            "resourceLevel": 1,
            "childrenNode": [
                {
                    "id": null,
                    "code": "d078c6ac2eef4ae2ae57cfccae126522",
                    "name": "技术提供商列表",
                    "projectCode": null,
                    "projectName": null,
                    "url": "/imAdmin/techpro/list",
                    "parentCode": "135fbe1fa5404a1595c4bdf3375add93",
                    "status": null,
                    "createTime": null,
                    "updateTime": null,
                    "sort": 100,
                    "type": null,
                    "resourceLevel": 2,
                    "childrenNode": [
                        {
                            "id": null,
                            "code": "268115da48e540aa8e30433dfc22e9da",
                            "name": "列表",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/listOauth2Client",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 100,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "0ad643a00b0e4559af3b457272dbfbb7",
                            "name": "新增",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/saveOauth2Client",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 200,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "d52aa0d975f94d6e884df18ccc39cc7b",
                            "name": "修改",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/updateOauth2Client",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 300,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "276f1fe105454eddb1b496f4c3710e46",
                            "name": "删除",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/deleteOauth2Client",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 400,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "e3e1f1f8617c40f7a2f65aaed79581bd",
                            "name": "技术提供商详情",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/oauth2ClientDetail",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 500,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "38753849febb4172bf33d43f8fefbe0d",
                            "name": "修改IP白名单",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/updateIpWhiteList",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 600,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "d8ba0e17a4424ddeb7806188cd78683a",
                            "name": "修改通知地址",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/updateWebServerRedirectUri",
                            "parentCode": "d078c6ac2eef4ae2ae57cfccae126522",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 700,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        }
                    ]
                }
            ]
        },
        {
            "id": null,
            "code": "b7e752194d8c4b3bb6e6e0a292499da1",
            "name": "订阅消息管理",
            "projectCode": null,
            "projectName": null,
            "url": "/message",
            "parentCode": "0",
            "status": null,
            "createTime": null,
            "updateTime": null,
            "sort": 200,
            "type": null,
            "resourceLevel": 1,
            "childrenNode": [
                {
                    "id": null,
                    "code": "7f0feb846d0f4af1ab3dc76103fe484b",
                    "name": "订阅通知列表",
                    "projectCode": null,
                    "projectName": null,
                    "url": "/imAdmin/message/list",
                    "parentCode": "b7e752194d8c4b3bb6e6e0a292499da1",
                    "status": null,
                    "createTime": null,
                    "updateTime": null,
                    "sort": 100,
                    "type": null,
                    "resourceLevel": 2,
                    "childrenNode": [
                        {
                            "id": null,
                            "code": "67c6123aa3b14423b7e30fa22bd35a8d",
                            "name": "列表",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/messageTemplate/listMessageTemplate",
                            "parentCode": "7f0feb846d0f4af1ab3dc76103fe484b",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 100,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "b6b35240d4c44575ad4a357fa8dd775c",
                            "name": "修改",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/messageTemplate/updateMessageTemplate",
                            "parentCode": "7f0feb846d0f4af1ab3dc76103fe484b",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 200,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "ed46bc9189da4d4bbf27c2a5cb2823b3",
                            "name": "删除",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/messageTemplate/deleteMessageTemplate",
                            "parentCode": "7f0feb846d0f4af1ab3dc76103fe484b",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 300,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "310c317577cd491d998cca10967a4a67",
                            "name": "详情",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/messageTemplate/messageTemplateDetail",
                            "parentCode": "7f0feb846d0f4af1ab3dc76103fe484b",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 400,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "1f0af75bdd7c4f09a34c7fcb0a8fefe5",
                            "name": "技术提供商下拉",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/oauth2Client/clientDown",
                            "parentCode": "7f0feb846d0f4af1ab3dc76103fe484b",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 500,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        }
                    ]
                },
                {
                    "id": null,
                    "code": "b3c5fd890c4448829d22677ba3c9cc5a",
                    "name": "新增订阅通知",
                    "projectCode": null,
                    "projectName": null,
                    "url": "/imAdmin/message/new",
                    "parentCode": "b7e752194d8c4b3bb6e6e0a292499da1",
                    "status": null,
                    "createTime": null,
                    "updateTime": null,
                    "sort": 200,
                    "type": null,
                    "resourceLevel": 2,
                    "childrenNode": [
                        {
                            "id": null,
                            "code": "23a10df66b204d4c8282dedc90b64aaf",
                            "name": "新增",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/messageTemplate/saveMessageTemplate",
                            "parentCode": "b3c5fd890c4448829d22677ba3c9cc5a",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 100,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        }
                    ]
                }
            ]
        },
        {
            "id": null,
            "code": "2788fc5c33054f86bec4c4561c01d906",
            "name": "App配置管理",
            "projectCode": null,
            "projectName": null,
            "url": "/version",
            "parentCode": "0",
            "status": null,
            "createTime": null,
            "updateTime": null,
            "sort": 300,
            "type": null,
            "resourceLevel": 1,
            "childrenNode": [
                {
                    "id": null,
                    "code": "d3ce4437aa2544fba6643fdf1631fe18",
                    "name": "App更新管理",
                    "projectCode": null,
                    "projectName": null,
                    "url": "/imAdmin/version/list",
                    "parentCode": "2788fc5c33054f86bec4c4561c01d906",
                    "status": null,
                    "createTime": null,
                    "updateTime": null,
                    "sort": 100,
                    "type": null,
                    "resourceLevel": 2,
                    "childrenNode": [
                        {
                            "id": null,
                            "code": "797265ed937b4e24a5fcf249865b060c",
                            "name": "列表",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/listVersion",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 100,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "89db91d142844788a24b7fe0efc8abdc",
                            "name": "新增",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/saveVersion",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 200,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "0a2cf94c514049bdb361f8aef7bd40fd",
                            "name": "修改",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/updateVersion",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 300,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "b07a6374742e4ca4ba06af271ab1753e",
                            "name": "删除",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/deleteVersion",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 400,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "f3f7b0560a394e15874a9d36f9aac9f5",
                            "name": "修改版本状态",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/updateVersionStatus",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 500,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        },
                        {
                            "id": null,
                            "code": "4bbe71c190f04c6b82e0c996f076ae0f",
                            "name": "上传文件",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/version/uploadFile",
                            "parentCode": "d3ce4437aa2544fba6643fdf1631fe18",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 600,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        }
                    ]
                }
            ]
        },
        {
            "id": null,
            "code": "fdc2cfd71ea64b0c82a96023f4b997d2",
            "name": "商户管理",
            "projectCode": null,
            "projectName": null,
            "url": "/merchant",
            "parentCode": "0",
            "status": null,
            "createTime": null,
            "updateTime": null,
            "sort": 400,
            "type": null,
            "resourceLevel": 1,
            "childrenNode": [
                {
                    "id": null,
                    "code": "6681b572a40948d1acf60513b394f4c4",
                    "name": "创建商户",
                    "projectCode": null,
                    "projectName": null,
                    "url": "/imAdmin/merchant/create",
                    "parentCode": "fdc2cfd71ea64b0c82a96023f4b997d2",
                    "status": null,
                    "createTime": null,
                    "updateTime": null,
                    "sort": 100,
                    "type": null,
                    "resourceLevel": 2,
                    "childrenNode": [
                        {
                            "id": null,
                            "code": "72731817df514eebbbeae6bb4a38059a",
                            "name": "上传文件",
                            "projectCode": null,
                            "projectName": null,
                            "url": "/imAdmin/merchant/uploadFile",
                            "parentCode": "6681b572a40948d1acf60513b394f4c4",
                            "status": null,
                            "createTime": null,
                            "updateTime": null,
                            "sort": 100,
                            "type": null,
                            "resourceLevel": 3,
                            "childrenNode": []
                        }
                    ]
                }
            ]
        }
    ])
    }, 1000)
  })
}