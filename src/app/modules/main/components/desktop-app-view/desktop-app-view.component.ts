import {Component} from '@angular/core';
import {Result, ClientDetector, OsNames} from '../../../shared/services/client-detector.service';
import {UserAnalyticsService} from '../../../user-analytics/services/user-analytics.service';

@Component({
  selector: 'app-desktop-app-view',
  styleUrls: ['./desktop-app-view.style.scss'],
  templateUrl: './desktop-app-view.template.html'
})

export class DesktopAppViewComponent {

  constructor(private userAnalyticsService: UserAnalyticsService) {
  }

  isWindowsPc(): boolean {
    const os: Result = ClientDetector.getOs();
    return (
      os.name === OsNames.Windows && os.version >= 7
    );
  }

  isMacPc(): boolean {
    const os: Result = ClientDetector.getOs();
    return (
      os.name === OsNames.MacOs && os.version > 0
    );
  }

  download(platform: string) {
    this.userAnalyticsService.trackEvent(`download_desktop_app_${platform}`, 'click', 'app-desktop-app-view');
  }
}