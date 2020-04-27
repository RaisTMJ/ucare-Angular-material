import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {UploadCareHelper} from 'src/app/uploadcare.helper';
import {environment} from 'src/environments/environment';
import {UcWidgetComponent} from 'ngx-uploadcare-widget';

@Component({
  selector: 'app-im-grid',
  templateUrl: 'src/app/im-grid/im-grid.component.html',
  styleUrls: ['src/app/im-grid/im-grid.component.scss']
})
export class ImGridComponent implements OnInit {

  @ViewChild('uc') uc: UcWidgetComponent;

  @Input() public useMaxDrawing = false;
  @Input() public useMaxSize = false;
  @Input() public useMinSize = false;
  @Input() public store = false;
  @Input() public listFileID = [];
  @Input() public files: any[];
  @Input() public maxFileCount = 0;
  @Input() public canOpen = true;
  @Input() public canAdd = true;
  @Input() public canRemove = true;
  @Input() public fileType = '*';
  @Input() public xsColumnCount = 1;
  @Input() public smColumnCount = 2;
  @Input() public mdColumnCount = 3;
  @Input() public lgColumnCount = 4;
  @Input() public xlColumnCount = 5;
  @Output() public onRemove = new EventEmitter<any>();
  @Output() public onUpload = new EventEmitter<File[]>();
  @Output() public onUploadCompleteCb = new EventEmitter<any[]>();
  @Output() public onRemoveCb = new EventEmitter<any>();
  public columnCount: number;
  lx = [];

  readonly getImageURL = UploadCareHelper.getImageURL;
  readonly getSrcSet = UploadCareHelper.getSrcSet;
  readonly getSizes = UploadCareHelper.getSizes;
  readonly PUBLIC_KEY = environment.uploadcare.pub_key;

  constructor() {
  }

  ngOnInit() {
    const AppConstant = {
      MAX_FILE: 100 * 1024 * 1024,
      MIN_FILE: 50 * 1024
    };


    this.calculateColumnCount(window.innerWidth);
    setTimeout(() => {
      if (this.useMaxDrawing) {
        this.uc.validators.push(UploadCareHelper.maxSize(AppConstant.MAX_FILE));
      }

      if (this.useMaxSize) {
        this.uc.validators.push(UploadCareHelper.maxSize(AppConstant.MAX_FILE));
      }

      if (this.useMinSize) {
        this.uc.validators.push(UploadCareHelper.minSize(AppConstant.MIN_FILE));
      }
      console.log(this.uc);
      this.uc.validators.push(UploadCareHelper.onlyImage());
    }, 1000);


  }

  onResize(event) {
    this.calculateColumnCount(event.target.innerWidth);
  }

  calculateColumnCount(width) {
    if (width > 1920) {
      this.columnCount = this.xlColumnCount;
    } else if (width > 1280) {
      this.columnCount = this.lgColumnCount;
    } else if (width > 960) {
      this.columnCount = this.mdColumnCount;
    } else if (width > 600) {
      this.columnCount = this.smColumnCount;
    } else {
      this.columnCount = this.xsColumnCount;
    }
  }

  uploadFile() {
    this.uc.openDialog();
  }

  removeFile(uuid) {
    this.onRemoveCb.emit({
      file_id: uuid
    });
  }

  onChange(file) {
    this.lx = [];
    if (file.files) {
      file.files().forEach((px) => {
        px.then(info => {
          this.lx.push(info);
        });
      });
    }
  }

  onUploadComplete(info) {
    const la = [];
    for (const o of this.lx) {
      la.push(o.uuid);
    }
    console.log(this.uc);
    console.log(info);

    this.onUploadCompleteCb.emit(la);
  }

  onProgress(o) {
    console.log(o);

  }

  get canAddMore() {
    return this.canAdd;
  }
}
