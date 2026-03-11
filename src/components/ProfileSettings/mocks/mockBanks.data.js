import OtoHavaleIcon from "../../../assets/svg/payMethods/Oto Havale.svg";
import HizliIcon from "../../../assets/svg/payMethods/Hizli Kripto.svg";
import BinanceIcon from "../../../assets/svg/payMethods/Binance Pay.svg";
import MegaHavaleIcon from "../../../assets/svg/payMethods/Mega havale.svg";
import HizliHavaleIcon from "../../../assets/svg/payMethods/Hizli Havale.svg";
import EcoPayzIcon from "../../../assets/svg/payMethods/EcoPayz.svg";
import PaparaIcon from "../../../assets/svg/payMethods/Papara.svg";

export const mockOptions = [
  { value: "en-us", label: "English (US)" },
  { value: "en-uk", label: "English (UK)" },
  { value: "uk", label: "Ukrainian" },
  { value: "pl", label: "Polish" },
];

export const mockDepMethods = {
  quick: [
    {
      value: "havale",
      label: "Oto Havale",
      icon: OtoHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-havale",
      label: "Hizli Havale",
      icon: HizliHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "mega-havale",
      label: "Mega havale",
      icon: MegaHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "binance-pay",
      label: "Binance Pay",
      icon: BinanceIcon,
      info: {
        duration: "Instantly",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-crypto",
      label: "Hizli Kripto",
      icon: HizliIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "50,000.00 $",
      },
    },
    {
      value: "eco-payz",
      label: "EcoPayz",
      icon: EcoPayzIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "10,000.00 $",
      },
    },
  ],
  bank: [
    {
      value: "havale",
      label: "Oto Havale",
      icon: OtoHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-havale",
      label: "Hizli Havale",
      icon: HizliHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "mega-havale",
      label: "Mega havale",
      icon: MegaHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "binance-pay",
      label: "Binance Pay",
      icon: BinanceIcon,
      info: {
        duration: "Instantly",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-crypto",
      label: "Hizli Kripto",
      icon: HizliIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "50,000.00 $",
      },
    },
    {
      value: "eco-payz",
      label: "EcoPayz",
      icon: EcoPayzIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "10,000.00 $",
      },
    },
  ],
  bank2: [
    {
      value: "havale",
      label: "Oto Havale",
      icon: OtoHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-havale",
      label: "Hizli Havale",
      icon: HizliHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "mega-havale",
      label: "Mega havale",
      icon: MegaHavaleIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "binance-pay",
      label: "Binance Pay",
      icon: BinanceIcon,
      info: {
        duration: "Instantly",
        minDep: "250.00 $",
        maxDep: "100,000.00 $",
      },
    },
    {
      value: "hizli-crypto",
      label: "Hizli Kripto",
      icon: HizliIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "50,000.00 $",
      },
    },
    {
      value: "eco-payz",
      label: "EcoPayz",
      icon: EcoPayzIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "10,000.00 $",
      },
    },
  ],
};

export const mockWidthrawMethods = {
  ...mockDepMethods,
  bank3: [
    {
      value: "papara",
      label: "Papara",
      icon: PaparaIcon,
      info: {
        duration: "1 Dk",
        minDep: "250.00 $",
        maxDep: "10,000.00 $",
      },
    },
  ],
};
