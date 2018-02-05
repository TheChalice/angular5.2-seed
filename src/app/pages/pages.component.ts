import { Component } from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
  <el-menu [model]="0" (modelChange)="handle($event)" class="el-menu-demo" mode="horizontal"
  background-color="#545c64"
  active-text-color="#ffd04b"
  text-color="#fff">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2" title="我的工作台">
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://github.com/eleme/element-angular" target="_blank">GITHUB</a></el-menu-item>
</el-menu>
<el-tree [model]="data">
</el-tree>
<el-slider [model]=num>
</el-slider>
<router-outlet></router-outlet>
    
  `,
})
export class PagesComponent {
  data: any = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
    }]
  }, {
    label: '一级 3',
  }];
  handle(index: string): void {
    console.log(index)
  }
}
