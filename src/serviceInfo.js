import Trafik from "./assets/services/trafik.png";
import Saglik from "./assets/services/saglik.png";
import Sorumluluk from "./assets/services/sorumluluk.png";
import Konut from "./assets/services/konut.png";
import Emekilik from "./assets/services/emeklilik.png";
import Diger from "./assets/services/diger.png";
const serviceInfo=[
    {
        title:"Araç Sigortaları",
        subServices: ["Zorunlu Trafik Sigortası","Kasko","Feri Kaza","Yan Ürün Sigortaları"],
        image:Trafik,
    },
    {
        title:"SAĞLIK SİGORTALARI",
        subServices: ["Bireysel Sağlık","Seyahat Sağlık","Özel Sağlık","Seyahat Sağlık Yabancı"],
        image:Saglik
    },
    {
        title:"Sorumluluk Sigortaları",
        subServices: ["Ürün Sorumluluk","Mesleki Sorumluluk","Genel Sorumluluk","Özel Sorumluluk"],
        image:Sorumluluk,
    },
    
    {
        title:"Konut ve İşyeri Sigortaları",
        subServices: ["Dask","Ev & Eşya","Site Apartman Paket","İşyeri Sigortası"],
        image:Konut
    },
    {
        title:"Emekilik ve Hayat sigortası",
        subServices: ["Bireysel Emeklilik","Hayat Sigortası"],
        image:Emekilik
    },
    
    {
        title:"Diğer Branşlar",
        subServices: ["Nakliyat","Kasko","Tekne","İnşaat All Risk"],
        image:Diger
    },
    
    
    
];
export default serviceInfo;