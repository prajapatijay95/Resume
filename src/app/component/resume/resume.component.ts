import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faUserAlt,
  faPen,
  faLink,
  faLaptopCode,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ExperienceModel } from "../experience-table/experience-table.component";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  public resume: any;

  private experiences: { [key: string]: ExperienceModel } = {};

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.setExperienceData();
    this.setResumeData();
  }

  setExperienceData() {
    this.experiences = {
      IndiaPortal: {
        title: "India | Jun 2015 - Jun 2016",
        projectName: "India Portal",
        description:
          "The India Portal is a project where anyone can draw information about India at various levels such as state, district, and village. The information can be about industries, interesting places, regional places, population, etc.",
        technologies: [
          "HTML 5",
          "CSS",
          "jQuery",
          "Bootstrap",
          "Java",
          "Mongo DB",
        ],
        tools: ["NetBeans", "Robomongo", "SVN"],
      },
      SoundCrowdsourcing: {
        title: "India | Jul 2016 - Jun 2017",
        projectName: "Sound Crowdsourcing",
        description:
          "The Sound Crowdsourcing project created to collect the sounds of different regions of India and create a Speech to Text translator.",
        technologies: [
          "HTML 5",
          "CSS",
          "jQuery",
          "Bootstrap",
          "Java",
          "Hibernate",
          "MySql",
        ],
        tools: ["NetBeans", "SQL Workbench", "SVN"],
      },
      FacialRecognition: {
        title: "India | Jul 2017 - Dec 2017",
        projectName: "Facial Recognition",
        description:
          "Facial Recognition is a project created using a combination of OpenCV & TensorFlow, to auto-complete attendance records.",
        technologies: ["Python 2.6", "Flask", "OpenCV", "TensorFlow"],
        tools: ["Pie Charm", "Git"],
      },
      GeospatialCrowdsourcing: {
        title: "India | Jan 2018 - Jun 2018",
        projectName: "Geospatial Crowdsourcing",
        description:
          "The Geospatial Crowdsourcing is a platform where people can mark the places, boundaries, roads which are famous for their locations and these data can be used to identify the famous places in the remote areas.",
        technologies: [
          "HTML 5",
          "CSS",
          "jQuery",
          "Bootstrap",
          "OpenLayers",
          "Java",
          "Hibernate",
          "MySql",
        ],
        tools: ["NetBeans", "SQL Workbench", "Git"],
      },
      FormsPortal: {
        title: "India | Australia | Jul 2018 - Dec 2019",
        projectName: "Forms Portal",
        description:
          "The Forms Portal application is a bespoke product offering similar functionality to SharePoint forms with Power Automate. Each form has a rich interface and its own workflow.",
        technologies: [
          "Angular 8",
          "C#",
          "Sql Server",
          "Kendo UI",
          "Ag-Grid",
          "Workflow Engine",
        ],
        tools: [
          "Visual Studio Code",
          "Visual Studio",
          "Jira",
          "Git",
          "SQL Server management studio",
        ],
      },
      PerformanceDashboard: {
        title: "Australia | Jan 2020 - Mar 2020",
        projectName: "Performance Dashboard",
        description:
          "Visualize high-level company risk and production performance using HighCharts.",
        technologies: [
          "Angular 8",
          "C#",
          "Sql Server",
          "Kendo UI",
          "HighCharts",
        ],
        tools: [
          "Visual Studio Code",
          "Visual Studio",
          "Jira",
          "Git",
          "SQL Server management studio",
        ],
      },
      CarbonEmissionReport: {
        title: "Australia | Apr 2020 - Jun 2020",
        projectName: "Carbon Emission Report",
        description:
          "Visualize the daily carbon emission report using data coming from an EnergySys application. Users can compare current data against historic data, with calculated estimated and average values by area.",
        technologies: ["Angular 10", "C#", "OData", "EnergySys", "HighCharts"],
        tools: [
          "Visual Studio Code",
          "Visual Studio",
          "Jira",
          "Git",
          "SQL Server management studio",
        ],
      },
      IntegratedRiskRegister: {
        title: "Australia | Jul 2020 - Present",
        projectName: "Integrated Risk Register Application development",
        description:
          "The application that I developed in conjunction with a team of Process Safety SME’s, IT and Systems Analysts, is being used for capturing, analysing and managing operational risk in an Oil and Gas Company. This allows full transparency of all risks within the company and to industry regulators for safe and reliable operations. The application is intuitive to use at all levels of the organisation, from front line personnel, to VP and EVP. It was developed within the guidelines of company and industry standards and integrates with several other key applications. It has been described by external regulators as “Industry Best Practice” for operational Risk Management.",
        technologies: [
          "Angular 10",
          "C#",
          "OData",
          "Sql Server",
          "Kendo UI",
          "Ag-Grid",
          "SAP S/4HANA",
          "Workflow Engine",
        ],
        tools: [
          "Visual Studio Code",
          "Visual Studio",
          "Jira",
          "Git",
          "SQL Server management studio",
        ],
      },
    };
  }

  setResumeData() {
    this.resume = {
      name: "Jaykumar Prajapati",
      img: "/assets/images/IMG_0180.jpg",
      positionTitle: "Developer Programmer",
      pages: [
        {
          lstyle: "",
          rstyle: "",
          leftInfo: [
            {
              title: "Contact",
              contents: [
                {
                  icon: faMapMarkerAlt,
                  title: "Address",
                  content: "U 3 316, Hampstead Road, Clearview, SA - 5085",
                },
                {
                  icon: faPhoneAlt,
                  title: "Phone",
                  content: "+61 480 124 164",
                },
                {
                  icon: faEnvelope,
                  title: "Email",
                  content: "prajapatijay61@gmail.com",
                },
                {
                  icon: faLinkedinIn,
                  title: "LinkedIn",
                  content: "linkedin.com/in/jaykumar-prajapati-21684a70",
                },
              ],
            },
            {
              title: "Education",
              contents: [
                {
                  title: "Master Degree",
                  content: "SASTRA University, India <br/> 2015-2018",
                },
                {
                  title: "Bachelor Degree",
                  content: "Dharmsinh Desai University, India <br/> 2012-2015",
                },
              ],
            },
          ],
          rightInfo: [
            {
              icon: faUserAlt,
              title: "Profile",
              contents: [
                {
                  content: `In my professional life, I strive for technical excellence, continual improvement & progression, being valued, working collaboratively towards a common outcome, and with enough autonomy to allow my creative side to flourish. With every engagement, I find myself more dedicated and excited by new challenges. I believe I have a lot to contribute and would relish the opportunity to work for an organisation that nurtures enthusiasm, as I believe it results in a relationship of mutual growth. I am aiming to secure a full-stack software developer position where I have some involvement in the software architecture, direction, strategy etc. I'm also keen to build on my team leadership and mentoring skills.
                  `,
                },
              ],
            },
            {
              icon: faCogs,
              title: "Skills",
              contents: [
                {
                  content: `
                  <li>Full-stack developer</li>
                  <li>Decision making</li>
                  <li>Strategic thinking</li>
                  <li>Team management</li>
                  <li>Problem solving</li>
                `,
                },
              ],
            },
            {
              icon: faLaptopCode,
              title: "Expertize",
              contents: [
                {
                  content: `
                  <li>Angular 5+</li>
                  <li>Node.js</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Charts</li>
                  <li>SQl | NoSQL Database</li>
                `,
                },
              ],
            },
          ],
        },
        {
          rstyle: "fhw",
          rightInfo: [
            {
              icon: faPen,
              title: "Work Experience",
              contents: [
                {
                  title: "Developer Programmer",
                  content: `
                <strong>Tata Consultancy Services Limited | Jun 2015 - Present</strong> <br /><br />
                Overall Roles & Responsibilities for the projects listed below:
                <li>Team Leadership</li>
                <li>Requirement gathering & analysis</li>
                <li>Application development</li>
                <li>Application testing</li>
                <li>Technical documentation</li>
                <li>Stakeholder liaison</li>
                <br />
                ${this.getExperienceHTML(
                  this.experiences.IntegratedRiskRegister
                )}
                ${this.getExperienceHTML(this.experiences.CarbonEmissionReport)}
                `,
                },
              ],
            },
          ],
        },
        {
          rstyle: "fhw",
          rightInfo: [
            {
              icon: faPen,
              title: "Work Experience",
              subTitle: "Continued",
              contents: [
                {
                  title: "",
                  content: `
                    ${this.getExperienceHTML(
                      this.experiences.PerformanceDashboard
                    )}
                    ${this.getExperienceHTML(this.experiences.FormsPortal)}
                    ${this.getExperienceHTML(
                      this.experiences.GeospatialCrowdsourcing
                    )}
                `,
                },
              ],
            },
          ],
        },
        {
          rstyle: "fhw",
          rightInfo: [
            {
              icon: faPen,
              title: "Work Experience",
              subTitle: "Continued",
              contents: [
                {
                  title: "",
                  content: `
                    ${this.getExperienceHTML(
                      this.experiences.FacialRecognition
                    )}
                    ${this.getExperienceHTML(
                      this.experiences.SoundCrowdsourcing
                    )}
                    ${this.getExperienceHTML(this.experiences.IndiaPortal)}
                `,
                },
              ],
            },
          ],
        },
        {
          lstyle: "fh",
          rstyle: "fh",
          leftInfo: [
            {
              // icon: faAward,
              title: "Awards",
              contents: [
                {
                  title: "On The Spot Award",
                  content: "Awards for Excellence | Sep 2020",
                },
                {
                  title: "On The Spot Award",
                  content: "Awards for Excellence | Jul 2020",
                },
                {
                  title: "Service & Commitment Award",
                  content: "Service Awards | Jun 2020",
                },
                {
                  title: "Star of the Month Award",
                  content: "Awards for Excellence | Jan 2020",
                },
                {
                  title: "Best Team Award",
                  content: "Awards for Excellence | May 2019",
                },
                {
                  title: "Service & Commitment Award",
                  content: "Service Awards | Jun 2018",
                },
                {
                  title: "Fresco Play Miles",
                  content: "Learning Awards | Jan 2018",
                },
                {
                  title: "Fresco Play Miles",
                  content: "Learning Awards | Jan 2018",
                },
                {
                  title: "Fresco Play Miles",
                  content: "Learning Awards | Nov 2017",
                },
                {
                  title: "Best Team Award",
                  content: "Awards for Excellence | Aug 2017",
                },
                {
                  title: "Fresco Play Miles",
                  content: "Learning Awards | Jul 2017",
                },
              ],
            },
          ],
          rightInfo: [
            {
              icon: faLink,
              title: "References",
              contents: [
                {
                  title: "Shamprasad Shetty",
                  content: `Associate Consultant <br/ >
                        Tata Consultancy Services Limited <br />
                        <strong>P</strong>: +61 470 621 060 <br />
                        <strong>E</strong>: sp.shetty@tcs.com`,
                },
                {
                  title: "Christian Trigg",
                  content: `Technical System Analyst <br/ >
                        Santos Limited <br />
                        <strong>P</strong>: +61 421 789 225 <br />
                        <strong>E</strong>: christian.trigg@santos.com`,
                },
                {
                  title: "Flic Gibbs",
                  content: `Business Analyst <br/ >
                        Santos Limited <br />
                        <strong>P</strong>: +61 450 480 292 <br />
                        <strong>E</strong>: flic.gibbs@santos.com`,
                },
                // {
                //   title: 'Ref 4',
                //   content: `Technical System Analyst <br/ >
                //         Santos Limited <br />
                //         <strong>P</strong>: +61 421 789 225 <br />
                //         <strong>E</strong>: christian.trigg@santos.com`
                // }
              ],
            },
          ],
        },
      ],
    };
  }

  sanitizeHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getExperienceHTML(experience: ExperienceModel): string {
    let table = `${experience.title} <br />
            <table>
              <tr>
                <td>Project name</td>
                <td> ${experience.projectName} </td>
              </tr>
              <tr>
                <td>Description</td>
                <td> ${experience.description} </td>
              </tr>
              <tr>
                <td>Used Technologies</td>
                <td>
                  <ul>`;
    for (let technology of experience.technologies) {
      table += `<li> ${technology} </li>`;
    }
    table += `</ul>
                </td>
              </tr>
              <tr>
                <td>Tools</td>
                <td>
                  <ul>`;
    for (let tool of experience.tools) {
      table += `<li> ${tool} </li>`;
    }
    table += `</ul>
                </td>
              </tr>
            </table>
            <br />`;
    return table;
  }
}
