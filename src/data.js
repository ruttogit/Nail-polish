import Worker1 from './images/Worker1.jpg';
import Worker2 from './images/Worker2.jpg';
import Worker3 from './images/Worker3.jpg';
import Worker4 from './images/Worker4.jpg';

import Test1 from './images/testim1.jpg'
import Test2 from './images/testim2.jpg'
import Test3 from './images/testim3.jpg'
import Test4 from './images/testim4.jpg'

import starFull from './icons/star.svg'
import starHalf from './icons/star-half-alt.svg'

export const ourTeam = [
  {
    name: 'Anne J.',
    image: Worker1, 
  },
  {
    name: 'Josephat Kimsa',
    image: Worker2, // No curly braces
  },
  {
    name: 'Mark Joe',
    image: Worker3, 
  },
  {
    name: 'Jophrey Jim',
    image: Worker4, 
  }
];





export const Testimonial = [
  {
    name: 'Anne Josh',
    image: Test1,
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis',
    ratings: [starFull, starFull, starFull, starFull, starFull]
  },
  {
    name: 'Joyce M.',
    image: Test2,
    message: 'Unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    ratings: [starFull, starFull, starFull, starFull, starHalf]
  },
  {
    name: 'Peter',
    image: Test3,
    message: 'Sed ut perspiciatis natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    ratings: [starFull, starFull, starFull, starFull, starFull]
  },
  {
    name: 'Faith M',
    image: Test4,
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    ratings: [starFull, starFull, starFull, starFull, starHalf]
  }
]