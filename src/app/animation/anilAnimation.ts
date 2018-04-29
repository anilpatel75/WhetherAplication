import { AnimationTriggerMetadata,
  animate, 
  state, 
  style, 
  transition,
  trigger,
  keyframes} from '@angular/animations';
export const AnilAnimation = 
trigger('anilAnimation', [
    transition('void => *',[ animate(1000, keyframes([
      style({opacity:0,transform:'translatex(-1000px)',offset:0}),
      style({opacity:1,transform:'translatex(-500)',offset:0.5}),
      style({opacity:1,transform:'translatex(0)',offset:1})
    ])),
     
  ])
  ])