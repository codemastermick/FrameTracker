import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class TagService {

  constructor(private titleService: Title, private metaTagService: Meta) {
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setDescription(description: string) {
    this.metaTagService.updateTag({ name: "description", content: description });
  }
}
