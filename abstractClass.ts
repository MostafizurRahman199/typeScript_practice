abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getNewFeatures(): void;

  getReels():number{
    return 10;
  }
  
}

class Facebook extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public HDCamera: boolean
  ) {
    super(cameraMode, filter);
  }

  getNewFeatures(): void {
    console.log("New Features");
  }
}
