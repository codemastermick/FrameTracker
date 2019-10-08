import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-copyright",
  templateUrl: "./copyright.component.html",
  styleUrls: ["./copyright.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyrightComponent implements OnInit {

  constructor(private tagger: TagService) { }

  ngOnInit() {
    this.tagger.setTitle("Copyright information for The Tenno Sanctuary");
    this.tagger.setDescription("Copyright information for the webapp The Tenno Sanctuary");
  }

}
