import {
  hero, hero2, hero3, hero4, hero5, iconReputation1, iconReputation2, architecture, construction,
  consultation, electric, renovation, repair, clientsIllustration, awardIllustration, businessIllustration,
  projectsIllustration
} from '../assets'

const menu = [{
  title: 'Home',
  url: '#'
}, {
  title: 'About Us',
  url: '#about-us'
},
{
  title: 'Projects',
  url: '#projects'
},
{
  title: 'Services',
  url: '#services'
},
{
  title: 'Contact Us',
  url: '#contact-us'
},
]

const heroSlider = [{
  title: 'The National University of Architecture',
  image: hero,
  id: '1'
},
{
  title: 'Massachusetts Institute of Technology',
  image: hero2,
  id: '2'
},
{
  title: 'Delft University of Technology',
  image: hero3,
  id: '3'
},
{
  title: 'University College London',
  image: hero4,
  id: '4'
},
{
  title: 'Swiss Federal Institute of Technology',
  image: hero5,
  id: '5'
}
]

const reputationCards = [{
  image: iconReputation1,
  title: 'Best Services',
  paragraph: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'
},
{
  image: iconReputation1,
  title: 'Best Teams',
  paragraph: 'Cursus semper tellus volutpat aliquet lacus. '
},
{
  image: iconReputation2,
  title: 'Best Designs',
  paragraph: 'Ultricies at ipsum nunc, tristique nam lectus.'
}]

const services = [{
  title: 'Construction',
  image: construction,
  theme: 'light',
  id: '1'
}, {
  title: 'Renovation',
  image: renovation,
  theme: 'dark',
  id: '2'
},
{
  title: 'Consultation',
  image: consultation,
  theme: 'light',
  id: '3'
},
{
  title: 'Repair Services',
  image: repair,
  theme: 'dark',
  id: '4'
},
{
  title: 'Architecture',
  image: architecture,
  theme: 'light',
  id: '5'
},
{
  title: 'Electric',
  image: electric,
  theme: 'dark',
  id: '6'
}
]

const experience = [
  {
    title: 'Happy Clients',
    number: '84',
    image: clientsIllustration
  },
  {
    title: 'Projects Completed',
    number: '123',
    image: projectsIllustration
  },
  {
    title: 'Awards Win',
    number: '37',
    image: awardIllustration
  },
  {
    title: 'Years in Business',
    number: '30',
    image: businessIllustration
  },

]

export { menu, heroSlider, reputationCards, services, experience };