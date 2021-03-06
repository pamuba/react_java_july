import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from './../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[] = [];

  selectedVideo:Video;

  public hidenewVideo:boolean = true;

  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe(resVideoData => {
          for(const d of(resVideoData as any)){
            this.videos.push(d);
          }
        });
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo=>{
          this.videos.push(resNewVideo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        })
  }

  
  onUpdateVideoEvent(video:Video){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo);
        this.selectedVideo = null;
  }

  newVideo(){
    this.hidenewVideo = false;
  }

}
