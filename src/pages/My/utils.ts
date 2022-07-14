export default class utilsClass {
  public static PATHNAME: string = "My";
  protected isHasPermission: boolean = false;

  access: boolean;
  key: string;

  constructor(_access: boolean, _key: string) {
    this.access = _access;
    this.key = _key;
  }

  public get Access() {
    return this.isHasPermission;
  }

  public set Access(key: boolean) {
    if (!this.key) {
      this.isHasPermission = false;
    } else {
      this.isHasPermission = true;
    }
  }
}
