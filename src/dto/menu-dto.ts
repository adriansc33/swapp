export class MenuDTO {
    id: string = "";
    text: string = "";
    action: string = "";
    icon: string = "";
    
    public static buildDefault(): MenuDTO {
        var data = new MenuDTO();
        data.text = "";
        data.action = "";
        data.icon = "";
        return data;
      }
    }