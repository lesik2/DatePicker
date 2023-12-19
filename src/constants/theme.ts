import { IColor, ISize } from "@customTypes/models";
import { IDateColor, IDateSize } from '@customTypes/style'

export const theme = {
  colors: {
    default: '#000000',
    secondary: '#FFF',
    disabled: '#AAA',
    hover: '#F1F1F1',
    primary: '#333',
    holiday: '#ff0000',
    border: '#E1E1E1',
    placeholder: '#BBB',

    chooseColor(color: IColor): IDateColor{
      switch(color){
        case 'primary':{
          return {
            third: '#009900',
            startDate: 'rgba(0, 153, 0, 0.60)',
            betweenDate: 'rgba(0, 153, 0, 0.1)',
          }
        }

        case 'secondary':{
          return {
            third: '#ff6600',
            startDate: 'rgba(255, 102, 0, 0.60)',
            betweenDate: 'rgb(255, 102, 0, 0.1)',
          }  
        }

        default:{
          return {
            third: '#2F80ED',
            startDate: 'rgba(47, 128, 237, 0.60)',
            betweenDate: '#2F80ED1A',
          }
        }
      }
      
    }

  },
  chooseSize(size: ISize): IDateSize{
    if(size === 'medium'){
      return {
        widthCalendar: '200',
        contentCalendar: '180',
        columnWithWeekend: '25',
        columnWithoutWeekend: '36',
        widthOfDateCell: '25',
        paddingDateCell: '8',
        fontSizeOfDateCell: '11',
        fontSizeOfWeekday: '12',
        heightOfDateInput: '33',
        widthOfDateInput: '137',
        iconsWidth: '14',
        paddingDateInput: '8',
        widthYear: '640',
        modalHeight: '235',
        widthOfModalInput: '160',
      }
    }

    return {
      widthCalendar: '250',
      contentCalendar: '230',
      columnWithWeekend: '32',
      columnWithoutWeekend: '46',
      widthOfDateCell: '32',
      paddingDateCell: '10',
      fontSizeOfDateCell: '13',
      fontSizeOfWeekday: '14',
      heightOfDateInput: '42',
      widthOfDateInput: '172',
      iconsWidth: '16',
      paddingDateInput: '15',
      widthYear: '800',
      modalHeight: '277',
      widthOfModalInput: '210',
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