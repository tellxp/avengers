import {isNullOrUndefined} from "util";
/**
 * Created by XiaoPeng on 2016/12/27.
 */
export class Styles {
  backgroundColor: BackGroundColor;
}

class BackGroundColor {
  value: any;
  isConfigured(): boolean {
    return isNullOrUndefined(this.value) ? true : false;
  }
}
