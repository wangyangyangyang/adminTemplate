
export const sData =  [
    {
        "name": "RiskSourceManage",
        "path": "/riskSourceManage",
        "hidden": false,
        "redirect": "noRedirect",
        "component": "Layout",
        "alwaysShow": true,
        "meta": {
            "title": "风险源管理",
            "icon": "",
            "noCache": false,
            "link": null
        },
        "children": [ 
            {
                "name": "EnterpriseSide",
                "path": "enterpriseSide",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                    "title": "风险源管理-企业端",
                    "icon": "",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "InformationFilling",
                        "path": "informationFilling",
                        "hidden": false,
                        "component": "riskSourceManage/enterpriseSide/informationFilling/index",
                        "meta": {
                            "title": "风险源信息填报",
                            "icon": "form",
                            "noCache": false,
                            "link": null
                        },
                        
                    },
                    {
                        "name": "CheckAndReport",
                        "path": "checkAndReport",
                        "hidden": false,
                        "component": "riskSourceManage/enterpriseSide/checkAndReport/index",
                        "meta": {
                            "title": "风险源隐患排查上报",
                            "icon": "logininfor",
                            "noCache": false,
                            "link": null
                        }

                    },
                    // 三級菜单结构示例
                    // {
                    //     "name": "CheckAndReport",
                    //     "path": "checkAndReport",
                    //     "hidden": false,
                    //      "component": "ParentView",
                    //      "alwaysShow": true,   
                    //     "meta": {
                    //         "title": "风险源隐患排查上报",
                    //         "icon": "logininfor",
                    //         "noCache": false,
                    //         "link": null
                    //     },
                    //     children:[
                    //         {
                    //             "name": "CheckAndReport",
                    //             "path": "checkAndReport",
                    //             "hidden": false,
                    //             "component": "riskSourceManage/enterpriseSide/checkAndReport/index",
                    //             "meta": {
                    //                 "title": "风险源隐患排查上报",
                    //                 "icon": "logininfor",
                    //                 "noCache": false,
                    //                 "link": null
                    //             },
                    //         }
                    //     ]

                    // }
                ]
            },
            {
                "name": "ManagementSide",
                "path": "managementSide",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                    "title": "风险源管理-管理端",
                    "icon": "",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "InformationReview",
                        "path": "informationReview",
                        "hidden": false,
                        "component": "riskSourceManage/managementSide/informationReview/index",
                        "meta": {
                            "title": "企业填报信息审核",
                            "icon": "form",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "InformationView",
                        "path": "informationView",
                        "hidden": false,
                        "component": "riskSourceManage/managementSide/informationView/index",
                        "meta": {
                            "title": "企业信息填报查看",
                            "icon": "logininfor",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "Trouble",
                        "path": "trouble",
                        "hidden": false,
                        "component": "riskSourceManage/managementSide/trouble/index",
                        "meta": {
                            "title": "环境风险源隐患排查",
                            "icon": "logininfor",
                            "noCache": false,
                            "link": null
                        }
                    }
                ]
            },
            {
              "name": "RiskSourceInformationBase",
              "path": "riskSourceInformationBase",
              "hidden": false,
              "redirect": "noRedirect",
              "component": "ParentView",
              "alwaysShow": true,
              "meta": {
                "title": "风险源信息库",
                "icon": "",
                "noCache": false,
                "link": null
              },
              children: [
                // Gas station Dangerous chemicals
                {
                    "name": "GasStation",
                    "path": "gasStation",
                    "hidden": false,
                    "component": "riskSourceManage/riskSourceInformationBase/gasStation/index",
                    "meta": {
                      "title": "企业信息加油站",
                      "icon": "form",
                      "noCache": false,
                      "link": null
                    }
                },
                {
                    "name": "DangerousChemicals",
                    "path": "dangerousChemicals",
                    "hidden": false,
                    "component": "riskSourceManage/riskSourceInformationBase/dangerousChemicals/index",
                    "meta": {
                      "title": "企业信息危化品",
                      "icon": "form",
                      "noCache": false,
                      "link": null
                    }
                },
                {
                  "name": "EnvironmentalRiskEnterpriseInfo",
                  "path": "environmentalRiskEnterpriseInfo",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/environmentalRiskEnterpriseInfo/index",
                  "meta": {
                    "title": "环境风险企业信息",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "HazardousWasteUnit",
                  "path": "hazardousWasteUnit",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/hazardousWasteUnit/index",
                  "meta": {
                    "title": "企业信息-危废处理单位",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "TailingsPond",
                  "path": "tailingsPond",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/tailingsPond/index",
                  "meta": {
                    "title": "企业信息-尾矿库",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "OilAndGasPipeline",
                  "path": "oilAndGasPipeline",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/oilAndGasPipeline/index",
                  "meta": {
                    "title": "油气长输管道",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "PortAndWharfInformation",
                  "path": "portAndWharfInformation",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/portAndWharfInformation/index",
                  "meta": {
                    "title": "港口码头信息",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "CentralizedTreatmentPlant",
                  "path": "centralizedTreatmentPlant",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/centralizedTreatmentPlant/index",
                  "meta": {
                    "title": "集中式污水处理厂",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "CentralizedTreatmentFacilities",
                  "path": "centralizedTreatmentFacilities",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/centralizedTreatmentFacilities/index",
                  "meta": {
                    "title": "集中式垃圾处理设施",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
                {
                  "name": "RadioactiveSource",
                  "path": "radioactiveSource",
                  "hidden": false,
                  "component": "riskSourceManage/riskSourceInformationBase/radioactiveSource/index",
                  "meta": {
                    "title": "放射源",
                    "icon": "form",
                    "noCache": false,
                    "link": null
                  }
                },
              ]
            }
        ]
    },
    {
        "name": "EmergencySM",
        "path": "/emergencySM",
        "hidden": false,
        "redirect": "noRedirect",
        "component": "Layout",
        "alwaysShow": true,
        "meta": {
            "title": "应急保障管理",
            "icon": "emergencySM",
            "noCache": false,
            "link": null
        },
        "children": [
            {
                "name": "EmergencyManagement",
                "path": "emergencyManagement",
                "hidden": false,
                "component": "emergencySM/emergencyManagement/index",
                "meta": {
                    "title": "应急演练管理",
                    "icon": "emergencyManagement",
                    "noCache": false,
                    "link": null
                }
            },
            {
                "name": "EmergencyMaterialAndEquipment",
                "path": "emergencyMaterialAndEquipment",
                "hidden": false,
                "component": "emergencySM/emergencyMaterialAndEquipment/index",
                "meta": {
                    "title": "应急物资与设备",
                    "icon": "emergencyMaterialAndEquipment",
                    "noCache": false,
                    "link": null
                }
            },
            {
                "name": "EmergencySpaceAndFacilities",
                "path": "emergencySpaceAndFacilities",
                "hidden": false,
                "component": "emergencySM/emergencySpaceAndFacilities/index",
                "meta": {
                    "title": "应急空间与设施",
                    "icon": "emergencySpaceAndFacilities",
                    "noCache": false,
                    "link": null
                }
            },
            
            {
                "name": "EmergencyTeam",
                "path": "emergencyTeam",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                    "title": "应急队伍",
                    "icon": "emergencyTeam",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "ExpertTeam",
                        "path": "expertTeam",
                        "hidden": false,
                        "component": "emergencySM/emergencyTeam/expertTeam/index",
                        "meta": {
                            "title": "专家队伍",
                            "icon": "form",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "TestingOrganization",
                        "path": "testingOrganization",
                        "hidden": false,
                        "component": "emergencySM/emergencyTeam/testingOrganization/index",
                        "meta": {
                            "title": "监测机构",
                            "icon": "testingOrganization",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "GovernmentEmergencyPersonnel",
                        "path": "governmentEmergencyPersonnel",
                        "hidden": false,
                        "component": "emergencySM/emergencyTeam/governmentEmergencyPersonnel/index",
                        "meta": {
                            "title": "政府应急人员",
                            "icon": "governmentEmergencyPersonnel",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "EnterpriseEmergencyPersonnel",
                        "path": "enterpriseEmergencyPersonnel",
                        "hidden": false,
                        "component": "emergencySM/emergencyTeam/enterpriseEmergencyPersonnel/index",
                        "meta": {
                            "title": "企业应急人员",
                            "icon": "enterpriseEmergencyPersonnel",
                            "noCache": false,
                            "link": null
                        }
                    }
                ]
            },
            {
                "name": "EmergencySpecificationLibrary",
                "path": "emergencySpecificationLibrary",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                    "title": "应急规范库",
                    "icon": "emergencySpecificationLibrary",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "EventCaseBase",
                        "path": "eventCaseBase",
                        "hidden": false,
                        "component": "emergencySM/emergencySpecificationLibrary/eventCaseBase/index",
                        "meta": {
                            "title": "事件案例库",
                            "icon": "eventCaseBase",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "LawsAndRegulationsLibrary",
                        "path": "lawsAndRegulationsLibrary",
                        "hidden": false,
                        "component": "emergencySM/emergencySpecificationLibrary/lawsAndRegulationsLibrary/index",
                        "meta": {
                            "title": "法律法规库",
                            "icon": "lawsAndRegulationsLibrary",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                      "name": "LawsAndRegulationsLibraryDetail",
                      "path": "lawsAndRegulationsLibraryDetail",
                      "hidden": true,
                      "component": "emergencySM/emergencySpecificationLibrary/lawsAndRegulationsLibrary/detail",
                      "meta": {
                          "title": "法律法规库",
                          "icon": "lawsAndRegulationsLibraryDetail",
                          "noCache": false,
                          "link": null
                      }
                    },
                    {
                        "name": "TechnicalSpecificationLibrary",
                        "path": "technicalSpecificationLibrary",
                        "hidden": false,
                        "component": "emergencySM/emergencySpecificationLibrary/technicalSpecificationLibrary/index",
                        "meta": {
                            "title": "技术规范库",
                            "icon": "technicalSpecificationLibrary",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "EnvironmentalRiskMaterialWarehouse",
                        "path": "environmentalRiskMaterialWarehouse",
                        "hidden": false,
                        "component": "emergencySM/emergencySpecificationLibrary/environmentalRiskMaterialWarehouse/index",
                        "meta": {
                            "title": "环境风险物资库",
                            "icon": "environmentalRiskMaterialWarehouse",
                            "noCache": false,
                            "link": null
                        }
                    }
                ]
            },
            
           
        ]
    },
    {
        "name": "EmergencyResponseDuty",
        "path": "/emergencyResponseDuty",
        "hidden": false,
        "redirect": "noRedirect",
        "component": "Layout",
        "alwaysShow": true,
        "meta": {
            "title": "应急响应值守",
            "icon": "emergencyResponseDuty",
            "noCache": false,
            "link": null
        },
        "children": [
           
            {
                "name": "EmergencyDuty",
                "path": "emergencyDuty",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                    "title": "应急值守",
                    "icon": "emergencyDuty",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "DutyManagement",
                        "path": "dutyManagement",
                        "hidden": false,
                        "component": "emergencyResponseDuty/emergencyDuty/dutyManagement/index",
                        "meta": {
                            "title": "值班管理",
                            "icon": "dutyManagement",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "PublicOpinionMonitoring",
                        "path": "publicOpinionMonitoring",
                        "hidden": false,
                        "component": "emergencyResponseDuty/emergencyDuty/publicOpinionMonitoring/index",
                        "meta": {
                            "title": "舆情盯控",
                            "icon": "publicOpinionMonitoring",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "NewItem",
                        "path": "newItem",
                        "hidden": false,
                        "component": "emergencyResponseDuty/emergencyDuty/newItem/index",
                        "meta": {
                            "title": "新建事项",
                            "icon": "newItem",
                            "noCache": false,
                            "link": null
                        }
                    },
                    {
                        "name": "EventAccount",
                        "path": "eventAccount",
                        "hidden": false,
                        "component": "emergencyResponseDuty/emergencyDuty/eventAccount/index",
                        "meta": {
                            "title": "事项台账",
                            "icon": "eventAccount",
                            "noCache": false,
                            "link": null
                        }
                    }
                ]
            },
            {
              "name": "EmergencyGuidance",
              "path": "emergencyGuidance",
              "hidden": false,
              "component": "emergencyResponseDuty/emergencyGuidance/index",
              "meta": {
                  "title": "应急指导手册",
                  "icon": "emergencyGuidance",
                  "noCache": false,
                  "link": null
              }
            },
            // {
            //     "name": "emergencyInstructionManual",
            //     "path": "emergencyInstructionManual",
            //     "hidden": false,
            //     "redirect": "noRedirect",
            //     "component": "ParentView",
            //     "alwaysShow": true,
            //     "meta": {
            //         "title": "应急指导手册",
            //         "icon": "emergencyInstructionManual",
            //         "noCache": false,
            //         "link": null
            //     },
            //     "children": [
            //         {
            //             "name": "EventCaseBase",
            //             "path": "eventCaseBase",
            //             "hidden": false,
            //             "component": "emergencySM/emergencyInstructionManual/eventCaseBase/index",
            //             "meta": {
            //                 "title": "事件案例库",
            //                 "icon": "eventCaseBase",
            //                 "noCache": false,
            //                 "link": null
            //             }
            //         },
            //         {
            //             "name": "LawsAndRegulationsLibrary",
            //             "path": "lawsAndRegulationsLibrary",
            //             "hidden": false,
            //             "component": "emergencySM/emergencyInstructionManual/lawsAndRegulationsLibrary/index",
            //             "meta": {
            //                 "title": "法律法规库",
            //                 "icon": "lawsAndRegulationsLibrary",
            //                 "noCache": false,
            //                 "link": null
            //             }
            //         },
            //         {
            //             "name": "TechnicalSpecificationLibrary",
            //             "path": "technicalSpecificationLibrary",
            //             "hidden": false,
            //             "component": "emergencySM/emergencyInstructionManual/technicalSpecificationLibrary/index",
            //             "meta": {
            //                 "title": "技术规范库",
            //                 "icon": "technicalSpecificationLibrary",
            //                 "noCache": false,
            //                 "link": null
            //             }
            //         },
            //         {
            //             "name": "EnvironmentalRiskMaterialWarehouse",
            //             "path": "environmentalRiskMaterialWarehouse",
            //             "hidden": false,
            //             "component": "emergencySM/emergencyInstructionManual/environmentalRiskMaterialWarehouse/index",
            //             "meta": {
            //                 "title": "环境风险物资库",
            //                 "icon": "environmentalRiskMaterialWarehouse",
            //                 "noCache": false,
            //                 "link": null
            //             }
            //         }
            //     ]
            // },
            
           
        ]
    },
    {
      "name": "StatisticalAnalysis",
      "path": "/statisticalAnalysis",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "统计分析",
        "icon": "statisticalAnalysis",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "CompletionOfEnterpriseFiling",
          "path": "completionOfEnterpriseFiling",
          "hidden": false,
          "component": "statisticalAnalysis/completionOfEnterpriseFiling/index",
          "meta": {
              "title": "企业备案完成情况统计分析",
              "icon": "completionOfEnterpriseFiling",
              "noCache": false,
              "link": null
          }
        },
        {
          "name": "EnterpriseRisksAndHiddenDangers",
          "path": "enterpriseRisksAndHiddenDangers",
          "hidden": false,
          "component": "statisticalAnalysis/enterpriseRisksAndHiddenDangers/index",
          "meta": {
              "title": "企业风险隐患排查统计",
              "icon": "enterpriseRisksAndHiddenDangers",
              "noCache": false,
              "link": null
          }
        },
        {
          "name": "EnterpriseEnvironmentalRiskLevel",
          "path": "enterpriseEnvironmentalRiskLevel",
          "hidden": false,
          "component": "statisticalAnalysis/enterpriseEnvironmentalRiskLevel/index",
          "meta": {
              "title": "企业环境风险等级统计",
              "icon": "enterpriseEnvironmentalRiskLevel",
              "noCache": false,
              "link": null
          }
        },
        {
          "name": "EnvironmentalEventsStatistics",
          "path": "environmentalEventsStatistics",
          "hidden": false,
          "component": "statisticalAnalysis/environmentalEventsStatistics/index",
          "meta": {
              "title": "关联环境事件统计",
              "icon": "environmentalEventsStatistics",
              "noCache": false,
              "link": null
          }
        },
      ]
    },
]

