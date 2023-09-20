/**
 * Used to represent an image
 * @alias Image
 * @typedef {object} Image
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image, displayed if the image can't be shown.
 * @property {string} [background] - Optional background property for the image.
 * @property {string} [width] - Optional width of the image.
 * @property {string} [height] - Optional height of the image.
 * @property {boolean} [boxShadow] - Optional property to determine if the image should have a shadow.
 * @property {boolean} [resizeOnSmallScreen] - Optional property to determine if the image should resize on smaller screens.
 * @property {MotionStyle} [imageStyle] - Optional style property for the image using Motion (like Framer Motion), this overrides all other styles including those defined above.
 */
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

/**
 * Used to represent a file which can be downloaded
 * @alias DownloadItem
 * @typedef {object} DownloadItem
 * @property {string} name - Name of the downloadable item.
 * @property {string} [description] - Optional description of the item.
 * @property {Image} [avatar] - Optional avatar (or icon) associated with the item.
 * @property {string} download - Link or path to the downloadable resource.
 */
type DownloadItem = {
  name:string,
  description?:string,
  avatar?:Image,
  download:string
}

/**
 * Represents a card with a title, image, text and a link
 * @alias ProjectCard
 * @typedef {object} ProjectCard
 * @property {string} title - Title of the project.
 * @property {Image} img - Image associated with the project.
 * @property {string} text - Description or other text related to the project.
 * @property {string} projectUrl - URL link to the project.
 */
type ProjectCard = {
  title:string,
  img: Image,
  text:string,
  projectUrl:string
}

/**
 * Represents a role within an institution, such as a student or employee.
 * @alias Role
 * @typedef {object} Role
 * @property {string} roleName - Name of the role or position.
 * @property {string} [dateRange] - Optional date range when the role was held.
 * @property {JSX.Element} description - Detailed description or tasks of the role, using JSX elements.
 */
type Role = {
  roleName:string,
  dateRange?:string,
  description:JSX.Element
}

/**
 * Represents an institution, such as a school or company.
 * @alias Institution
 * @typedef {object} Institution
 * @property {string} title - Name or title of the institution.
 * @property {string} dateRange - Date range associated with the institution or tenure.
 * @property {Image} logo - Logo or emblem of the institution.
 * @property {Role} [description] - Optional general description about the tenure at the institution, this will not be shown in the accordion.
 * @property {Role[]} role - Array of specific roles or positions held at the institution.
 */
type Institution = {
  title:string,
  dateRange:string,
  logo:Image,
  description?:Role,
  role:Role[]
}

/**
 * KeyValuePair
 * @alias KeyValuePair
 * @typedef {object} KeyValuePair
 * @property {string} [title] - Optional title for the key-value pair grouping.
 * @property {{key: string, value: string}[]} data - Array of key-value pairs.
 */
type KeyValuePair = {
  title?:string,
  data:{
    key:string,
    value:string
  }[]
}

type CustomPallette = {
  primary?:ColorOptions,
  secondary?:ColorOptions,
  error?:ColorOptions,
  warning?:ColorOptions,
  info?:ColorOptions,
  success?:ColorOptions,
  text:TextOptions,
  background: {
    default:string,
    paper:string
  }
}

type ColorOptions = {
  main?:string,
  light?:string,
  dark?:string,
  contrastText?:string
}

type TextOptions = {
  primary:string,
  secondary?:string,
  disabled?:string,
  h1?:string,
  h2?:string,
  h3?:string,
  h4?:string,
  h5?:string,
  h6?:string
}