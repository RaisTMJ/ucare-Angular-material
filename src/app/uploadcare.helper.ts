import {environment} from '../environments/environment';

export class UploadCareHelper {

    private static watermarkId = environment.uploadcare.watermarkId;


    public static getOriImageURL(id) {
        if (id && id.indexOf('fire') >= 0) {
            return id;
        }

        if (id) {
            return `https://ucarecdn.com/${id}/-`;
        }

        return 'assets/img/no-image-icon.png';
    }

    public static getImageURL(id) {
        if (id && id.indexOf('fire') >= 0) {
            return id;
        }

        if (id) {
            return `https://ucarecdn.com/${id}/-/resize/1000x/-`;
        }

        return 'assets/img/no-image-icon.png';
    }

    public static getImageURLNoWaterMark(id) {
        if (id && id.indexOf('fire') >= 0) {
            return id;
        }

        if (id) {
            return `https://ucarecdn.com/${id}/-/resize/1000x/-`;
        }

        return 'assets/img/no-image-icon.png';
    }

    public static maxSize(x) {
        return fileInfo => {
            if (!fileInfo.size) {
                return;
            }

            if (fileInfo.size > x) {
                throw new Error(`max size is ${x}`);
            }
        };
    }

    public static minSize(x) {
        return fileInfo => {
            if (!fileInfo.size) {
                return;
            }

            if (fileInfo.size < x) {
                throw new Error(`size`);
            }
        };
    }
    public static onlyImage() {
        return fileInfo => {
            if (fileInfo.isImage == null || fileInfo.isImage) {
                return;
            } else {
                throw new Error('size');
            }
        };
    }

    public static getSrcSet(id) {
        const w = '';

        // set true to add watermark
        if (id && false) {
            const listSourceSet = [`https://ucarecdn.com/${id}/-/resize/320x/- 320w`,
                `https://ucarecdn.com/${id}/-/resize/450x/- 450w`,
                `https://ucarecdn.com/${id}/-/resize/640x/- 640w`,
                `https://ucarecdn.com/${id}/-/resize/750x/- 750w`,
                `https://ucarecdn.com/${id}/-/resize/800x/- 800w`,
                `https://ucarecdn.com/${id}/-/resize/900x/- 900w`,
                `https://ucarecdn.com/${id}/-/resize/1000x/-/quality/lighter/- 1000w`,
                `https://ucarecdn.com/${id}/-/resize/1200x/-/quality/lighter/- 1200w`,
                `https://ucarecdn.com/${id}/-/resize/1500x/-/quality/lighter/- 1500w`,
                `https://ucarecdn.com/${id}/-/resize/1600x/-/quality/lighter/- 16000w`,
                `https://ucarecdn.com/${id}/-/resize/2000x/-/quality/lightest/- 2000w`];
            return listSourceSet.join(',');
        }

        return '';
    }


    public static getSrcSetNoWaterMark(id) {
        if (id) {
            const listSourceSet = [`https://ucarecdn.com/${id}/-/resize/320x/- 320w`,
                `https://ucarecdn.com/${id}/-/resize/450x/- 450w`,
                `https://ucarecdn.com/${id}/-/resize/640x/- 640w`,
                `https://ucarecdn.com/${id}/-/resize/750x/- 750w`,
                `https://ucarecdn.com/${id}/-/resize/800x/- 800w`,
                `https://ucarecdn.com/${id}/-/resize/900x/- 900w`,
                `https://ucarecdn.com/${id}/-/resize/1000x/-/quality/lighter/- 1000w`,
                `https://ucarecdn.com/${id}/-/resize/1200x/-/quality/lighter/- 1200w`,
                `https://ucarecdn.com/${id}/-/resize/1500x/-/quality/lighter/- 1500w`,
                `https://ucarecdn.com/${id}/-/resize/1600x/-/quality/lighter/- 16000w`,
                `https://ucarecdn.com/${id}/-/resize/2000x/-/quality/lightest/- 2000w`];
            return listSourceSet.join(',');
        }

        return '';
    }

    public static getSizes() {
        return '(min-width: 1000px) 50vw, 100vw';
    }
}
