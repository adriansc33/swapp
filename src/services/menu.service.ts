import { MenuDTO } from "src/dto/menu-dto";

export class MenuService {
   
    constructor(
    ) { }
  
    getMenu() {
      var menunav : MenuDTO[];
      menunav = [];
      var itemmenu1 = MenuDTO.buildDefault();
      itemmenu1.id = "1";
      itemmenu1.text = "Starships";
      itemmenu1.action = './starships/';
 
      menunav.push(itemmenu1);

      var itemmenu2 = MenuDTO.buildDefault();
      itemmenu2.id = "2";
      itemmenu2.text = "Films";
      itemmenu2.action = './films/';
 
      menunav.push(itemmenu2);


      var itemmenu3 = MenuDTO.buildDefault();
      itemmenu3.id = "3";
      itemmenu3.text = "Planets";
      itemmenu3.action = './planets/';
 
      menunav.push(itemmenu3);

     
      var itemmenu4 = MenuDTO.buildDefault();
      itemmenu4.id = "4";
      itemmenu4.text = "Vehicles";
      itemmenu4.action = './vehicles/';
      menunav.push(itemmenu4);
   
      return menunav;
    }
  }