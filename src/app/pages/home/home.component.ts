import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private tagger: TagService) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary");
    this.tagger.setDescription("A public Warframe data browser app");
  }

}
