const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projectContainerArr = [
  {
    headline: 'Feature Speakers',
    image: './images/provost.jpg',
    name: ' Prof DR Lukeman',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
  {
    headline: 'Feature Speakers',
    image: './WhatsApp.img5.jpeg',
    name: 'Snitarian Godswill',
    intro: 'REHO, LEHO. HND ENV HEALTH.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
  {
    headline: 'Feature Speakers',
    image: './images/photo2.jpg',
    name: 'PROF Dr(Mrs) Ken Joyce',
    intro: 'Msc in public Health Nurse.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
  {
    headline: 'Feature Speakers',
    image: './images/photo5.jpg',
    name: 'PROF (Mrs) Osarienwmen Osasere',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
  {
    headline: 'Feature Speakers',
    image: './images/photo4.jpg',
    name: 'DR Lukeman',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
  {
    headline: 'Feature Speakers',
    image: './images/photo3.jpg',
    name: 'DR Lukeman',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste.',
    topic:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis molestias consequuntur quod qui quisquam voluptatibusmaxime voluptatum harum aperiam dolores.',
  },
];
const featureSection = document.querySelector('.feature-speaker');
for (let i = 0; i < projectContainerArr.length; i += 1) {
  featureSection.innerHTML = `
  <h3 class="featureheadline">${projectContainerArr[0].headline}</h3>
  <div class="feature-speaker-container">
    <div class="speaker1">
      <img
        id="profile-img1"
        src="${projectContainerArr[0].image}"
        alt="profile-image"
      />
      <div id="speaker-profile1">
        <h4>${projectContainerArr[0].name}</h4>
        <small>${projectContainerArr[0].intro}</small>
        <p>${projectContainerArr[0].topic}</p>
      </div>
    </div>
    <div class="speaker2">
      <img
        id="profile-img2"
        src="${projectContainerArr[1].image}"
        alt="profile-image"
      />
      <div id="speaker-profile2">
        <h4>${projectContainerArr[1].name}</h4>
        <small>${projectContainerArr[1].intro}</small>
        <p>${projectContainerArr[1].topic}</p>
      </div>
    </div>
    <div class="speaker3 view-more">
      <img
        id="profile-img2"
        src="${projectContainerArr[2].image}"
        alt="profile-image"
      />
      <div id="speaker-profile2">
        <h4>${projectContainerArr[2].name}</h4>
        <small>${projectContainerArr[2].intro}</small>
        <p>${projectContainerArr[2].topic}</p>
      </div>
    </div>
    <div class="speaker4 view-more">
      <img
        id="profile-img2"
        src="${projectContainerArr[3].image}"
        alt="profile-image"
      />
      <div id="speaker-profile2">
        <h4>${projectContainerArr[3].name}</h4>
        <small>${projectContainerArr[3].intro}</small>
        <p>${projectContainerArr[3].topic}</p>
      </div>
    </div>
    <div class="speaker5 view-more">
      <img
        id="profile-img2"
        src="${projectContainerArr[4].image}"
        alt="profile-image"
      />
      <div id="speaker-profile2">
        <h4>${projectContainerArr[4].name}</h4>
        <small>${projectContainerArr[4].intro}</small>
        <p>${projectContainerArr[4].topic}</p>
      </div>
    </div>
    <div class="speaker6 view-more">
      <img
        id="profile-img2"
        src="${projectContainerArr[5].image}"
        alt="profile-image"
      />
      <div id="speaker-profile2">
        <h4>${projectContainerArr[5].name}</h4>
        <small>${projectContainerArr[5].intro}</small>
        <p>${projectContainerArr[5].topic}</p>
      </div>
    </div>
  </div>
  <button id="see-more-btn" type="button">
    More<span id="see-more" class="material-symbols-outlined"> expand_more </span>
  </button>`;
}
