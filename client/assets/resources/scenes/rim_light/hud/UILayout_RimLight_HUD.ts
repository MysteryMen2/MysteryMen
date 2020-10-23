import { _decorator, Component, Node, ToggleComponent, SliderComponent, LabelComponent, SpriteComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UILayoutRimLightHUD')
export class UILayoutRimLightHUD extends Component {

    @property({type:ToggleComponent})
    chkEnabled:ToggleComponent = null;

    @property({type:SliderComponent})
    R:SliderComponent = null;

    @property({type:SliderComponent})
    G:SliderComponent = null;

    @property({type:SliderComponent})
    B:SliderComponent = null;

    @property({type:SliderComponent})
    A:SliderComponent = null;

    @property({type:LabelComponent})
    ValueR:LabelComponent = null;

    @property({type:LabelComponent})
    ValueG:LabelComponent = null;

    @property({type:LabelComponent})
    ValueB:LabelComponent = null;

    @property({type:LabelComponent})
    ValueA:LabelComponent = null;

    @property({type:SpriteComponent})
    colorDisplay:SpriteComponent = null;
}
