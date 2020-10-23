import { _decorator, Component, Node, ToggleComponent, ButtonComponent, LabelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UILayout_CommonHUD')
export class UILayout_CommonHUD extends Component {
    
    @property({type:ToggleComponent})
    useSkybox:ToggleComponent = null;

    @property({type:ToggleComponent})
    useIBL:ToggleComponent = null;

    @property({type:ButtonComponent})
    btnSkyboxSetting:ButtonComponent = null;

    @property({type:ButtonComponent})
    btnInfo:ButtonComponent = null;

    @property({type:ButtonComponent})
    btnHome:ButtonComponent = null;

    @property({type:LabelComponent})
    title:LabelComponent = null;
}
