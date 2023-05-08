import { Component ,OnInit} from '@angular/core';
import { EnrollService } from '../Service/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title = "JavaScript"

  onEnroll(){
   const enrollservice = new EnrollService();
   enrollservice.OnEnrollClicked(this.title);
  }
} 