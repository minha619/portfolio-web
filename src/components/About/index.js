function About() {

    return (
      <section className="my-5" >
        <h2 id="about">Minha Kim</h2>
        <div className="my-2">
        <img src={require(`../../assets/img/profile.jpg`)} alt="Profile picture" className="img-thumbnail" />
          <p>I am a creative front-end developer and designer based in NY. </p>
        </div>
      </section>
    )
  }
export default About;

