import { IColor } from "../types";

export const theme = {
  colors: {
    default: '#000000',
    secondary: '#FFF',
    third: '#2F80ED',
    startDate: 'rgba(47, 128, 237, 0.60)',
    betweenDate: '#2F80ED1A',
    disabled: '#AAA',
    hover: '#F1F1F1',
    primary: '#333',
    holiday: '#ff0000',
    border: '#E1E1E1',
    placeholder: '#BBB',
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    chooseColor(color: IColor){
      if(color === 'primary'){
        return {
          third: '#009900',
          startDate: 'rgba(0, 153, 0, 0.60)',
          betweenDate: 'rgba(0, 153, 0, 0.1)',
        }
      }

      if(color === 'secondary'){
        return {
          third: '#ff6600',
          startDate: 'rgba(255, 102, 0, 0.60)',
          betweenDate: 'rgb(255, 102, 0, 0.1)',
        }
      }

      return {
        third: '#2F80ED',
        startDate: 'rgba(47, 128, 237, 0.60)',
        betweenDate: '#2F80ED1A',
      }
      
    }

  },
  fontFamily: {
    font: ["Open Sans"],
  },
  fontWeight: {
    medium: '600',
    bold: '700',
  },
  zIndex: {
    modal: 1000,
    tooltip: 500,
  },
  breakPoints: {
  },
};