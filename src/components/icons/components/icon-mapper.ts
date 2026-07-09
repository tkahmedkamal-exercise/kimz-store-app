import AlertTriangle from "./alert-triangle";
import ArrowLeft from "./arrow-left";
import Bell from "./bell";
import Biometric from "./biometric";
import BoxOff from "./box-off";
import Briefcase from "./briefcase";
import Building from "./building";
import Camera from "./camera";
import Category from "./category";
import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronLeft from "./chevron-left";
import ChevronRight from "./chevron-right";
import ChevronUp from "./chevron-up";
import CircleCheck from "./circle-check";
import CreditCard from "./credit-card";
import Discount from "./discount";
import DotsVertical from "./dots-vertical";
import Download from "./download";
import Eye from "./eye";
import EyeOff from "./eye-off";
import FileText from "./file-text";
import Heart from "./heart";
import HeartFilled from "./heart-filled";
import Help from "./help";
import Home from "./home";
import ImageOff from "./image-off";
import InfoCircle from "./info-circle";
import Layers from "./layers";
import Loader from "./loader";
import Lock from "./lock";
import Logout from "./logout";
import Mail from "./mail";
import MailOpened from "./mail-opened";
import MapPin from "./map-pin";
import Palette from "./palette";
import Search from "./search";
import Shield from "./shield";
import ShieldX from "./shield-x";
import ShoppingBag from "./shopping-bag";
import ShoppingCart from "./shopping-cart";
import Star from "./star";
import Truck from "./truck";
import User from "./user";
import WifiOff from "./wifi-off";
import World from "./world";
import X from "./x";

const iconMapper = {
  "alert-triangle": AlertTriangle,
  "arrow-left": ArrowLeft,
  bell: Bell,
  biometric: Biometric,
  "box-off": BoxOff,
  briefcase: Briefcase,
  building: Building,
  camera: Camera,
  category: Category,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "circle-check": CircleCheck,
  "credit-card": CreditCard,
  discount: Discount,
  "dots-vertical": DotsVertical,
  download: Download,
  "eye-off": EyeOff,
  eye: Eye,
  "file-text": FileText,
  "heart-filled": HeartFilled,
  heart: Heart,
  help: Help,
  home: Home,
  "image-off": ImageOff,
  "info-circle": InfoCircle,
  layers: Layers,
  loader: Loader,
  lock: Lock,
  logout: Logout,
  "mail-opened": MailOpened,
  mail: Mail,
  "map-pin": MapPin,
  palette: Palette,
  search: Search,
  "shield-x": ShieldX,
  shield: Shield,
  "shopping-bag": ShoppingBag,
  "shopping-cart": ShoppingCart,
  star: Star,
  truck: Truck,
  user: User,
  "wifi-off": WifiOff,
  world: World,
  x: X,
} as const;

export default iconMapper;
