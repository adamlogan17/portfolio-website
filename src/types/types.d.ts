type Image = {
  src:string,
  alt:string,
  background?:string,
  width?:string,
  height?:string,
  boxShadow?:boolean,
  resizeOnSmallScreen?:boolean,
  imageStyle?:MotionStyle
}

type DownloadItem = {
  name:string,
  description?:string,
  avatar?:Image,
  download:string
}

type ProjectCard = {
  title:string,
  img: Image,
  text:string,
  projectUrl:string
}

type Role = {
  roleName:string,
  dateRange?:string,
  description:JSX.Element
}

type Institution = {
  title:string,
  dateRange:string,
  logo:Image,
  role:Role[]
}