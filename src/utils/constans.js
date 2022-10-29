import { hero, hero2, hero3, hero4, hero5, iconReputation1, iconReputation2 } from '../assets'

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

export { menu, heroSlider, reputationCards };