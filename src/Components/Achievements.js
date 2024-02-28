import coding from "./images/coding.png";
import codechef from "./images/codechef.png";
import hackathon from "./images/hackathon.png";
import hackerrank from "./images/hackerrank.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";


// My Achievements are as follows:
// Solved 800+ Problems across Leetcode, GFG, Codechef and other coding platforms
// 3* at CodeChef (1650+ rating) [Profile]
// 3rd GDSC AndroidBuzz Hackathon 2022
// Certified Problem Solver at HackerRank [Profile]



const Achievements = () => {
    const items = [
        {
            cardTitle: "Certified Problem Solver at HackerRank",
            img: hackerrank,
            btnText: "See Credential",
            btnUrl: "https://www.hackerrank.com/profile/deexithmadas277",
        },
        {
            cardTitle: "3* at CodeChef (1650+ rating)",
            img: codechef,
            btnText: "View Profile",
            btnUrl: "https://www.codechef.com/users/nobita06",

        },
        {
            cardTitle: "3rd GDSC (Google Developer Student Clubs) AndroidBuzz Hackathon 2022",
            img: hackathon,
        },
        {
            cardTitle: "Solved 800+ Problems across Leetcode, GFG, Codechef and other coding platforms",
            img: coding,
        },

    ];
    return (
        <section id="achievements" class="about">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#343a40",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body style={{ paddingTop: "50px" }}>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
