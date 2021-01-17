import { SummaryPipe } from './summary.pipe';
import { CoursesSevice } from './courses.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: "./courses.component.html"
})
export class CoursesComponent{
  title = "List of Courses";
  courses = ['1','2','3'];
  colSpan=2;
  imageUrl = "http://lorempixel.com/400/200";
  isActive = true;
  email = 'me@examole.com';

  courseItems = {
    title: " The Complete Angular Course",
    rating: 4.2342432,
    students: 300034,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  text= `Investor funding seed round churn rate customer bootstrapping scrum project validation buzz startup advisor infographic. Alpha holy grail founders innovator gamification non-disclosure agreement. Hackathon A/B testing venture learning curve backing creative seed money responsive web design. Pitch crowdfunding paradigm shift founders partnership business model canvas launch party non-disclosure agreement focus branding burn rate lean startup creative. Social proof scrum project infographic crowdfunding virality paradigm shift. Technology bootstrapping metrics network effects traction burn rate partnership holy grail termsheet social proof prototype bandwidth. User experience termsheet lean startup incubator. Buyer interaction design sales series A financing user experience. Business-to-business crowdsource user experience. Beta stock series A financing venture supply chain lean startup growth hacking business-to-consumer angel investor deployment funding buyer accelerator.`;

  onSave(e){
    e.stopPropagation();
    console.log(e);
  }
  onDivClicked(){
    console.log("div clicked");
  }
  onKeyUp(email){
    console.log(email);
  }
  constructor(service: CoursesSevice){
    this.courses = service.getCourses();
  }
}
