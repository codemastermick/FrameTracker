import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-contrib",
  templateUrl: "./contrib.component.html",
  styleUrls: ["./contrib.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContribComponent implements OnInit {

  constructor(private tagger: TagService) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Contribution Information");
    this.tagger.setDescription("Contribution information for The Tenno Sanctuary");
  }

}
