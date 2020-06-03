import {CARS} from '../Actions/types';

const initialState =[
        {
          id:0,
          brand:"Mercedes-Benz",
          model:"CLS",
          year:2010,
          mileage:280000,
          price:53000,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/crrX7tJ/mercedes-benz-logo.png',
          image1:'https://i.ibb.co/ZVNyQkW/image122222.png',
          imageDetail1:'https://i.ibb.co/X7w8k5j/image1.png',
          imageDetail2:'https://i.ibb.co/jZ040Yz/image2.png',
          imageDetail3:'https://i.ibb.co/bXMPdZ0/image3.png',
          imageDetail4:'https://i.ibb.co/sPqrwYH/image4.png',
          imageDetail5:'https://i.ibb.co/K5Qj8JJ/image5.png',
          power:224,
          torque:540,
          fuelConsumption: "9 l/100",
          displacement:2987,
          cylinders: "6",
          color:"White",
          gearBox:"Automatic",
          gears: "7",
          driveChain:"Rear",
          feature1:"Rain sensor",
          feature2:"Xenon",
          feature3:"ABS",
          feature4:"Air conditioning",
          feature5:"Armrest",
          body:"Coupe",
          doors:"4",
          seats:"4",
          acceleration:"7",
          topSpeed:"246",
          height:"1403",
          length:"4913",
          wheelbase:"2854",
          width:"1873",
          description1:"The C219 Mercedes-Benz CLS-Class is the first generation of the CLS-Class range of four-door coupe.",
          description2:"The CLS-Class has only four seats and is marketed by Mercedes as a four-door coupé. For this reason, in Germany and in whole Europe the model code name is C219 while in US the CLS is more commonly named as W219 model. It was the first model globally to introduce this four-door coupe style and VW followed with the Volkswagen CC model in 2008.",
          description3:"The car is less practical than the W211 E-Class that it is based on, with less legroom, headroom, and boot space. The CLS-Class is priced above the E-Class, but below the S-Class in the Mercedes model range. It was replaced by the Mercedes-Benz CLS-Class (W218) in 2011.",
          

        },
        {
          id:1,
          brand:"Mercedes-Benz",
          model:"CLS",
          year:2006,
          mileage:290000,
          price:32500,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/crrX7tJ/mercedes-benz-logo.png',
          image1:'https://i.ibb.co/MPXgxjd/image-Mini.jpg',
          imageDetail1:'https://i.ibb.co/ZTvbBhv/image3.png',
          imageDetail2:'https://i.ibb.co/M8ztnZK/image2.png',
          imageDetail3:'https://i.ibb.co/3rW9t57/image1.png',
          imageDetail4:'https://i.ibb.co/2gRx1p1/image4.png',
          imageDetail5:'https://i.ibb.co/94651Rv/image5.png',
          power:224,
          fuelConsumption: "9 l/100",
          displacement:2987,
          cylinders: "6",
          color:"Silver",
          gearBox:"Automatic",
          gears: "5",
          driveChain:"Rear",
          feature1:"Cruise control",
          feature2:"Lumbar support",
          feature3:"Xenon ",
          feature4:"Rain sensor",
          feature5:"Seat heating",
        
        },
      
          {
            id:2,
            brand:"Citroen",
            model:"C4",
            year:2011,
            mileage:111000,
            price:23900,
            fuel:"Benzin",
            imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
            image1:'https://i.ibb.co/tsv64Y6/image-Mini.jpg',
            imageDetail1:'https://i.ibb.co/YcPHHrc/image1.png',
            imageDetail2:'https://i.ibb.co/L6PTCSL/image2.png',
            imageDetail3:'https://i.ibb.co/Q8tZqdq/image3.png',
            imageDetail4:'https://i.ibb.co/7QfXrP1/image5.png',
            imageDetail5:'https://i.ibb.co/xzgrgQc/image4.png',
            power:120,
            fuelConsumption: "7,5 l/100",
            displacement:1598,
            cylinders: "4",
            color:"Gray",
            gearBox:"Manual",
            gears: "6",
            driveChain:"Front",
            feature1:"Power windows",
            feature2:"Lumbar support",
            feature3:"Split rear seats",
            feature4:"Cruise control",
            feature5:"Armrest",
        
          },
        {
          id:3,
          brand:"Citroen",
          model:"C5",
          year:2015,
          mileage:107000,
          price:56500,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
          image1:'https://i.ibb.co/pvJXvGp/image-Mini.png',
          imageDetail1:'https://i.ibb.co/yWJ5YZq/image1.png',
          imageDetail2:'https://i.ibb.co/GnsVDSC/image3.png',
          imageDetail3:'https://i.ibb.co/6vsQvx4/image2.png',
          imageDetail4:'https://i.ibb.co/1TVvVkF/image4.png',
          imageDetail5:'https://i.ibb.co/tHnvB9J/image5.png',
          power:163,
          fuelConsumption: "6 l/100",
          displacement:1997,
          cylinders: "4",
          color:"Gray",
          gearBox:"Manual",
          gears: "6",
          driveChain:"Front",
          feature1:"Bluetooth",
          feature2:"Alloy wheels",
          feature3:"Navigation system",
          feature4:"Rain sensor",
          feature5:"Cruise control",


          
        },
        {
          id:4,
          brand:"Citroen",
          model:"C5",
          year:2013,
          mileage:76000,
          price:44900,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
          image1:'https://i.ibb.co/z5RRyVX/image-Mini.png',
          imageDetail1:'https://i.ibb.co/k988Xkn/image.png',
          imageDetail2:'https://i.ibb.co/Gddw5S2/image1.png',
          imageDetail3:'https://i.ibb.co/n6zhJJz/image2.png',
          imageDetail4:'https://i.ibb.co/kMkwWr3/image3.png',
          imageDetail5:'https://i.ibb.co/LJJWL1J/image4.png',
          power:163,
          fuelConsumption: "5,5 l/100",
          displacement:1997,
          cylinders: "4",
          color:"Black",
          gearBox:"Manual",
          gears: "6",
          driveChain:"Front",
          feature1:"Tuner TV",
          feature2:"MP3",
          feature3:"CD",
          feature4:"LED",
          feature5:"Navigation system",
      
        },
        {
          id:5,
          brand:"Citroen",
          model:"C6",
          year:2007,
          mileage:260000,
          price:17800,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
          image1:'https://i.ibb.co/DK042HZ/image-Mini.png',
          imageDetail1:'https://i.ibb.co/wBMBRKC/image1.png',
          imageDetail2:'https://i.ibb.co/pPG2Stw/image2.png',
          imageDetail3:'https://i.ibb.co/0Q8LvSR/image3.png',
          imageDetail4:'https://i.ibb.co/bs8vcts/image5.png',
          imageDetail5:'https://i.ibb.co/THPv6zH/image4.png',
          power:170,
          fuelConsumption: "8 l/100",
          displacement:2179,
          cylinders: "4",
          color:"Black",
          gearBox:"Manual",
          gears: "6",
          driveChain:"Front",
          feature1:"Air conditioning",
          feature2:"Heads-up display",
          feature3:"CD player",
          feature4:"Seat heating",
          feature5:"Ski bag",
      
        },
        {
          id:6,
          brand:"Citroen",
          model:"C6",
          year:2011,
          mileage:277343,
          price:28800,
          fuel:"Diesel",
          imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
          image1:'https://i.ibb.co/c3P1JP3/image-Mini.png',
          imageDetail1:'https://i.ibb.co/6r6QLyH/image1.png',
          imageDetail2:'https://i.ibb.co/TcHwj2c/image2.png',
          imageDetail3:'https://i.ibb.co/YX2Pyxh/image3.png',
          imageDetail4:'https://i.ibb.co/XbKCvvY/image4.png',
          imageDetail5:'https://i.ibb.co/zxPpQT6/image5.png',
          power:241,
          fuelConsumption: "10 l/100",
          displacement:2992,
          cylinders: "6",
          color:"Silver",
          gearBox:"Automatic",
          gears: "6",
          driveChain:"Front",
          feature1:"Cruise control",
          feature2:"Xenon",
          feature3:"Rain sensor",
          feature4:"Isofix",
          feature5:"Adaptive headlights",
      
        },
        {
          id:7,
          brand:"Citroen",
          model:"C4",
          year:2011,
          mileage:144542,
          price:26600,
          fuel:"Benzin",
          imageLogo:'https://i.ibb.co/yP760Sq/Citroen-Square-Logo.png',
          image1:'https://i.ibb.co/82Ncb0z/image-Mini.jpg',
          imageDetail1:'https://i.ibb.co/93kxLmb/image1.png',
          imageDetail2:'https://i.ibb.co/SwpQM5g/image2.png',
          imageDetail3:'https://i.ibb.co/LJcJ5Xy/image3.png',
          imageDetail4:'https://i.ibb.co/jg0CwgY/image5.png',
          imageDetail5:'https://i.ibb.co/zmrDsw3/image4.png',
          power:156,
          fuelConsumption: "8 l/100",
          displacement:1600,
          cylinders: "4",
          color:"Gray",
          gearBox:"Manual",
          gears: "6",
          driveChain:"Front",
          feature1:"AUX",
          feature2:"ESP",
          feature3:"CD",
          feature4:"Cruise control",
          feature5:"Bluetooth",
      
        },
      ];


export default function(state = initialState, action) {

  switch (action.type) {
    case  CARS:
      return {
        ...state,
        cars:action.payload
      }
      default: 
      return state;
  }
}