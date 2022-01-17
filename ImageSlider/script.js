var slideIndex = 0;
var slides = [
  {
    id: 1,
    url: "https://www.victoryterminal.com/images/testimonial/848-businessman-192x192.png",
    alt: "1 Profile Image",
    name: "Jane Doe",
    designation: "Web Developer",
    description:
      "Habitasse lobortis cum malesuada nullam cras odio venenatis nisl at turpis sem in porta consequat massa a mus massa nascetur elit vestibulum a.",
  },
  {
    id: 2,
    url: "https://cdn4.iconfinder.com/data/icons/occupation-job-icons-2/512/OCCUPATION2-06-512.png",
    alt: "2 Profile Image",
    name: "Steve Stevenson",
    designation: "ATC",
    description:
      "Habitasse lobortis cum malesuada nullam cras odio venenatis nisl at turpis sem in porta consequat massa a mus massa nascetur elit vestibulum a.",
  },
  {
    id: 3,
    url: "http://iamubaidah.com/html/miscoo/live/assets/img/team/member-4.png",
    alt: "3 Profile Image",
    name: "Reve Kruger",
    designation: "Intern",
    description:
      "Habitasse lobortis cum malesuada nullam cras odio venenatis nisl at turpis sem in porta consequat massa a mus massa nascetur elit vestibulum a.",
  },
  
];
function SlideShow(n) {
    console.log("n = ", n);
    let img = "",
      dots = "",
      content = "";
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = n;
    }
    for (let i = 0; i < slides.length; i++) {
      let display = i === slideIndex ? "block" : "none";
      let button = i === slideIndex ? "on" : "";
      img +=
        '<img src="' +
        slides[i].url +
        '" alt="' +
        slides[i].alt +
        '" title="' +
        slides[i].name +
        ' Profile Image" style="display: ' +
        display +
        '" id="img' +
        slides[i].id +
        '" />';
      
      content +=
        '<h2 style="display:' +
        display +
        ';" title="Name">' +
        slides[i].name +
        '</h2> <h4 style="display:' +
        display +
        ';" title="Designation">' +
        slides[i].designation +
        '</h4> <p style="display:' +
        display +
        ';" title="Description">' +
        slides[i].description +
        "</p>";
      dots +=
        '<span style="margin: 10px" class="dot' +
        i +
        " " +
        button +
        '" title="' +
        (i + 1) +
        ' Slide/Profile" onclick="SlideShow(' +
        i +
        ')"> <i class="fas fa-circle"></i> </span>';
    }
    document.getElementById("images").innerHTML = img;
    document.getElementById("content").innerHTML = content;
    document.getElementById("dots").innerHTML = dots;
  }
  
  SlideShow(slideIndex);
  
  function NewSlide(e) {
    e.preventDefault();
    let addNewDetails = {
      id: slides.length,
    //   url: "http://placehold.it/300x150?text=Image4",
      url: e.target.image.value,
      alt: slides.length + 1 + " Profile Image",
      name: e.target.name.value,
      designation: e.target.designation.value,
      description: e.target.description.value,
    };
    slides.push(addNewDetails);
    SlideShow(slides.length - 1);
  }