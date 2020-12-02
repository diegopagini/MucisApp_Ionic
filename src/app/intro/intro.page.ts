import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };

  slides = [
    {
      title: "Disfruta de tu musica",
      subtitle: "En cualquier lugar",
      description:
        "Tu musica, tus artistas, tus albums, en toda hora, en todo lugar.",
      icon: "play",
    },
  ];

  constructor(private router: Router, private storage: Storage) {}

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {}
}
