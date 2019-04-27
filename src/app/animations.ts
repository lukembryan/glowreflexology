import { trigger, state, transition, style, animate, query } from '@angular/animations';

export let slideInAnimation = trigger('slideInAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
       [style({ opacity: 1 }), animate('0.3s ease-in-out', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s ease-in-out', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition(':enter, :leave', [animate(300)])
]);

export let slideRight = trigger('slideRight', [
  state('void', style({
    transform: 'translateX(100%)',
    opacity: 0
  })),
  transition(':enter, :leave', [animate(300)])
]);

export let slideUp = trigger('slideUp', [
  state('void', style({
    transform: 'translateY(-100%)'
  })),
  transition(':enter, :leave', [animate('300ms ease-in-out')])
]);

export let slideDown = trigger('slideDown', [
  state('void', style({
    transform: 'translateY(100%)'
  })),
  transition(':enter, :leave', [animate('300ms ease-in-out')])
]);
