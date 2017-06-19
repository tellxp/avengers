import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';
export const slideDownIn = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateY(-100%)',
      duration: '280ms',
      end: 'translateY(0%)'
    }
  }
);
export const slideDownOut = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateY(0%)',
      duration: '280ms',
      end: 'translateY(-100%)'
    }
  }
);
export const slideUpIn = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateY(-100%)',
      duration: '280ms',
      end: 'translateY(0%)'
    }
  }
);
export const slideUpOut = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateY(0%)',
      duration: '280ms',
      end: 'translateY(-100%)'
    }
  }
);

export const slideLeftIn = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateX(-100%)',
      duration: '280ms',
      end: 'translateX(0%)'
    }
  }
);

export const slideLeftOut = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateX(0%)',
      duration: '280ms',
      end: 'translateX(-100%)'
    }
  }
);

export const slideRightIn = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateX(-100%)',
      duration: '280ms',
      end: 'translateX(0%)'
    }
  }
);
export const slideRightOut = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'translateX(0%)',
      duration: '280ms',
      end: 'translateX(100%)'
    }
  }
);
export const slideRtrAnimations = trigger('slideRtr', [
  transition('void => *',
    useAnimation(slideRightIn)
  ),
  transition('* => void',
    useAnimation(slideRightOut)
  )
]);
export const slideRtlAnimations = trigger('slideRtl', [
  transition('void => *',
    useAnimation(slideRightIn)
  ),
  transition('* => void',
    useAnimation(slideLeftOut)
  )
]);
export const slideLtlAnimations = trigger('slideLtl', [
  transition('void => *',
    useAnimation(slideLeftIn)
  ),
  transition('* => void',
    useAnimation(slideLeftOut)
  )
]);
export const slideDtdAnimations = trigger('slideDtd', [
  transition('void => *',
    useAnimation(slideDownIn)
  ),
  transition('* => void',
    useAnimation(slideDownOut)
  )
]);
export const slideDtuAnimations = trigger('slideDtu', [
  transition('void => *',
    useAnimation(slideDownIn)
  ),
  transition('* => void',
    useAnimation(slideUpOut)
  )
]);
export const slideUtuAnimations = trigger('slideUtu', [
  transition('void => *',
    useAnimation(slideUpIn)
  ),
  transition('* => void',
    useAnimation(slideUpOut)
  )
]);

export const slideUtdAnimations = trigger('slideUtd', [
  transition('void => *',
    useAnimation(slideUpIn)
  ),
  transition('* => void',
    useAnimation(slideDownOut)
  )
]);

