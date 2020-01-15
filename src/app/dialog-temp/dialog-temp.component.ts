import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from '../Domain/IDialogData';

@Component({
  selector: 'app-dialog-temp',
  templateUrl: './dialog-temp.component.html',
  styleUrls: ['./dialog-temp.component.css']
})

export class DialogTempComponent implements OnInit {

  yourName = '';

  dialogName = '';
  dialogHeight = 0;
  dialogWeight = 0;

  /**
   * 建構子
   * @param MatDialogRef<DialogTempComponent> dialogRef 外部指定要使用的 Dialog 參考物件
   * @param IDialogData data 外部傳入給 Dialog 使用的資料物件內容
   */
  constructor(
    public dialogRef: MatDialogRef<DialogTempComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) {

    // 可以使用指值的方式避免修改到外部 data 變數
    // 但是要注意，如果是更深一層物件要指向則必須注意 禁止 直接指向物件參考
    this.dialogName = this.data.name;
    this.dialogHeight = this.data.height;
    this.dialogWeight = this.data.weight;
  }

  ngOnInit(): void {

  }

  /**
   * 使用者點擊關閉按鈕
   */
  onSaveClick(): void {
    console.log('使用者關閉按鈕');
    this.data.name = this.dialogName;
    this.data.height = this.dialogHeight;
    this.data.weight = this.dialogWeight;

    this.dialogRef.close(this.data);
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    this.dialogName = this.data.name;
    this.dialogHeight = this.data.height;
    this.dialogWeight = this.data.weight;
  }
}
