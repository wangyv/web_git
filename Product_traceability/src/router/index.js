import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Control from '@/components/Control'


import EditInfo from '@/components/controls/EditInfo'
/* 控制台的子路由 */

// 基础管理
import BaseInfo from '@/components/controls/BasicManagement/BaseInfo'
import CertificateInfo from '@/components/controls/BasicManagement/CertificateInfo'
import CertificationInfo from '@/components/controls/BasicManagement/CertificationInfo'
import DigitalMap from '@/components/controls/BasicManagement/DigitalMap'
import AddApprove from '@/components/controls/BasicManagement/AddApprove'
import AddInfo from '@/components/controls/BasicManagement/AddInfo'

// 产品管理
import WorkLinkList from '@/components/controls/ProductManagement/WorkLinkList'
import ProductCategoryList from '@/components/controls/ProductManagement/ProductCategoryList'
import ProductList from '@/components/controls/ProductManagement/ProductList'
import CheckSession from '@/components/controls/ProductManagement/CheckSession'

//工作场所及人员管理
import StaffManagement from '@/components/controls/PersonnelManagement/StaffManagement'
import FactoryManagement from '@/components/controls/PersonnelManagement/FactoryManagement'
import WorkingGroupManagement from '@/components/controls/PersonnelManagement/WorkingGroupManagement'

//投入品管理
import InputInventoryInformation from '@/components/controls/InputManagement/InputInventoryInformation'
import InputUsageInformation from '@/components/controls/InputManagement/InputUsageInformation'
import InputPurchaseInformation from '@/components/controls/InputManagement/InputPurchaseInformation'
import InputInformationList from '@/components/controls/InputManagement/InputInformationList'
import SupplierManagement from '@/components/controls/InputManagement/SupplierManagement'

//采收管理
import HarvestInfo from '@/components/controls/HarvestManagement/HarvestInfo'

//加工管理
import ProcessingBatch from '@/components/controls/ProcessingManagement/ProcessingBatch'
import PackagingRecords from '@/components/controls/ProcessingManagement/PackagingRecords'

//环境监测
import EnvironmentalMonitoringData from "@/components/controls/EnvironmentalMonitoring/EnvironmentalMonitoringData"

//实施影像溯源信息采集
import CameraList from "@/components/controls/ImageInfoCollection/CameraList"

//工作环节溯源信息采集
import InformationList from "@/components/controls/WorkSessionInfoCollection/InformationList"






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },{
      path: '/login',
      component: Login,
      name:'login',
      beforeEnter(to,from,next){
        from.name === null? next('/') : next();
      }
    },{
      path: '/control',
      component: Control,
      name: 'control',
      beforeEnter(to,from,next){
        from.name === null? next('/') : next();
      },
      children:[
      {
        path: '/editInfo',
        name: 'editInfo',
        component: EditInfo
      },
      // 基础管理
      {
        path: '/baseInfo',
        component: BaseInfo,
        name: 'baseInfo'
      },{
        path: '/certificateInfo',
        component: CertificateInfo,
        name: 'certificateInfo'
      },{
        path: '/certificationInfo',
        component: CertificationInfo,
        name: 'certificationInfo'
      },{
        path: '/digitalMap',
        component: DigitalMap,
        name: 'digitalMap'
      },{
        path: '/addApprove',
        name: 'addApprove',
        component: AddApprove
      },{
        path: '/addInfo',
        name: 'addInfo',
        component: AddInfo
      },
      // 产品管理
      {
        path: '/workLinkList',
        component: WorkLinkList,
        name: 'workLinkList'
      },{
        path: '/productCategoryList',
        component: ProductCategoryList,
        name: 'productCategoryList'
      },{
        path: '/productList',
        component: ProductList,
        name: 'productList'
      },{
        path: '/checkSession',
        name: 'checkSession',
        component: CheckSession
      },
      //工作场所及人员管理
      {
        path: '/staffManagement',
        component: StaffManagement,
        name: 'staffManagement'
      },{
        path: '/factoryManagement',
        component: FactoryManagement,
        name: 'factoryManagement'
      },{
        path: '/workingGroupManagement',
        component: WorkingGroupManagement,
        name: 'workingGroupManagement'
      },
      //投入品管理
      {
        path: '/inputInventoryInformation',
        component: InputInventoryInformation,
        name: 'inputInventoryInformation'
      },{
        path: '/inputUsageInformation',
        component: InputUsageInformation,
        name: 'inputUsageInformation'
      },{
        path: '/inputPurchaseInformation',
        component: InputPurchaseInformation,
        name: 'inputPurchaseInformation'
      },{
        path: '/inputInformationList',
        component: InputInformationList,
        name: 'inputInformationList'
      },{
        path: '/supplierManagement',
        component: SupplierManagement,
        name: 'supplierManagement'
      },
      //采收管理
      {
        path: '/harvestInfo',
        component: HarvestInfo,
        name: 'harvestInfo'
      },
      //加工管理
      {
        path: '/processingBatch',
        component: ProcessingBatch,
        name: 'processingBatch'
      },{
        path: '/packagingRecords',
        component: PackagingRecords,
        name: 'packagingRecords'
      },
      //环境监测
      {
        path: '/environmentalMonitoringData',
        component: EnvironmentalMonitoringData,
        name: 'environmentalMonitoringData'
      },
      //实施影像溯源信息采集
      {
        path: '/cameraList',
        component: CameraList,
        name: 'cameraList'
      },
      //工作环节溯源信息采集
      {
        path: '/informationList',
        component: InformationList,
        name: 'informationList'
      },
      ]
    }
  ]
})
