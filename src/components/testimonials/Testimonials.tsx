import "./testimonials.scss";

interface Testmonial {
  id: number;
  name: string;
  title: string;
  img: string;
  icon: string;
  desc: string;
  featured?: boolean;
}

const Testimonials = () => {
  const data: Testmonial[] = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/x.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__container">
        {data.map((testimonial) => (
          <article
            className={`testimonials__card ${
              testimonial.featured && "featured"
            }`}
            key={testimonial.id}
          >
            <header className="testimonials__card-top">
              <img
                className="testimonials__card-top--left"
                src="assets/corner-down-right.png"
                alt="Social media icon"
              />
              <img
                className="testimonials__card-top--user"
                src={testimonial.img}
                alt={`${testimonial.name} photo`}
              />
              <img
                className="testimonials__card-top--right"
                src={testimonial.icon}
                alt="Youtube"
              />
            </header>
            <div className="testimonials__card-center">
              <p>{testimonial.desc}</p>
            </div>
            <footer className="testimonials__card-bottom">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
