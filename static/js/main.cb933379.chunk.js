(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(48)},30:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(12),r=t.n(i),l=(t(30),t(1)),o=t(2),c=t(5),m=t(3),d=t(4),u=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},e.name),s.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,s.a.createElement("br",null),e.roleDescription),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("i",{className:e.className})))})))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:"images/portfolio/ProfilePicture.png",alt:""})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,e.aboutme),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("p",{className:"scrolldown"},s.a.createElement("h2",null,s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Let's Connect",s.a.createElement("i",{className:"icon-down-circle"})))))))))}}]),a}(n.Component),p=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.UniversityName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("b",null,"GPA: ",e.Gpa),s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),s.a.createElement("p",null,e.Achievements," ",s.a.createElement("br",null),s.a.createElement("br",null),e.AboutEdu)))}))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.CompanyName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("p",null,e.skillsDescription),s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return s.a.createElement("li",null,s.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),s.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return s.a.createElement("a",{href:"".concat(e.url),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("img",{src:"".concat(e.imgurl),style:{height:"300px",width:"350px"}}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.name),s.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),E=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"testimonials"},s.a.createElement("div",{className:"text-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Client Testimonials"))),s.a.createElement("div",{className:"ten columns flex-container"},s.a.createElement("div",{className:"flexslider"},s.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return s.a.createElement("li",null,s.a.createElement("blockquote",null,s.a.createElement("p",null,e.description),s.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=t(7),v=t(13),b=t.n(v),y=t(24),w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.bg},s.a.createElement("div",{className:"hero row-container ".concat(this.props.secondaryBg)},s.a.createElement("div",{className:"hero__content"},s.a.createElement("h1",{className:"hero__content__h1"},this.props.header),s.a.createElement("h2",{className:"hero__content__h2"},this.props.subHeader),this.props.btnPara&&s.a.createElement(y.a,{to:"/contact",className:"hero__content__button"},this.props.btnPara))))}}]),a}(s.a.Component),N=t(23),k=t.n(N);b.a.setAppElement("div");var j,O={content:{top:"calc(50% + 27.5px)",left:"50%",right:"auto",bottom:"auto",width:"35%",minWidth:"250px",height:"25%",minHeight:"250px",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",borderRadius:"3px",border:"none"}},S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",nameError:"",email:"",emailError:"",subject:"",subjectError:"",message:"",messageError:"",resData:"",modalIsOpen:!1},t.change=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.closeModal=function(){t.setState({modalIsOpen:!1})},t.onSubmit=function(e){e.preventDefault(),e.persist(),""===t.state.name?t.setState({nameError:"Please provide your name"}):t.setState({nameError:""}),""===t.state.email?t.setState({emailError:"Please provide an email address"}):t.state.email===/^((?!@).)*$/||-1===t.state.email.indexOf(".")?t.setState({emailError:"Please provide a valid email address"}):t.setState({emailError:""}),""===t.state.subject?t.setState({subjectError:"Please provide a subject message"}):t.setState({subjectError:""}),""===t.state.message?t.setState({messageError:"Please leave a message"}):t.setState({messageError:""}),console.log("Aishwarya Email12"),setTimeout(function(){console.log("Aishwarya Email1"),""===t.state.nameError&&""===t.state.emailError&&""===t.state.subjectError&&""===t.state.messageError?(console.log("Aishwarya Email if consition"),k.a.sendForm("gmail","template_fcjqvjs","contact-form","user_bNegeBKAeT4brWuakXIkv").then(function(e){console.log("Aishwarya Email"),console.log(e.text),t.setState({resData:e.data}),t.setState({modalIsOpen:!0}),t.setState({name:"",email:"",subject:"",message:""})},function(e){console.log("Aishwarya Email Error"),console.log(e.text)})):t.setState({resData:"Oops! Something went wrong!"})},10)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.resumeData;return s.a.createElement("section",{id:"contact"},s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",{width:"50%"},s.a.createElement("div",{className:"row"},s.a.createElement("aside",{className:"eigth columns footer-widgets"},s.a.createElement("div",{className:"widget"},"Feel free to contact me for any work or suggestions below",s.a.createElement("h4",null,"LinkedIn : ",s.a.createElement("a",{href:a.linkedinId,target:"_blank"},a.linkedinId),s.a.createElement("br",null),"Phone Number : ",s.a.createElement("a",{href:"tel:{resumeData.phoneNumber}"},"+1 862-237-5216"),s.a.createElement("br",null),"Primary Email : ",s.a.createElement("a",{href:"mailto:{resumeData.emailid}"},"ap1731@scarletmail.rutgers.edu"),s.a.createElement("br",null),"Secondary Email : ",s.a.createElement("a",{href:"mailto:{resumeData.gemail}"},"pawaskaravadhoot04@gmail.com"),s.a.createElement("br",null),"Address : ",a.address),s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"contact-pic",src:"images/ContactPicture.jpg",alt:""})))))),s.a.createElement("td",null,s.a.createElement("div",{className:"row"},s.a.createElement("aside",{className:"eigth columns footer-widgets"},s.a.createElement("div",{className:"widget"},s.a.createElement("div",{id:"contactForm"},s.a.createElement(w,{header:"Let's Get In Touch",subHeader:"Tell me about yourself and what I can do for you.",bg:"contact-bg"}),s.a.createElement("div",{className:"full-width-row cta-form--bg"},s.a.createElement("div",{className:"row-container"},s.a.createElement("form",{className:"cta-form",id:"contact-form"},s.a.createElement("label",{className:"cta-form__label",htmlFor:"name"},"Name"),s.a.createElement("input",{name:"name",value:this.state.name,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",style:{margin:"".concat(this.state.nameError.length>0?"0":"")}}),s.a.createElement("p",{className:"form-error"},this.state.nameError),s.a.createElement("label",{className:"cta-form__label",htmlFor:"email"},"Email"),s.a.createElement("input",{name:"email",value:this.state.email,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",style:{margin:"".concat(this.state.emailError.length>0?"0":"")}}),s.a.createElement("p",{className:"form-error"},this.state.emailError),s.a.createElement("label",{className:"cta-form__label",htmlFor:"subject"},"Subject"),s.a.createElement("input",{name:"subject",value:this.state.subject,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",style:{margin:"".concat(this.state.subjectError.length>0?"0":"")}}),s.a.createElement("p",{className:"form-error"},this.state.subjectError),s.a.createElement("label",{className:"cta-form__label",htmlFor:"message"},"Message"),s.a.createElement("textarea",{name:"message",onChange:function(a){return e.change(a)},value:this.state.message,className:"cta-form__textarea",style:{margin:"".concat(this.state.messageError.length>0?"0":"")}}),s.a.createElement("p",{className:"form-error"},this.state.messageError),s.a.createElement("div",{align:"center"},s.a.createElement("button",{className:"btn btn--white",onClick:function(a){return e.onSubmit(a)}},"Send")," ")))),s.a.createElement(b.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal",style:O,closeTimeoutMS:150,overlayClassName:"formOverlay"},s.a.createElement("div",{className:"modalHeader-container"},s.a.createElement("span",{className:"modalHeader-container__text"},"Your message was sent!"),s.a.createElement("i",{className:"fa fa-times modalHeader-container__close-icon","aria-hidden":"true",onClick:this.closeModal})),s.a.createElement("div",{className:"modal-body"},s.a.createElement("p",{className:"modal-body__text"},this.state.resData),s.a.createElement("p",null,"I'll be in touch with you soon.")),s.a.createElement("button",{className:"btn btn--white",style:{textAlign:"center",margin:"10px auto",display:"block"},onClick:this.closeModal},"Close"))))))))))}}]),a}(n.Component),A=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",null,s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("i",{className:e.className})))}))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),D=(j={imagebaseurl:"https://github.com/avavadhoot0204",name:"Avadhoot Pawaskar",role:"Data Analyst | Data Scientist | Business Analyst",linkedinId:"https://www.linkedin.com/in/avadhootpawaskar/",phoneNumber:"862-237-5216",emailid:"ap1731@scarletmail.rutgers.edu",gemail:"pawaskaravadhoot04@gmail.com",address:"Harrison, New Jersey",roleDescription:"Hi! I am you next Data Analyst / Data Scientist. I am a data-driven person who is always eager to learn and explore the field of Data Science. Highly accurate and experienced Data Scientist adept at analyzing, and interpreting large datasets, developing new forecasting models, and performing data management tasks. Possessing an extensive analytical skill, strong attention to detail, and a significant ability to work in team environments. Deep understanding of Statistical Models, Algorithms and Multivariate Analysis.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/avadhootpawaskar/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/avavadhoot0204",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/iamavadhootpawaskar/",className:"fa fa-instagram"}],aboutme:"Exceptionally innovative Data Analyst with a proven record of database design and project management. Highly analytical and detail-oriented data analyst with in-depth knowledge of database types; research methodologies; and significant data capture, curation, manipulation, and visualization. Furnish insights, analytics, and business intelligence used to advance opportunity identification, process reengineering, and corporate growth. Possessing great problem solving and analytical abilities, I would like to pursue my career as a Data Analyst. Currently pursuing a Masters degree in Information Technology and Analytics with Specialization in Data Analytics from Rutgers University, Newark NJ. I would like to work in a challenging environment where I would get an opportunity to test and polish my skills becoming an expert in the area of data science field"},Object(f.a)(j,"address","Harrison, NJ"),Object(f.a)(j,"website","https://github.com/avavadhoot0204"),Object(f.a)(j,"education",[{UniversityName:"Rutgers University",specialization:"Master of Science in Information Technology and Analytics",MonthOfPassing:"Dec",YearOfPassing:"2020",Gpa:"3.6",Achievements:"Relevant Courses: Data Analysis and Visualization, Machine Learning and Statistics, Business Data Management, Analytics Business Intelligence, Project Management",AboutEdu:"My Graduate coursework has strengthen my concepts of Database Management and Database Design, Data Analysis and Visualization, ETL. I have gained knowledge and experience in Machine learning using statistical algorithms. Also, I have been following agile development methodology. I am always open to learning and so the technology stack I have selected ranges from frontend development to backend development and Data Science related courses. Apart from this, I have developed strong communication skills throughtout my project presentations and working in group improving my teamwork ability further. My coursework has helped me enhance my problem solving and analytical abilities."},{UniversityName:"University of Mumbai",specialization:"Bachelors in Computer Engineering",MonthOfPassing:"May",YearOfPassing:"2017",Gpa:"3.1",Achievements:"Relevant courses: Object-Oriented Programming Methodology, Data Structures, Web Programming, Structured Programming Approach, Artificial Intelligence, Database Management Systems, Advanced Database Management Systems",AboutEdu:"My Bachelor's coursework was a varied technological stack along with courses related to soft-skills. This coursework helped me in all-round development to become a successful software engineer. I develped a capstone project using AndroidSDK increasing my proficiency in Java and SQL. Also these courses helped me during my work-experience right from technical skills to soft skills, as my company was able to gain success in proposing development of new application, through my client communication and in-depth technical knowledge"}]),Object(f.a)(j,"work",[{CompanyName:"HERE Solutions India Private Limited",specialization:"Database Analyst",MonthOfLeaving:"May",YearOfLeaving:"2019",Achievements:"Automated database backup, restoration, report generation, performed the analysis with ETL tools increasing efficiency by 31%, Constructed pattern matching code snippets for 10,000+ roads to automatically instruct cars about navigation, Created and executed 50+ SQL nested queries daily, constructed KPI dashboard for data analysis with excel macros, pivot tables, Conducted data cleaning, preprocessing to remove inconsistency in CSV files before consumption by web services, Performed market analysis to efficiently using Tableau dashboards to achieve objectives, increasing sales by 24%, Received appreciation for automation of report generation, saving 2 hours of time and combined efforts on repetitive tasks daily"},{CompanyName:"Four Brothers Software Solutions",specialization:"Data Analyst Intern",MonthOfLeaving:"July",YearOfLeaving:"2015",Achievements:"Optimized pricing by capturing, cleansing, manipulating, and conducting visualization of raw data to assist in analytical data services using modern Business Intelligence and Data Visualization tools such as Tableau along with increasing efficiency by 28%, Estimated customer purchase behavior by designing and building models on large datasets and automating the analytics process, Utilized Google Analytics and Google Tag Manager and implemented new scripts that increased performance by 25%, Incorporated smooth automation into repetitive business tasks and lengthy processes using Python"},{CompanyName:"Rutgers University",specialization:"Adjunct Professor",MonthOfLeaving:"Till date",YearOfLeaving:"2020",Achievements:"Teaching undergraduate students Business Research Methods course, Developing and managing the class syllabus and ensuring that the syllabus meets department and \u25cfcollege standards, Planning and creating lectures, in-class discussions, and assignments, Grading assigned papers, quizzes, and exams, Assessing grades for students based on participation, performance in class, assignments, and examinations, Reporting student learning outcomes, class reviews, and analyzing student data, Collaborating with colleagues on the course curriculum, Participating in professional development activities"}]),Object(f.a)(j,"skills",[{skillname:"SQL"},{skillname:"Python"},{skillname:"Tableau"},{skillname:"Statistics"},{skillname:"MSOffice"},{skillname:"AWS"},{skillname:"HTML5"},{skillname:"React"},{skillname:"Javascript"},{skillname:"Java"},{skillname:"GoogleAnalytics"}]),Object(f.a)(j,"portfolio",[{name:"Suicide Rate Analysis",description:"application",imgurl:"images/portfolio/SuicideRate.jpg",url:"https://github.com/avavadhoot0204/Suicide-Rate-Analysis"},{name:"Movie Recommendation System",description:"application",imgurl:"images/portfolio/MovieRecommendation.jpg",url:"https://github.com/avavadhoot0204/Movie-Recommendation"},{name:"Telecommunication Management System",description:"mobileapp",imgurl:"images/portfolio/teleManagement.jpg",url:"https://github.com/avavadhoot0204/Telecommunication-Server-Management-System"}]),Object(f.a)(j,"testimonials",[{description:"Avadhoot is a great team player with good communication skill. he is highly motivated and passionate towards his career, always willing to learn new skills and technologies. Always focused towards work and target to complete within deadlines. Avadhoot has my highest recommendation.",name:"Sriram Naraynan, Project Manager at HERE Solutions India Private Limited"},{description:"Avadhoot Pawaskar is a hard working individual who makes sure the project timeline is followed and motivates other team members to give their best. He is very sharp and very good at analyzing and giving a right solution at its best. He is an asset to the company by his nature of work and solutions and commitment. I am sure with his technical finesse and contagious attitude he will reach great heights in his career. Apart from his technical skills he is very good as a person. I wish him all the best for his future career goals",name:"Jayashree Gokhale, Project Manager at Rave Technologies"},{description:"I had the privilege of working with Avadhoot and he is proactive, result oriented, responsible and technically sound employee and always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in SQL & C# technologies. He is a great asset to any company.",name:"Jugal Nathani, Data Engineer at HERE Solutions India Private Limited"},{description:"Avadhoot has been one of the most hardworking and dedicated subordinates I have come across. Being his trainer and reporting manager for some of the assignments, I can confidently vouch for his quick learning abilities and his customer handling skills. Within few months of working on the assignments, he was counted as one of trusted resources when it came to project deliveries. I was always amazed to see how he balanced his extra curricular activities within organization along with project pressures. With his management skills, dedication and effort, he surely will go way ahead in his career.",name:"Kunal Chavan, Spatial Data Specialist I at HERE Solutions India Private Limited"}]),j),M=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(u,{resumeData:D}),s.a.createElement(h,{resumeData:D}),s.a.createElement(p,{resumeData:D}),s.a.createElement(g,{resumeData:D}),s.a.createElement(E,{resumeData:D}),s.a.createElement(S,{resumeData:D}),s.a.createElement(A,{resumeData:D}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.cb933379.chunk.js.map